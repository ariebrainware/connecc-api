#!/bin/bash
git config --global push.default simple # we only want to push one branch — master
# specify the repo on the live server as a remote repo, and name it 'production'
# <user> here is the separate user you created for deploying
git remote add production ssh://brainware@igather.sytes.net:1118/home/brainware/projects/connecc-api
git push production master # push our updates