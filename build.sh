#!/usr/bin/env bash

set -ue -o pipefail

pushd `dirname $0` > /dev/null
BASEDIR=`pwd`
popd > /dev/null
JOB="UPLOAD"
DRY_RUN=""

while [[ $# > 1 ]]
do
key="$1"
case $key in
    -j|--job)
        JOB="$2"
        shift
    ;;
    -d|--dry-run)
        DRY_RUN="--dryrun"
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
UPLOAD)
    pushd /app > /dev/null
        crowdin upload sources ${DRY_RUN}
    popd > /dev/null
    ;;
DOWNLOAD)
    pushd /app > /dev/null
        crowdin download -l fr ${DRY_RUN}
    popd > /dev/null
    ;;
esac
