#!/bin/bash
set -e

VERSION_TYPE="patch"
if [[ "$1" == "-v" && -n "$2" ]]; then
  VERSION_TYPE="$2"
fi

# Get current tag
CURRENT_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")

# Increment the version
NEW_TAG=$(echo "$CURRENT_TAG" | awk -F. -v type="$VERSION_TYPE" '{ 
  if (type == "major") { $1 += 1; $2 = 0; $3 = 0 } 
  else if (type == "minor") { $2 += 1; $3 = 0 } 
  else { $3 += 1 } 
  print $1"."$2"."$3 
}')

# Create and push new tag
git tag "$NEW_TAG"
git push origin "$NEW_TAG"

echo "New Git tag created: $NEW_TAG"
