#!/usr/bin/env bash
arg1 = $1
arg2 = $2
git add .
git commit -m'Create the ${arg1} ${arg2}'
git push
