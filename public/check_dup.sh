#!/bin/bash

declare -A file_names

for file in *; do
    if [ -f "$file" ]; then
        filename="${file%%.*}"
        if [ -n "${file_names[$filename]}" ]; then
            echo "Duplicate files found for $filename: $file and ${file_names[$filename]}"
        else
            file_names["$filename"]=$file
        fi
    fi
done
