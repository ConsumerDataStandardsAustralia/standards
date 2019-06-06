#!/usr/bin/env bash
node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_options.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_full.json -o cds_full.md
diff -w cds_full.md ../slate/source/includes/cds_full.md > diff.txt

node ./widdershins-cdr/widdershins.js --environment ./widdershins-cdr/cdr_options.json --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary api/cds_admin.json -o cds_admin.md
diff -w cds_admin.md ../slate/source/includes/cds_admin.md > diff_admin.txt
