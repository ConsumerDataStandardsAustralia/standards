#!/usr/bin/env bash

echo "*** Generating Markdown ***"

# Initialise the log file
echo "Starting create_markdown..." > create-markdown-log.txt


echo "*** Generate cds_banking.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_banking.json -o cds_banking.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_banking.md ../slate/source/includes/cds_banking.md > diff_banking.txt

echo "*** Generate cds_banking_non_bank_lending.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_banking_non_bank_lending.json -o cds_banking_non_bank_lending.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_banking_non_bank_lending.md ../slate/source/includes/cds_banking_non_bank_lending.md > diff_banking_non_bank_lending.txt


echo "*** Generate cds_energy.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_energy.json -o cds_energy.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_energy.md ../slate/source/includes/cds_energy.md > diff_energy.txt

echo "*** Generate cds_energy_sdh.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_energy_sdh.json -o cds_energy_sdh.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_energy_sdh.md ../slate/source/includes/cds_energy_sdh.md > diff_energy_sdh.txt

echo "*** Generate cds_telco.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_telco.json -o cds_telco.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_telco.md ../slate/source/includes/cds_telco.md > diff_telco.txt

echo "*** Generate cds_common.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_common.json -o cds_common.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_common.md ../slate/source/includes/cds_common.md > diff_common.txt


echo "*** Generate cds_admin.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_admin.json -o cds_admin.md
} >> create-markdown-log.txt 2>&1

echo "*** Removing redundant Admin header"
{
  sed -i '' -e 's/This operation does not require authentication/This operation may only be called by the CDR Register/g' cds_admin.md
} >> create-markdown-log.txt 2>&1

diff -w cds_admin.md ../slate/source/includes/cds_admin.md > diff_admin.txt


echo "*** Generate cds_register.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_register.json -o cds_register.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_register.md ../slate/source/includes/cds_register.md > diff_register.txt


echo "*** Generate cds_register_banking_non_bank_lending.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_register_banking_non_bank_lending.json -o cds_register_banking_non_bank_lending.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_register_banking_non_bank_lending.md ../slate/source/includes/cds_register_banking_non_bank_lending.md > diff_register.txt


echo "*** Generate cds_dcr.md"
{
  node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript--nodejs:Javascript' --summary api/cds_dcr.json -o cds_dcr.md >> create-markdown-log.txt
} >> create-markdown-log.txt 2>&1

diff -w cds_dcr.md ../slate/source/includes/cds_dcr.md > diff_dcr.txt

echo "*** Complete ***"
