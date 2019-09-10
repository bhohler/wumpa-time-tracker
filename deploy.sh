#!/usr/bin/env sh

set -e

rm -rf .git-gh-pages

rm -rf dist
mkdir dist

cd dist

git init
git remote add origin git@github.com:bhohler/wumpa-time-tracker.git
git fetch --depth 1 origin gh-pages
git checkout gh-pages

cd -

mv dist/.git .git-gh-pages

npm run build:prod

mv .git-gh-pages dist/.git

cd dist

git add -A

git commit -m 'GitHub Pages deploy'
git push -u origin gh-pages

cd -
