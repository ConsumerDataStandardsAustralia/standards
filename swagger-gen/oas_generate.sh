#!/usr/bin/env bash
set -o errexit #abort if any command fails

#Requires minumum JDK 7 or 8 on $PATH
#https://github.com/swagger-api/swagger-codegen/blob/master/README.md

# OAS Codegen
# wget http://central.maven.org/maven2/org/openapitools/openapi-generator-cli/3.3.4/openapi-generator-cli-3.3.4.jar -O openapi-generator-cli.jar

#location of swagger codegen install
SWAGGER_CODEGEN=$HOME/swagger-codegen
#Location of openapi codegen install
OAS_CODEGEN=$HOME/openapi-codegen

#location of generated output
SWAGGER_CODEGEN_OUTPUT=/tmp/cds_swagger_gen

#TODO Command line parse
# format <filename> <cli_output_format> <ext> <output-dir>
INPUT_SWAGGER="$1"
OUTPUT_FORMAT="$2"
OUTPUT_EXT="$3"
OUTPUT_DIR="$4"

echo "*** Input Swagger: " $INPUT_SWAGGER
echo "*** Output Format: " $OUTPUT_FORMAT
echo "*** Output Extension" $OUTPUT_EXT
echo "*** Output Dir:" $OUTPUT_DIR

mkdir $SWAGGER_CODEGEN_OUTPUT

#codegen validator
echo "*** Checking OAS Validator ***"
VALID_OAS=$(java -jar $OAS_CODEGEN/openapi-generator-cli-6.6.0.jar validate -i $INPUT_SWAGGER)
echo "*** OAS Validator: " $VALID_OAS

# generate
echo "*** Generating $OUTPUT_FORMAT"
java -jar $OAS_CODEGEN/openapi-generator-cli-5.2.1.jar generate -i $INPUT_SWAGGER -g $OUTPUT_FORMAT -o $SWAGGER_CODEGEN_OUTPUT > $SWAGGER_CODEGEN_OUTPUT/log.txt 2>&1

echo `cat $SWAGGER_CODEGEN_OUTPUT/README.md`

FILENAME=`basename $INPUT_SWAGGER .json`
OUTFILE="${FILENAME}.$OUTPUT_EXT"
#echo "Changing Extension \"$FILENAME\" --> \"$OUTFILE\" ."

# move it to output dir
echo "*** Moving to output dir " $OUTPUT_DIR
if [ "$OUTPUT_EXT" == "yaml" ]; then
    cp $SWAGGER_CODEGEN_OUTPUT/openapi/openapi.$OUTPUT_EXT $OUTPUT_DIR/$OUTFILE
else
    cp $SWAGGER_CODEGEN_OUTPUT/openapi.$OUTPUT_EXT $OUTPUT_DIR/$OUTFILE
fi
echo "*** Outfile: $OUTPUT_DIR/$OUTFILE "
#ls -la $OUTPUT_DIR/$OUTFILE

# cleanup output
echo "*** Removing temporary swagger gen output dir" $SWAGGER_CODEGEN_OUTPUT
rm -Rf $SWAGGER_CODEGEN_OUTPUT


echo "*** Complete ***"
echo
