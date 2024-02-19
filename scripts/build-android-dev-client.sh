#!/usr/bin/env bash
ORIG_DIR=$(pwd)

cd $(dirname $0)
TEMP_DIR=$(mktemp -d)

rsync -av "../" "$TEMP_DIR" --exclude "node_modules" >> /dev/null

cd $TEMP_DIR

npm install

npx --yes expo-doctor

NODE_ENV=production

CI=1 npx --yes expo prebuild -p android --clean

cd ./android

./gradlew :app:bundleRelease

