#! /bin/bash

SRC_DIR=$(cd `dirname $0`; pwd)
source ${SRC_DIR}/bin/activate

python3 ${SRC_DIR}/src/app.py