#!/usr/bin/env bash

set -ue -o pipefail

pushd `dirname $0` > /dev/null
BASEDIR=`pwd`
popd > /dev/null

while [[ $# > 1 ]]
do
key="$1"
case $key in
    -j|--job)
        JOB="$2"
        shift
    ;;
    -v|--version)
        VERSION="$2"
        shift
    ;;
    *)
     echo "Invalid arguments"
     exit 1
    ;;
esac
shift
done

case "$JOB" in
UPLOAD_FILES_TO_TRANSLATE)
    pushd /app > /dev/null
        crowdin upload sources
    popd > /dev/null
    ;;
BUILD_TRANSLATIONS)
    curl "https://api.crowdin.com/api/project/kowak/export?key=2bc319a7164349031f4f38d311e49daf&json=true"
    ;;
DOWNLOAD_TRANSLATIONS)
    # crowdin download seems not to work so do the same with the api
    ZIP_FILE=$(mktemp)
    curl -o ${ZIP_FILE} "https://api.crowdin.com/api/project/kowak/download/all.zip?key=2bc319a7164349031f4f38d311e49daf&language=all"
    unzip -d /translations ${ZIP_FILE}
    rm ${ZIP_FILE}
    ;;
esac
