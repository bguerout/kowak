#!/usr/bin/env bash

set -ue -o pipefail

CURRENT_DIR=$(pwd)
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

pushd misc/crowdin > /dev/null
    echo "A commit is pushed into branch ${BRANCH_NAME}, Jenkins triggers this job to upload i18n files into crowdin"
    docker build . -t crowdin
    docker run -v "${CURRENT_DIR}/ui":"/translations/${BRANCH_NAME}/ui" crowdin bash /app/crowdin.sh --job UPLOAD
popd > /dev/null
