#!/usr/bin/env bash

set -ue -o pipefail

emulate_branch_checkout() {
    echo "$(pwd)/branches/${1}"
}

echo "Something is pushed in branch releases/9.x, Jenkins triggers a job to upload i18n files into crowdin"
docker run -v $(emulate_branch_checkout 9.x)/ui:/translations/9.x/ui kowak bash /app/build.sh --job UPLOAD

echo "Something is pushed in branch releases/10.x, Jenkins triggers a job to upload i18n files into crowdin"
docker run -v $(emulate_branch_checkout 10.x)/ui:/translations/10.x/ui kowak bash /app/build.sh --job UPLOAD

echo "Something is pushed in branch master (aka 11), Jenkins triggers a job to upload i18n files into crowdin"
docker run -v $(emulate_branch_checkout master)/ui:/translations/master/ui kowak bash /app/build.sh --job UPLOAD
