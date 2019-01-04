#!/bin/bash

if [ -e $1 ];then
  echo FILE is exist
else
  echo FILE is not exist
  exit 0
fi

if [ -d $1 ];then
  echo FILE is directory
fi

if [ -r $1 ];then
  echo FILE is readable
else
  echo FILE is not readable
fi

if [ -w $1 ];then
  echo FILE is writeable
else
  echo FILE is not writeable
fi

if [ -x $1 ];then
  echo FILE is executable
else
  echo FILE is not executable
fi