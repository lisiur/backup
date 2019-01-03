#!/bin/bash

min=$1
max=$2
range=$((max - min + 1))
random=$RANDOM
echo $((random % range + min))