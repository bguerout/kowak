#!/usr/bin/env bash

set -ue -o pipefail

readonly SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

source ${SCRIPT_DIR}/helpers/utils.sh
source ${SCRIPT_DIR}/helpers/assert.sh

#Tests Suite
source ${SCRIPT_DIR}/integration/should-init-env.sh
source ${SCRIPT_DIR}/integration/should-deploy-app.sh

echo "[SUCCESS] Tests passed!"
