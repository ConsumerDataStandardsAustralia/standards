#!/usr/bin/env bash
diff -w cds_full.md ../slate/source/includes/cds_full.md > diff.txt
diff -w cds_admin.md ../slate/source/includes/cds_admin.md > diff_admin.txt
