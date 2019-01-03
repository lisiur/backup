#!/bin/bash

a=$((4+5))
echo $a

b=$((a+3))
echo $b

b=$(($a+4))
echo $b

(( b++ ))
echo $b