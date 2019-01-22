#!/bin/bash

counter=1
while [ $counter -le 10 ]; do
  echo $counter
  let counter++
done

echo All done