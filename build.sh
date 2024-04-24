#!/usr/bin/env bash
set -o errexit #abort if any command fails

echo "*** Starting Full Docs Build ***"

BUILD_DIR=$PWD

echo $PWD
cd $BUILD_DIR/swagger-gen
./generate_json.sh
./generate_yaml.sh

./create_markdown.sh
./publish_markdown.sh

echo "*** Building Docs ***"
cd $BUILD_DIR/slate
./build.sh

echo "*** Build Complete ***"
echo "*** To test the docs execute run.sh in the slate dir ***"
