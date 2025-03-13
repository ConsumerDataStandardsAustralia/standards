import os, glob
import sys
import fileinput
import re
import subprocess

version_regex = r"\b\d{1}\.\d{2}\.\d{1}\b" #regex for version
diff_regex = re.compile(r'```diff(.*?)```', re.DOTALL) #regex for diff blocks
new_version = "-1.-1.-1"
current_version = "-2.-2.-2"
exclude_list = ["_version_delta_intro.md"] # Define the exclude_list for diff block removal
changelog_table_header = "| Date | Version | Description | Detail of change |"
SWAGGERGENAPIPATH = '../swagger-gen/api'
INTROMDPATH = '../slate/source/includes/introduction/_intro.md'
CHANGEPATH  = '../slate/source/includes/changelog.md'
RELEASENOTESPATH = "../slate/source/includes/releasenotes"

def set_new_minor_version(content):
    global new_version, current_version

    # Search for the version pattern in the content
    match = re.search(version_regex, content)

    # Extract and return the new version if found
    if match:
        current_version = match.group()
        print(f"Current Version: {current_version}")

        # Split the version string into major, minor, and patch components
        major, minor, patch = map(int, current_version.split('.'))

        # Increment the minor version
        new_minor = minor + 1

        # Construct the new version string
        new_version = f"{major}.{new_minor}.{0}"

        print(f"New Version: {new_version}")
        return new_version
    else:
        print("Version not found in the content.")
        return None

def get_current_version(content):
    global current_version

    # Search for the version pattern in the content
    match = re.search(version_regex, content)

    # Extract and return the new version if found
    if match:
        current_version = match.group()
        print(f"Current Version: {current_version}")

        return current_version

    else:
        print("Version not found in the content.")
        return None

def create_new_entry(*args):
    # Create an entry for markdown table with | delimiter
    return "|" + " | ".join(args) + " |\n"


def add_new_entry(file_path, table_header,new_entry):
    # Read the existing file
    with open(file_path, "r") as file:
        lines = file.readlines()

    # Remove leading and trailing whitespace from each line
    lines_s = [line.strip() for line in lines]

    # Find the position of the table header
    start_index = lines_s.index(table_header) if table_header in lines_s else -1
    lines.insert(start_index + 2, new_entry)

    with open(file_path, "w") as file:
        file.writelines(lines)

# Function to get first table entry in markdown file (after header and separator)
def get_first_entry(file_path, table_header):
    with open(file_path, "r") as file:
        lines = file.readlines()
    
    # Remove leading and trailing whitespace from each line
    line = [line.strip() for line in lines]
    
    start_index = line.index(table_header) if table_header in line else -1

    # Extract the line immediately after the header (if it exists)
    if start_index != -1 and start_index + 1 < len(line):
        first_entry = line[start_index + 2]
        return(first_entry)
    else:
        print("No first entry found in the changelog.")
        return

# Function to update the version number in a file
def update_version_in_file(file_name):
    try:
        with open(file_name, 'r+', encoding='utf-8') as file:
            content = file.read()
            updated_content = re.sub(version_regex, new_version, content)
            file.seek(0)
            file.write(updated_content)
            file.truncate()
        print(f"Version updated in: {file_name}")
    except FileNotFoundError:
        print(f"File not found: {file_name}")

###########################################################
# Function to change the version number of the standards in the intro markdown
def update_version_in_intro():
    update_version_in_file(INTROMDPATH)

###########################################################
# Function to change the version number in each of the master swagger files in swagger-gen
def update_version_in_master_swagger():
# For each .json file in swagger-gen/api/ folder, find version number and replace with new one
    for filename in glob.glob(os.path.join(SWAGGERGENAPIPATH, '*.json')):
        update_version_in_file(filename)

###########################################################
# Function to create the release notes file for the new version with blank content and all of the references to the version updated
def create_releasenotes():
    # Define the filename based on the version number
    filename = f"{RELEASENOTESPATH}/releasenotes.{new_version}.html.md"

    # Check if the file already exists
    if os.path.isfile(filename):
        print(f"Release notes file '{filename}' already exists. No new file created.")
    else:
        # Create file from template
        template_release_file= "release_notes_template.md"

        # Read the content from the template file
        with open(template_release_file, "r") as template_file:
            release_notes_content_template = template_file.read()

        # Replace `{new_version}` with the user-input version number
        release_notes_content = release_notes_content_template.replace("{version_number}", new_version)

        # Write the content to the new release notes file
        with open(filename, "w") as file:
            file.write(release_notes_content)

        print(f"Release notes file '{filename}' created successfully.")

###########################################################
# Add an entry to the changelog table for the new version
def add_changelog_entry():
     
    # Create new changelog entry
    new_changelog_entry = create_new_entry(" TBC", f"[{new_version}](https://consumerdatastandardsaustralia.github.io/standards-archives/standards-{new_version}/)", "Changes TBC", f"See [release notes](includes/releasenotes/releasenotes.{new_version}.html) and [Decision XXX](https://github.com/ConsumerDataStandardsAustralia/standards/issues/XXX) for details.")
    
    # Add new changelog entry
    add_new_entry(CHANGEPATH, changelog_table_header, new_changelog_entry)
    print("New entry added to the changelog.")


###########################################################
#Remove all of the diff statements except for the one in the intro section that outlines how the diff tab works

# Function to process and remove "```diff" blocks from a file
def remove_diff_blocks(file_name):
    with open(file_name, 'r', encoding='utf-8') as file:
        content = file.read()

    # Check if the content contains "```diff" blocks
    if '```diff' in content:
        # Use re.sub to remove "```diff" blocks from the content
        new_content = re.sub(diff_regex, '', content)

        # Write the modified content back to the file
        with open(file_name, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f'Removed "```diff" blocks from: {file_name}')

# Function to recursively search for Markdown files and remove "```diff" blocks
def search_and_remove_diff_blocks(directory='.'):
    for root, _, files in os.walk(directory):
        for file_name in files:
            if (file_name.endswith('.md') or file_name.endswith('.md.erb')) and file_name not in exclude_list:
                file_path = os.path.join(root, file_name)
                remove_diff_blocks(file_path)


def main():
#   Get new version from user
    global new_version, current_version
    user_input = input("Leave blank to increment current version or enter new version number (e.g., 1.27.0): ")
    
    with open(INTROMDPATH, 'r+') as f :
        file_content = f.read()

    if user_input and re.match(version_regex, user_input):
        new_version = user_input
        get_current_version(file_content)

    else:
        print("Invalid version format or no version provided. Using current version and incrementing minor.")
        new_version = set_new_minor_version(file_content)

    if new_version == current_version:
        user_input = input("Version {} already exists. Are you sure you want to continue? (Y/N) ".format(new_version))
        if user_input != "y" and user_input != "Y":
            print("Aborting.")
            exit(1)
    
    process = subprocess.Popen(["git","branch","--show-current"], stdout=subprocess.PIPE)
    output, error = process.communicate()
    if error:
        raise Exception(error)

    output = str(output, encoding='utf-8')
    
    match = re.search(version_regex, output)

    # Extract and return the new version if found
    git_version = "-1"
    if match:
        git_version = match.group()

        if "release/" in output and git_version != new_version:
            print("It looks like you're in git branch \"release/{}\" but trying to make version changes with v{}. Please try again.".format(git_version, new_version))
            exit(1)

    print("Version will be set to: {}".format(new_version))

    update_version_in_intro()
    update_version_in_master_swagger()
    create_releasenotes()
    add_changelog_entry()
    if "-ndiff" in sys.argv:
        print("'-ndiff' argument provided. diff blocks will not be removed")
    else:
        print("removing diff blocks")
    #   Specify the directory where you want to start the search (default is the current directory) as function argument 
        search_and_remove_diff_blocks("../")

if __name__ == "__main__":
    main()