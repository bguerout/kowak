#!/usr/bin/env bash

set -ue -o pipefail

bash ${BIN_DIR}/setup-app.sh
assert_eq "$(execute_remote ${ENV} '[ -f /opt/kowak/ecosystem.config.js ] && echo "exist"')" "exist" "ecosytem has not been copied"

echo "[SUCCESS] Tests passed!"