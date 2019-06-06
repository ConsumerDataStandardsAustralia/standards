#!/usr/bin/env bash
# format <filename> <cli_output_format> <ext> <output-dir>
./swagger_generate.sh api/cds_full.json swagger json .
./swagger_generate.sh api/cds_admin.json swagger json .
