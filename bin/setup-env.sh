#!/usr/bin/env bash

set -ue -o pipefail

readonly SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source ${SCRIPT_DIR}/utils.sh

#########################
#COMMAND LINE INTERFACE
#########################
while [[ $# > 1 ]]
do
key="$1"
case $key in
     -e|--env)
        readonly ENV="$2"
        shift
    ;;
    *)
     echo "Invalid arguments"
     exit 1
    ;;
esac
shift
done

run_playbook prepare-env

