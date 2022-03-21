#!/usr/bin/env bash
set -o errexit #abort if any command fails
# format <filename> <cli_output_format> <ext> <output-dir>
./swagger_generate.sh api/cds_banking.json swagger-yaml yaml ../slate/source/includes/swagger
./oas_generate.sh api/cds_energy.json openapi-yaml yaml ../slate/source/includes/swagger
./oas_generate.sh api/cds_energy_sdh.json openapi-yaml yaml ../slate/source/includes/swagger
./swagger_generate.sh api/cds_common.json swagger-yaml yaml ../slate/source/includes/swagger
./swagger_generate.sh api/cds_admin.json swagger-yaml yaml ../slate/source/includes/swagger
./swagger_generate.sh api/cds_register.json swagger-yaml yaml ../slate/source/includes/swagger
./swagger_generate.sh api/cds_dcr.json swagger-yaml yaml ../slate/source/includes/swagger
