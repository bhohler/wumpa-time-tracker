#!/usr/bin/env sh

set -e

rm -rf dist
mkdir dist

cd dist

git init
git remote add origin git@github.com:bhohler/wumpa-time-tracker.git
git fetch --depth 1 origin gh-pages
git checkout gh-pages

npm run build:prod

git add -A

git commit -m 'GitHub Pages deploy'
git push -u origin gh-pages

cd -
