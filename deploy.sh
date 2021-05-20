#!/usr/bin/env sh

set -e

npm run build:doc

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/sxyhappy/vue2-maptalks.git master:gh-pages

cd -
