#!/usr/bin/env bash

set -ue -o pipefail

create_vagrant_virtual_machine 
assert_eq "$(execute_remote ${ENV} 'command -v git')" "/usr/bin/git" "git is not installed"
assert_eq "$(execute_remote ${ENV} 'command -v node')" "/usr/bin/node" "node is not installed"
assert_eq "$(execute_remote ${ENV} 'command -v npm')" "/usr/bin/npm" "npm is not installed"
assert_eq "$(execute_remote ${ENV} 'command -v pm2')" "/usr/bin/pm2" "pm2 is not installed"

echo "[SUCCESS] Tests passed!"