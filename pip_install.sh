#! /bin/bash

SRC_DIR=$(cd `dirname $0`; pwd)
source ${SRC_DIR}/bin/activate
pip install $@
pip freeze > ${SRC_DIR}/requirements.txt