a=$1
b=$2

let c=a*b
echo $c

expr $a \* $b

echo $((a*b))