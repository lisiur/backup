words_file=/usr/share/dict/words
nth=$1
random_number=$[$RANDOM * $RANDOM]
nth_words=$( cat $words_file | egrep "^.{$nth}\$" )
words_count=$( echo $nth_words | wc -w)
word_num=$(($random_number % $words_count))
random_word=$( echo $nth_words | tr ' ' '\n' | tail -n+$word_num | head -n1  )
echo $random_word
