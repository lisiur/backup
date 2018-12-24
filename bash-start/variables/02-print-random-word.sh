words_file=/usr/share/dict/words
random_number=$[$RANDOM * $RANDOM]
words_count=$( cat $words_file | wc -w)
word_num=$(($random_number % $words_count))
random_word=$( tail -n+$word_num $words_file | head -n1  )
echo $random_word
