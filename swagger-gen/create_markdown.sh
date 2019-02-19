#!/usr/bin/env bash
cp ../slate/source/includes/swagger/cds_full.json .
node node_modules/widdershins/widdershins.js --search false --language_tabs 'http:HTTP' 'javascript:Javascript' --summary cds_full.json -o cds_full.md
diff -w cds_full.md ../slate/source/includes/cds_full.md > diff.txt
