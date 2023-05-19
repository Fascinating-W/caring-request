#!/usr/bin/env sh
###
 # @Author: Wanko
 # @Date: 2023-02-16 18:41:13
 # @LastEditors: Wanko
 # @LastEditTime: 2023-05-19 10:58:22
 # @Description: 
### 
set -e

NODE_VERSION=$(node -p -e "require('./package.json').version")
echo "Current version is $NODE_VERSION"
echo "Enter release version: "
read VERSION
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo  # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "🕙 Releasing $VERSION ..."
  git ci "[release] $VERSION"
  npm version $VERSION --message "[release] $VERSION"
  git push origin master
  npm publish
fi
echo "🎉 $VERSION version publish success"
