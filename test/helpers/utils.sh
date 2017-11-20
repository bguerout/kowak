if ! [ -x "$(command -v vagrant)" ]; then
    echo 'Error: vagrant is not installed.' >&2
    exit 1
fi

function create_vagrant_virtual_machine {
    pushd ansible > /dev/null
        vagrant halt
        vagrant destroy -f || true
        vagrant up
    popd > /dev/null
}

function run_playbook {
    local tags=${1}
    pushd ansible > /dev/null
       ANSIBLE_ARGS="${1}" vagrant provision
    popd > /dev/null
}

function execute_remote {
    local env="${1}"
    local command="${2}"
    if [ "${env}" = "dev" ]; then
        pushd ansible > /dev/null
            ssh $(vagrant ssh-config | awk 'NR>1 {print " -o "$1"="$2}') localhost "${command}"
        popd > /dev/null
    else
        echo "not yet implemented"
        exit 1    
    fi
}

