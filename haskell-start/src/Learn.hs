doubleMe x = x + x
doubleMe2 x = x ++ x

doubleSmallNumbers x = if x > 100
  then x
  else x * 2

length' xs = sum [ 1 | x <- xs]

doubleInt :: Int -> Int
doubleInt = doubleMe

lucky :: Integral a => a -> String
lucky 7 = "LUCKY!"
lucky x = "SORRY"

factorial :: Integral a => a -> a
factorial 0 = 1
factorial n = n * factorial (n-1)

threePOS :: Num a => (a, a, a) -> (a, a, a) -> (a, a, a)
threePOS (x, y, z) (a, b, c) = (x+a, y+b, z+c)

tailCopyHead :: [a] -> [a]
tailCopyHead [] = []
tailCopyHead all@(x:xs) = xs ++ [x]

tailCopyHead' :: [a] -> [a]
tailCopyHead' lst@(x:xs)
  | null lst = []
  | null xs = [x,x]
  | otherwise = xs ++ [x]

fab :: Integral a => a -> a
fab 1 = 1
fab 2 = 1
fab x = fab (x-1) + fab (x-2)

chain :: Integral a => a -> [a]
chain n
  | n == 1 = [1]
  | odd n = n:chain(n*3+1)
  | even n = n:chain(n `div` 2)

numLongChains :: Int
numLongChains = length (filter isLong (map chain [1..100]))
  where isLong xs = length xs > 15

length (filter (\xs -> length xs > 15) (map chain [1..100]))
length . filter (\xs -> length xs > 15) . map chain $ [1..100]