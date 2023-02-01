cmake_minimum_required(VERSION 3.13)
project(aakha)
set(CMAKE_CXX_STANDARD 14)

set(NanoDetIncludeDirectory ${CMAKE_SOURCE_DIR}/include)

set(ncnn_DIR "./ncnn/build/install/lib/cmake/ncnn" CACHE PATH "Directory that contains ncnnConfig.cmake")

find_package( ncnn REQUIRED )
find_package( OpenCV REQUIRED )
include_directories( ${OpenCV_INCLUDE_DIRS} )

set(SOURCE_FILES src/main.cpp ./src/NanoDetPlus.cpp)

add_executable(aakha ${SOURCE_FILES})

target_include_directories(aakha PRIVATE ${NanoDetIncludeDirectory})
target_link_libraries( aakha ${OpenCV_LIBS} )
target_link_libraries( aakha ncnn)
