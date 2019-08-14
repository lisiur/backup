str2message input = "Data: " ++ input

str2action = putStrLn . str2message

numbers = [1..10]

main = str2action "Start of the program" >>
       mapM_ (str2action . show) numbers >>
       str2action "Done"