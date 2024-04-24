# New Version Setup

The new_version_setup.py script configures a new branch in preparation for staging changes.

It does the following:
* Change the version number of the standards in the intro markdown
* Change the version number in each of the master swagger files in swagger-gen
* Add an entry to the change log table for the new version
* Create the release notes file for the new version with blank content and all of the references to the version updated
* Add an entry for the previous version in the archives table
* Remove all of the diff statements except for the one in the intro section that outlines how the diff tab works (_version_delta_intro.md)

## Usage

Run the following command from the utils folder (requires python). You can enter a version number manually or leave it blank to increment the minor version.

``` python new_version_setup.py```

The optional `-ndiff` command line parameter can be provided to not remove diff statements

``` python new_version_setup.py -ndiff```
