#!/bin/bash

if [ -n 'a' ];then # The length of STRING is greater than zero.
  echo nonzero
fi

if [ -z 'a' ];then # The length of STRING is zero.
  echo zero
fi

if [ ! 08 = 8 ];then # Is two STRINGs equal.
  echo '"08" != "8"'
fi

if [ 08 -eq 8 ];then # Is two STRINGs equal.
  echo 08 == 8
fi

if [ -d $(pwd) ];then # Is FILE a directory.
  echo "$(pwd) is a directory"
fi

if [ -e $(ls | tr ' ' '\n' | head -n1) ];then # Is FILE exists
  echo "$(ls | tr ' ' '\n' | head -n1) exists"
fi

if [ -s $(ls | tr ' ' '\n' | head -n1) ];then # Is FILE exists and it's size is greater than zero.
  echo "$(ls | tr ' ' '\n' | head -n1) is not empty"
fi

if (( 1 == 1));then
  echo 1==1
fi

if (( (1 == 1) == 1 )); then
  echo true
fi
