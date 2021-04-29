#!/usr/bin/env bash

echo "*** Generating Markdown ***"

node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_full.json -o cds_full.md

diff -w cds_full.md ../slate/source/includes/cds_full.md > diff.txt

node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_widdershins.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_admin.json -o cds_admin.md

# TODO Fix
# Hack to clean up markdown for slate. Widdershins output does not support more than one swagger file markdown
sed -i '' -e '/consumer-data-standards-administration-end-points-admin-apis/d' cds_admin.md
sed -i '' -e 's/# Schemas/## Schemas/g' cds_admin.md
sed -i '' -e 's/This operation does not require authentication/This operation may only be called by the CDR Register/g' cds_admin.md

diff -w cds_admin.md ../slate/source/includes/cds_admin.md > diff_admin.txt

echo "*** Complete ***"
