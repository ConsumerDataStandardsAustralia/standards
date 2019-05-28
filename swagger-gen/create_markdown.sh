#!/usr/bin/env bash
cp ../slate/source/includes/swagger/cds_full.json .
node ./widdershins-cdr/widdershins.js --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary cds_full.json -o cds_full.md
diff -w cds_full.md ../slate/source/includes/cds_full.md > diff.txt

cp ../slate/source/includes/swagger/cds_admin.json .
node ./widdershins-cdr/widdershins.js --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary cds_admin.json -o cds_admin.md
diff -w cds_admin.md ../slate/source/includes/cds_admin.md > diff_admin.txt
