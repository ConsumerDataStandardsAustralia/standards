#!/usr/bin/env bash
set -o errexit #abort if any command fails
#Requires minumum JDK 7 or 8 on $PATH
#https://github.com/swagger-api/swagger-codegen/blob/master/README.md

#location of swagger codegen install
SWAGGER_CODEGEN=$HOME/swagger-codegen
#location of generated output
SWAGGER_CODEGEN_OUTPUT=/tmp/tmp_swagger_gen

#Input Swagger file
INPUT_SWAGGER="$1"
OUTPUT_FORMAT="$2"
OUTPUT_EXT="$3"
OUTPUT_DIR="$4"

echo "*** Checking if Swagger is valid: " $1
CHECK=$(curl -X "POST" "http://online.swagger.io/validator/debug" --silent -d @$1)
if [[ $CHECK != "{}" ]]; then
echo -e "\n*** Sorry this is an invalid Swagger:\n$CHECK\n"
exit 1
fi

# generate
echo "*** Generating $OUTPUT_FORMAT"
java -jar $SWAGGER_CODEGEN/swagger-codegen-cli.jar generate -i $INPUT_SWAGGER -l $OUTPUT_FORMAT -o $SWAGGER_CODEGEN_OUTPUT


FILENAME=`basename "${1}" .json`
OUTFILE="${FILENAME}.$OUTPUT_EXT"
# tell the user what is happening
echo "Changing Extension \"$FILENAME\" --> \"$OUTFILE\" ."

# move it to slate dir
echo "*** Moving to output dir " $CDS_SLATE_SWAGGER_DIR
mv $SWAGGER_CODEGEN_OUTPUT/swagger.$OUTPUT_EXT $OUTPUT_DIR/$OUTFILE
echo "*** Outfile: $CDS_SLATE_SWAGGER_DIR/$OUTFILE "
ls -la $CDS_SLATE_SWAGGER_DIR/$OUTFILE

# cleanup output
echo "*** Removing temporary swagger gen output dir" $SWAGGER_CODEGEN_OUTPUT
rm -Rf $SWAGGER_CODEGEN_OUTPUT

echo "*** Complete ***"
