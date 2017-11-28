#!/usr/bin/env bash

set -ue -o pipefail

echo "++++++++++++++++++++++++++++++++++++++++++"
echo "+ $( basename "${BASH_SOURCE[0]}" )"
echo "++++++++++++++++++++++++++++++++++++++++++"

run_playbook dev init-env

assert_eq "$(execute_on_dev 'command -v git')" \
                "/usr/bin/git" \
                "git is not installed"

assert_eq "$(execute_on_dev 'command -v node')" \
            "/usr/bin/node" \
            "node is not installed"

assert_eq "$(execute_on_dev 'command -v npm')" \
            "/usr/bin/npm" \
            "npm is not installed"

assert_eq "$(execute_on_dev 'command -v pm2')" \
            "/usr/bin/pm2" \
            "pm2 is not installed"
