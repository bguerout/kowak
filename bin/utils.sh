#!/usr/bin/env bash

if ! [ -x "$(command -v vagrant)" ]; then
    echo 'Error: vagrant is not installed.' >&2
    exit 1
fi

function run_playbook {
    local tags=${1}
    pushd ${SCRIPT_DIR}/../ansible > /dev/null
        ansible-playbook --tags="${tags}" --private-key=.vagrant/machines/kowak.dev/virtualbox/private_key -u vagrant -i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory main.yml
    popd > /dev/null
}