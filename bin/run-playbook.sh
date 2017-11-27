#!/usr/bin/env bash

set -ue -o pipefail

readonly SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

function run_playbook {
    local tags=${1}
    pushd ${SCRIPT_DIR}/../ansible > /dev/null
    ansible-playbook --tags="${tags}" --private-key=.vagrant/machines/kowak.dev/virtualbox/private_key -u vagrant -i .vagrant/provisioners/ansible/inventory/vagrant_ansible_inventory main.yml
    popd > /dev/null
}


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
    -t|--tag)
        readonly TAG="$2"
        shift
    ;;
    *)
     echo "Invalid arguments"
     exit 1
    ;;
esac
shift
done

run_playbook ${TAG}

