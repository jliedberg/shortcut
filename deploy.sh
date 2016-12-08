#!/bin/bash

git checkout -b master-deploy
npm run build
git add -f public/
git add -f webpack-assets.json
git commit -m "Merge build into master"
git push origin master-deploy --force
git checkout master
git branch -D master-deploy
