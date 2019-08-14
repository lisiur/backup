import Data.List

length' :: [a] -> Int
length' [] = 0
length' (_:xs) = 1 + length' xs

avg' [] = 0
avg' xs = sum xs / fromIntegral (length xs)

reverse' [] = []
reverse' [x] = [x]
reverse' (x:xs) = reverse' xs ++ [x]

palindrome xs = xs ++ reverse' xs

isPalidrome xs = xs == reverse' xs

sortByListSize :: [[a]] -> [[a]]
sortByListSize = sortBy sortMethod 
    where sortMethod ps qs
            | length ps > length qs = GT
            | otherwise             = LT

intersperse' :: a -> [[a]] -> [a]
intersperse' symbol [x]     = x
intersperse' symbol (x:xs) = x ++ [symbol] ++ intersperse' symbol xs