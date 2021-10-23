#!/usr/bin/env bash

echo "*** Generating Markdown ***"

# Initialise the log file
echo "Starting create_mardown..." > create-markdown-log.txt


echo "*** Generate cds_banking.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_banking.json -o cds_banking.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

echo "*** Removing redundant Banking header"
{
  sed -i '' -e '/xxxx/d' cds_banking.md
  sed -i '' -e 's/# Schemas/## Schemas/g' cds_banking.md
} >> create-markdown-log.txt 2>&1

diff -w cds_banking.md ../slate/source/includes/cds_banking.md > diff_banking.txt


echo "*** Generate cds_energy.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_energy.json -o cds_energy.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

echo "*** Removing redundant Energy header"
{
  sed -i '' -e '/xxxx/d' cds_energy.md
  sed -i '' -e 's/# Schemas/## Schemas/g' cds_energy.md
} >> create-markdown-log.txt 2>&1

diff -w cds_energy.md ../slate/source/includes/cds_energy.md > diff_energy.txt


echo "*** Generate cds_common.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_common.json -o cds_common.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

echo "*** Removing redundant Common header"
{
  sed -i '' -e '/xxxx/d' cds_common.md
  sed -i '' -e 's/# Schemas/## Schemas/g' cds_common.md
} >> create-markdown-log.txt 2>&1

diff -w cds_common.md ../slate/source/includes/cds_common.md > diff_common.txt


echo "*** Generate cds_admin.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_admin.json -o cds_admin.md
} >> create-markdown-log.txt 2>&1

echo "*** Removing redundant Admin header"
{
  sed -i '' -e '/consumer-data-standards-administration-end-points-admin/d' cds_admin.md
  sed -i '' -e '/consumer-data-standards-administration-end-points-admin-apis/d' cds_admin.md
  sed -i '' -e 's/# Schemas/## Schemas/g' cds_admin.md
  sed -i '' -e 's/This operation does not require authentication/This operation may only be called by the CDR Register/g' cds_admin.md
} >> create-markdown-log.txt 2>&1

diff -w cds_admin.md ../slate/source/includes/cds_admin.md > diff_admin.txt


echo "*** Generate cds_register.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_register.json -o cds_register.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

echo "*** Removing redundant Register header"
{
  sed -i '' -e '/consumer-data-right-cdr-register-participant-discovery-apis-register-apis/d' cds_register.md
  sed -i '' -e 's/# Schemas/## Schemas/g' cds_register.md
} >> create-markdown-log.txt 2>&1

diff -w cds_register.md ../slate/source/includes/cds_register.md > diff_register.txt


echo "*** Generate cds_dcr.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_dcr.json -o cds_dcr.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

echo "*** Removing redundant DCR header"
{
  sed -i '' -e '/cdr-dynamic-client-registration-api-client-registration/d' cds_dcr.md
  sed -i '' -e 's/# Schemas/## Schemas/g' cds_dcr.md
} >> create-markdown-log.txt 2>&1

diff -w cds_dcr.md ../slate/source/includes/cds_dcr.md > diff_dcr.txt

echo "*** Complete ***"
