#!/usr/bin/env bash

set -ue -o pipefail

echo "++++++++++++++++++++++++++++++++++++++++++"
echo "+ $( basename "${BASH_SOURCE[0]}" )"
echo "++++++++++++++++++++++++++++++++++++++++++"

bash ${BIN_DIR}/setup-app.sh

assert_eq "$(execute_on_dev '[ -f /opt/kowak/conf/ecosystem.config.js ] && echo "file_exists"')" \
            "file_exists" \
            "ecosytem conf has not been copied"

assert_eq "$(execute_on_dev '[ -f /opt/kowak/app/source/pm2/api/package.json ] && echo "file_exists"')" \
            "file_exists" \
            "app has not been deployed with pm2"