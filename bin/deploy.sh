#!/usr/bin/env bash

set -ue -o pipefail

readonly SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
readonly ANSIBLE_DIR=${SCRIPT_DIR}/../ansible
OPTIONS="--force"

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
        -s|--setup)
            readonly OPTIONS="setup"
            shift
        ;;
        *)
            echo "Invalid arguments"
            exit 1
        ;;
    esac
    shift
done

pushd ${ANSIBLE_DIR} > /dev/null
ansible-playbook --tags=deploy-app \
            --private-key=${ANSIBLE_DIR}/.vagrant/machines/kowak.dev/virtualbox/private_key \
            -u vagrant \
            -i ${ANSIBLE_DIR}/.vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory \
            main.yml
popd > /dev/null

APP_VERSION="master" pm2 deploy ${ANSIBLE_DIR}/roles/kowak/files/opt/kowak/ecosystem.${ENV}.config.js ${ENV} ${OPTIONS}
