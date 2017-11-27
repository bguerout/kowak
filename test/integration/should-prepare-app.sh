#!/usr/bin/env bash

set -ue -o pipefail

echo "++++++++++++++++++++++++++++++++++++++++++"
echo "+ $( basename "${BASH_SOURCE[0]}" )"
echo "++++++++++++++++++++++++++++++++++++++++++"

bash ${BIN_DIR}/run-playbook.sh --env dev --tag prepare-app

assert_eq "$(execute_on_dev '[ -f /opt/kowak/ecosystem.config.js ] && echo "file_exists"')" \
            "file_exists" \
            "ecosytem conf has not been copied"
