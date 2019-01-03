#!/bin/bash

if [ $1 -gt 100 ]
then
  echo Hey that\'s a large number.
fi

if [ 8 -gt 2 ];then
  echo 2==2
fi

if [ -n 'a' ];then
  echo empty
fi
