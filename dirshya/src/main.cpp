#include <opencv2/core/core.hpp>
#include <opencv2/highgui/highgui.hpp>
#include <opencv2/imgproc/imgproc.hpp>
#include <iostream>
#include <net.h>
#include "NanoDetPlus.h"
#include <unistd.h>

#define DEBUG

std::chrono::high_resolution_clock::time_point speakBegin, speakEnd;
int speaking = 0;

void speak(std::string text, bool bypasstime=false){
    speakEnd = std::chrono::high_resolution_clock::now();
    if( speaking == 0 ){
        auto duration = std::chrono::duration_cast<std::chrono::seconds>(speakEnd - speakBegin);
        if( (duration.count() > 1 || bypasstime) ){
        speaking = 1;
        speakBegin = speakEnd;
        std::string command = "espeak \""+text+"\" &";
        const char* cmd = command.c_str();
        system(cmd);
        speaking = 0;
        }
    }
}

static const char* class_names[] = {
    "person", "bicycle", "car", "motorcycle", "fan", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "table", "table", "heater", "heater", "mouse", "remote", "keyboard", "cell phone",
    "microwave", "oven", "toaster", "sink", "table", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"
};

struct object_rect {
    int x;
    int y;
    int width;
    int height;
};

int resize_uniform(cv::Mat& src, cv::Mat& dst, cv::Size dst_size, object_rect& effect_area)
{
    int w = src.cols;
    int h = src.rows;
    int dst_w = dst_size.width;
    int dst_h = dst_size.height;
    dst = cv::Mat(cv::Size(dst_w, dst_h), CV_8UC3, cv::Scalar(0));

    float ratio_src = w * 1.0 / h;
    float ratio_dst = dst_w * 1.0 / dst_h;

    int tmp_w = 0;
    int tmp_h = 0;
    if (ratio_src > ratio_dst) {
        tmp_w = dst_w;
        tmp_h = floor((dst_w * 1.0 / w) * h);
    }
    else if (ratio_src < ratio_dst) {
        tmp_h = dst_h;
        tmp_w = floor((dst_h * 1.0 / h) * w);
    }
    else {
        cv::resize(src, dst, dst_size);
        effect_area.x = 0;
        effect_area.y = 0;
        effect_area.width = dst_w;
        effect_area.height = dst_h;
        return 0;
    }

    cv::Mat tmp;
    cv::resize(src, tmp, cv::Size(tmp_w, tmp_h));

    if (tmp_w != dst_w) {
        int index_w = floor((dst_w - tmp_w) / 2.0);
        for (int i = 0; i < dst_h; i++) {
            memcpy(dst.data + i * dst_w * 3 + index_w * 3, tmp.data + i * tmp_w * 3, tmp_w * 3);
        }
        effect_area.x = index_w;
        effect_area.y = 0;
        effect_area.width = tmp_w;
        effect_area.height = tmp_h;
    }
    else if (tmp_h != dst_h) {
        int index_h = floor((dst_h - tmp_h) / 2.0);
        memcpy(dst.data + index_h * dst_w * 3, tmp.data, tmp_w * tmp_h * 3);
        effect_area.x = 0;
        effect_area.y = index_h;
        effect_area.width = tmp_w;
        effect_area.height = tmp_h;
    }
    else {
        printf("error\n");
    }
    return 0;
}
void speakPriority(const cv::Mat& image,const std::vector<BoxInfo>& bboxes, object_rect& effect_roi){
    int src_w = image.cols;
    int src_h = image.rows;
    int dst_w = effect_roi.width;
    int dst_h = effect_roi.height;
    int c_dst_w = dst_w/2;
    int c_dst_h = dst_h/2;
    float width_ratio = (float)src_w / (float)dst_w;
    float height_ratio = (float)src_h / (float)dst_h;

    std::vector<std::pair<float,int>> weights;
    std::vector<std::pair<float,std::string>> location_x;
    std::vector<std::pair<float,std::string>> location_y;

    float w_location = 0.8;
    float w_prediction = 0.8;
    float w_depth = 0.1;
    int h_val_cond;
    int w_val_cond;
    float v_loc = 0;
    for (size_t i = 0; i < bboxes.size(); i++){
        float v_loc = 0, v_depth=0;
        const BoxInfo& bbox = bboxes[i];
	if( bbox.score < 0.5 ) continue;
        float d1,d2,d3;
        auto x1 = (bbox.x1 - effect_roi.x) * width_ratio;
        auto x2 = (bbox.x2 - effect_roi.x) * width_ratio;
        auto y1 = (bbox.y1 - effect_roi.y) * height_ratio;
        auto y2 = (bbox.y2 - effect_roi.y) * height_ratio;
        int c_box_w = x1 + (x2-x1) / 2;
        int c_box_h = y1 + (y2-y1) / 2;
        d1 = x1;
        d2 = x2 - x1;
        d3 = dst_w - x2;
        v_depth = d2/dst_w;
        float wt = w_depth * v_depth + w_location * v_loc + w_prediction * bbox.score;
        if( std::abs(d3-d1) > 0.01){
            v_loc = 1.00;
        } else {
            v_loc = d2 / std::abs(d3-d1) > 1 ? 1.00 : d2/std::abs(d3-d1);
        }
	h_val_cond = c_box_h - c_dst_h - 56;
	w_val_cond = c_box_w - c_dst_w - 101;
        if( h_val_cond < 0 ){
            location_y.push_back(std::make_pair(wt,"t"));
        } else {
            location_y.push_back(std::make_pair(wt,"b"));
        }
        if( w_val_cond > 0 ){
            location_x.push_back(std::make_pair(wt,"r"));
        } else {
            location_x.push_back(std::make_pair(wt,"l"));
        }
        weights.push_back(std::make_pair(wt,bbox.label));
    }
    std::sort(weights.begin(), weights.end(), [](const auto& l, const auto& r){
        return (l.first == r.first) ? l.second > r.second : l.first < r.first;
    });
    std::sort(location_x.begin(), location_x.end(), [](const auto& l, const auto& r){
        return (l.first == r.first) ? l.second > r.second : l.first < r.first;
    });
    std::sort(location_y.begin(), location_y.end(), [](const auto& l, const auto& r){
        return (l.first == r.first) ? l.second > r.second : l.first < r.first;
    });
    if( weights.size() > 0 ){
	    if( std::abs(h_val_cond) < 50 && std::abs(w_val_cond) < 50)
	    {
		std::string cnt= "c ";
        	speak( cnt + class_names[weights.back().second]);
	    }
	    else
        	speak(location_x.back().second + location_y.back().second + " " + class_names[weights.back().second]);
    }
}

void draw_bboxes(const cv::Mat& image, const std::vector<BoxInfo>& bboxes, object_rect effect_roi)
{
    int src_w = image.cols;
    int src_h = image.rows;
    int dst_w = effect_roi.width;
    int dst_h = effect_roi.height;
    float width_ratio = (float)src_w / (float)dst_w;
    float height_ratio = (float)src_h / (float)dst_h;
    speakPriority(image,bboxes,effect_roi);

    for (size_t i = 0; i < bboxes.size(); i++){
        const BoxInfo& bbox = bboxes[i];

        cv::rectangle(image, cv::Rect(cv::Point((bbox.x1 - effect_roi.x) * width_ratio, (bbox.y1 - effect_roi.y) * height_ratio),
                                      cv::Point((bbox.x2 - effect_roi.x) * width_ratio, (bbox.y2 - effect_roi.y) * height_ratio)), cv::Scalar(0,0,255));

        char text[256];
        sprintf(text, "%s %.1f%%", class_names[bbox.label], bbox.score * 100);

        int baseLine = 0;
        cv::Size label_size = cv::getTextSize(text, cv::FONT_HERSHEY_SIMPLEX, 0.4, 1, &baseLine);

        int x = (bbox.x1 - effect_roi.x) * width_ratio;
        int y = (bbox.y1 - effect_roi.y) * height_ratio - label_size.height - baseLine;
        if (y < 0) y = 0;
        if (x + label_size.width > image.cols) x = image.cols - label_size.width;

        cv::rectangle(image, cv::Rect(cv::Point(x, y), cv::Size(label_size.width, label_size.height + baseLine)),
            cv::Scalar(255,255,255), -1);
        cv::putText(image, text, cv::Point(x, y + label_size.height), cv::FONT_HERSHEY_SIMPLEX, 0.4, cv::Scalar(0, 0, 0));
    }
}

int traverse_objects(const cv::Mat& image, const std::vector<BoxInfo>& bboxes, object_rect effect_roi){
	std::cout<<"Pause"<<std::endl;
	speak("Pause");
    bool spokeInitialItem = false;
    if(bboxes.size() == 0) return 0;
    auto currentitem = bboxes.begin();
    for(auto it=bboxes.begin();it<bboxes.end(); it++){
        std::cout<<it->label<<" ";
        std::cout<<class_names[it->label]<<std::endl;
    }
    while (true){
        char keyPress = cv::waitKey(500);
        if(keyPress == 'd') break;
        if(keyPress == 'n'){
            if(!spokeInitialItem){
                spokeInitialItem = true;
                std::cout<<currentitem->label<<std::endl;
                speak(class_names[currentitem->label],true);
            }else if (currentitem != bboxes.end()){
                currentitem++;
                std::cout<<currentitem->label<<std::endl;
                speak(class_names[currentitem->label],true);
            } else {
                speak("end");
            }
        }
        if(keyPress == 'o'){
		std::cout<<"Switching heater off"<<std::endl;
		speak("Switching heater off");
		std::system("/usr/local/bin/python3.8 /home/pi/virtualeye/toggle.py");
	}

        if(keyPress == 'p'){
            if(currentitem != bboxes.begin()){
                currentitem--;
                std::cout<<currentitem->label<<std::endl;
                speak(class_names[currentitem->label],true);
            } else {
                speak("start");
            }
        }
    }
	std::cout<<"Continue"<<std::endl;
	speak("Continue");
    return 0;
}

const int ModelSize = 416;

int main(int argc, char** argv)
{
	float f;
	int i,Fcnt=0;
#ifdef DEBUG
	float FPS[16];
	for(i=0;i<16;i++) FPS[i]=0.0;
#endif
	cv::Mat frame;
	speakBegin = std::chrono::high_resolution_clock::now();
	std::chrono::high_resolution_clock::time_point Tbegin, Tend;

	NanoDet nanodet = NanoDet("nanodet-plus-m_416.param", "nanodet-plus-m_416.bin", ModelSize);

  	cv::VideoCapture cap(0);
  	if (!cap.isOpened()) {
       		std::cerr << "ERROR: Unable to open the camera" << std::endl;
       		return 0;
        }
std::cout << "Firing Up the view" << std::endl;

	while(1){
	cap >> frame;
#ifdef DEBUG
	if (frame.empty()) {
	    std::cerr << "End of view" << std::endl;
	    break;
	}

        Tbegin = std::chrono::high_resolution_clock::now();
#endif

        object_rect effect_roi;
        cv::Mat resized_img;
        resize_uniform(frame, resized_img, cv::Size(ModelSize, ModelSize), effect_roi);
        auto results = nanodet.detect(resized_img, 0.4, 0.5);
        draw_bboxes(frame, results, effect_roi);

#ifdef DEBUG
        Tend = std::chrono::high_resolution_clock::now();

        f = std::chrono::duration_cast <std::chrono::milliseconds> (Tend - Tbegin).count();
        if(f>0.0) FPS[((Fcnt++)&0x0F)]=1000.0/f;
        for(f=0.0, i=0;i<16;i++){ f+=FPS[i]; }
	cv::putText(frame, cv::format("FPS %0.2f", f/16),cv::Point(10,20),cv::FONT_HERSHEY_SIMPLEX,0.6, cv::Scalar(0, 0, 255));
#endif
        cv::imshow("Drishya",frame);
        char keyPress = cv::waitKey(1);
        if(keyPress == 27) break;
        else if(keyPress == 'd'){
           traverse_objects(frame,results, effect_roi); 
        }
    }

    return 0;
}
