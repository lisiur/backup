#!/bin/bash

for value in {1..10};do
  if (( $value % 2 ));then
    echo $value odd
  else
    echo $value even
  fi
done