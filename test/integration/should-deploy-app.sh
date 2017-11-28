#!/usr/bin/env bash

set -ue -o pipefail

echo "++++++++++++++++++++++++++++++++++++++++++"
echo "+ $( basename "${BASH_SOURCE[0]}" )"
echo "++++++++++++++++++++++++++++++++++++++++++"

run_playbook dev deploy-app

assert_eq "$(execute_on_dev '[ -f /opt/kowak/ecosystem.dev.config.js ] && echo "file_exists"')" \
            "file_exists" \
            "ecosytem conf has not been copied"

assert_eq "$(execute_on_dev '[ -f /home/vagrant/kowak/source/pm2/api/package.json ] && echo "file_exists"')" \
            "file_exists" \
            "app has not been setup with pm2"