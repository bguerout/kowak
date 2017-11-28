#!/usr/bin/env bash

if ! [ -x "$(command -v vagrant)" ]; then
    echo 'Error: vagrant is not installed.' >&2
    exit 1
fi

function create_dev_env {
    pushd ansible > /dev/null
        vagrant halt
        vagrant destroy -f || true
        vagrant up
    popd > /dev/null
}

function execute_on_dev {
    local command="${1}"
    pushd ansible > /dev/null
        ssh $(vagrant ssh-config | awk 'NR>1 {print " -o "$1"="$2}') localhost "${command}"
    popd > /dev/null
}

function run_playbook {
    local env="$1"
    local tags="$2"

    pushd ansible > /dev/null
        ansible-playbook -e "env=${env}" --tags="${tags}" \
        --private-key=.vagrant/machines/kowak.dev/virtualbox/private_key \
        -u vagrant \
        -i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory \
        main.yml
    popd > /dev/null
}

