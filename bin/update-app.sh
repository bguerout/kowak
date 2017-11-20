#!/usr/bin/env bash

set -ue -o pipefail

readonly SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

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

pm2 deploy ${SCRIPT_DIR}/../ansible/roles/prepare-app/files/opt/kowak/ecosystem.config.js ${ENV} update

