#!/usr/bin/env bash
set -o errexit #abort if any command fails
# format <filename> <cli_output_format> <ext> <output-dir>
./oas_generate.sh api/cds_banking.json openapi json ../slate/source/includes/swagger
./oas_generate.sh api/cds_energy.json openapi json ../slate/source/includes/swagger
./oas_generate.sh api/cds_energy_sdh.json openapi json ../slate/source/includes/swagger
./oas_generate.sh api/cds_common.json openapi json ../slate/source/includes/swagger
./oas_generate.sh api/cds_admin.json openapi json ../slate/source/includes/swagger
./oas_generate.sh api/cds_register.json openapi json ../slate/source/includes/swagger
./oas_generate.sh api/cds_dcr.json openapi json ../slate/source/includes/swagger
