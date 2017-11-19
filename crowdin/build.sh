#!/usr/bin/env bash

set -ue -o pipefail

pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null
UI_DIR="${SCRIPT_DIR}/ui"
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

while [[ $# > 1 ]]
do
key="$1"
case $key in
    -j|--job)
        JOB="$2"
        shift
    ;;
    *)
     echo "Invalid arguments"
     exit 1
    ;;
esac
shift
done

function crowdin {
  docker build ${SCRIPT_DIR}/misc/crowdin -t crowdin
  docker run -v "${UI_DIR}":"/translations/${BRANCH_NAME}/ui" crowdin:latest bash /app/crowdin.sh $1
} 

case "$JOB" in
CROWDIN_UPLOAD)
    crowdin "--job UPLOAD_FILES_TO_TRANSLATE"
    ;;
CROWDIN_DOWNLOAD)
    crowdin "--job BUILD_TRANSLATIONS"
    crowdin "--job DOWNLOAD_TRANSLATIONS"
    ;;
esac
