#!/bin/bash

path=$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")
pwd
files=$( ls $1 )
for file in $files; do
  absolute_file="$path/$file"
  echo
  if [ -d $file ];then
    echo $file is directory
    echo $file has $(ls $file | wc -l) files
  else
    echo $file is file
    echo "$file's size is $(wc -c <$absolute_file | tr -d ' ')"
  fi
done