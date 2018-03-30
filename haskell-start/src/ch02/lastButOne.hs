lastButOne xs
    | len < 2   = error "list too short"
    | len == 2  = head xs
    | otherwise = lastButOne (drop 1 xs)
    where len = length xs

lastButOne' xs | length xs < 2 = error "list too short"
lastButOne' [x, _] = x
lastButOne' (x:xs) = lastButOne' xs

safeSecond :: [a] -> Maybe a
safeSecond [] = Nothing
safeSecond xs = if null (tail xs)
                then Nothing
                else Just (head (tail xs))

tidySecond :: [a] -> Maybe a
tidySecond (_:x:_) = Just x
tidySecond _ = Nothing