#!/bin/bash
for file in *; do
    if [ -f "$file" ]; then
        output_file="${file%.*}.webp"
        convert "$file" -quality 10 "$output_file"
        rm "$file"
    fi
done
