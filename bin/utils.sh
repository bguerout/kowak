if ! [ -x "$(command -v vagrant)" ]; then
    echo 'Error: vagrant is not installed.' >&2
    exit 1
fi

function run_playbook {
    local tags=${1}
    pushd ${SCRIPT_DIR}/../ansible > /dev/null
        ANSIBLE_ARGS="${1}" vagrant provision
    popd > /dev/null
}