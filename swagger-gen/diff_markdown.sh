#!/usr/bin/env bash
diff -w cds_full.md ../slate/source/includes/cds_full.md > diff.txt
diff -w cds_admin.md ../slate/source/includes/cds_admin.md > diff_admin.txt
diff -w cds_register.md ../slate/source/includes/cds_register.md > diff_register.txt
diff -w cds_dcr.md ../slate/source/includes/cds_dcr.md > diff_dcr.txt
