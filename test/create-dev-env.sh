#!/usr/bin/env bash

set -ue -o pipefail

readonly SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source ${SCRIPT_DIR}/helpers/utils.sh

create_dev_env
