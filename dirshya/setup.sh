git submodule update --init

rootDir=$(pwd)
ncnnDir="$(pwd)/ncnn"
ncnnVersion='20221128'

#---------------------------
# installing required packages
#---------------------------
sudo apt install build-essential git cmake libprotobuf-dev protobuf-compiler libvulkan-dev libopencv-dev

#---------------------------
# building libraries
#---------------------------
cd ncnn
git submodule update --init
git checkout $ncnnVersion

#---------------------------
# installing vulkan library
#---------------------------
wget https://sdk.lunarg.com/sdk/download/1.2.189.0/linux/vulkansdk-linux-x86_64-1.2.189.0.tar.gz?Human=true -O vulkansdk-linux-x86_64-1.2.189.0.tar.gz
tar -xf vulkansdk-linux-x86_64-1.2.189.0.tar.gz
export VULKAN_SDK=$(pwd)/1.2.189.0/x86_64

#---------------------------
# building ncnn
#---------------------------
mkdir $ncnnDir/build
cd $ncnnDir/build
cmake -DCMAKE_BUILD_TYPE=Release -DNCNN_VULKAN=ON ..
make -j`nproc`
make install

cd $rootDir

#---------------------------
# building drishya
#---------------------------
mkdir build
cd build
cmake ..
make -j`nproc`
