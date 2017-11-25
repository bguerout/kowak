#!/usr/bin/env bash

set -ue -o pipefail

readonly SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
readonly BIN_DIR=${SCRIPT_DIR}/../bin
readonly ENV='dev'

source ${SCRIPT_DIR}/helpers/utils.sh
source ${SCRIPT_DIR}/helpers/assert.sh

source ${SCRIPT_DIR}/integration/should-prepare-env.sh
source ${SCRIPT_DIR}/integration/should-prepare-app.sh

echo "[SUCCESS] Tests passed!"
