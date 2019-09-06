#!/usr/bin/env sh

set -e

npm run build:prod

cd dist

git init
git add -A
git checkout -b gh-pages
git commit -m 'Github Pages deploy'

git remote add origin git@github.com:bhohler/wumpa-time-tracker.git
git push -f -u origin gh-pages

cd -
