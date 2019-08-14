import Data.Char (digitToInt)


loop :: Int -> String -> Int
loop acc [] = acc
loop acc (x:xs) = let acc' = acc * 10 + digitToInt x
                  in loop acc' xs

loop' :: Int -> String -> Int
loop' = foldl (\ acc x -> acc * 10 + digitToInt x)

asInt :: String -> Int
asInt = loop' 0