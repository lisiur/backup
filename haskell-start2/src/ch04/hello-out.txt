-- Machine-sized integers
i :: Int
i = -78

biggestInt, smallestInt :: Int
biggestInt = maxBound -- 9223372036854775807
smallestInt = minBound -- -9223372036854775808

-- Arbitrary-precision integers
n :: Integer
n = 12345678910111213141516171819202121232425

reallyBig :: Integer
reallyBig = 2^(2^(2^(2^2)))

numDigits :: Int
numDigits = length (show reallyBig)

-- Double-precision floating point
d1, d2 :: Double -- NOTE: there is also a single-precision floating point number type, Float
d1 = 4.567
d2 = 6.789e-4

-- Booleans
b1, b2 :: Bool
b1 = True
b2 = False

-- Unicode characters
c1, c2, c3 :: Char
c1 = 'x'
c2 = 'Ø'
c3 = '中'

-- Strings are list of characters with special syntax
s :: String
s = "Hello, Haskell"

-- NOTE: Haskell does not do implicit conversion. Explicitly convert with:
-- fromIntegral: from any integral to any other numeric type
-- round, floor, ceiling: from floating-point numbers to integral
n1 = (fromIntegral . length $ "qwer") + 3.3
n2 = fromIntegral(length "qwer") + 3.3

-- Arithmetic
-- + - * / mod ^ div
-- NOTE: / performs floating-point division only. For integer division using div
ex1 = 8.7 / 3.1
ex2 = div 8 3
ex3 = 8 `div` 3
ex4 = (-1) * (-2)

-- Boolean logic
-- NOTE: && || not
-- NOTE: Things can be compared for equality with (==) and (/=), or compared for order using (<), (>), (<=), and (>=)
-- NOTE: True > False -> True
-- NOTE: if-wxpressions: if b then t else f

-- Defining basic functions
-- Compute the sum of the integers from 1 to n.
sumtorial :: Integer -> Integer
sumtorial 0 = 0
sumtorial n = n + sumtorial (n-1)

-- Using guards
hailstone :: Integer -> Integer
hailstone n
  | even n    = n `div` 2
  | otherwise = 3*n + 1

-- Pairs
p :: (Int, Char)
p = (3, 'x')

sumPair :: (Int, Int) -> Int
sumPair (x, y) = x + y

-- Lists
nums, range, range2 :: [Integer]
nums   = [1,2,3,4]
range  = [1..100]
range2 = [1,3..100]

-- hello1 and hello2 are exactly the same.
hello1 :: [Char]
hello1 = ['h', 'e', 'l', 'l', 'o']

hello2 :: String
hello2 = "hello"

-- Constructing lists
emptyList = []

ex5 = 1 : []
ex6 = 3 : (1 : [])
ex7 = 2 : 3 : 4 : []
ex8 = [2,3,4]

-- Functions on lists
-- using pattern matching
intListLength :: [Integer] -> Integer
intListLength [] = 0
intListLength (x:xs) = 1 + intListLength xs

-- intListLength' just do the same thing intListLength does
intListLength' = foldr (\ x -> (+) 1) 0