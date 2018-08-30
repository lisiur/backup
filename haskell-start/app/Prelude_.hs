id :: a -> a
id a = a

const :: a -> b -> a
const a b = a

flip :: (a -> b -> c) -> b -> a -> c

error :: String -> a

undefined :: a
undefined = error "Prelude; undefined"

min :: Ord a => a -> a -> a
max :: Ord a => a -> a -> a

{- List -}

null :: [a] -> Bool

length :: [a] -> Int

(!!) :: [a] -> Int -> a

reverse :: [a] -> [a]

head :: [a] -> a
last :: [a] -> a

init :: [a] -> [a] {- 去掉最后一个元素 -}
tail :: [a] -> [a] {- 去掉第一个元素 -}

map :: (a -> b) -> [a] -> [b]

filter :: (a -> Bool) -> [a] -> [a]

take :: Int -> [a] -> [a]

drop :: Int -> [a] -> [a]

span :: (a -> Bool) -> [a] -> ([a], [a])
break :: (a -> Bool) -> [a] -> ([a], [a])

takeWhile :: (a -> Bool) -> [a] -> [a]
dropWhile :: (a -> Bool) -> [a] -> [a]

splitAt :: Int -> [a] -> ([a], [a])

repeat :: a -> [a]
replicate :: Int -> a -> [a]

any :: (a -> Bool) -> [a] -> Bool
all :: (a -> Bool) -> [a] -> Bool

and :: [Bool] -> Bool
or :: [Bool] -> Bool

elem :: Eq  a => a -> [a] -> Bool
notElem :: Eq a => a -> [a] -> Bool

iterate :: (a -> a) -> a -> [a]

until :: (a -> Bool) -> (a -> a) -> a -> a

zip :: [a] -> [b] -> [(a, b)]
unzip :: [(a, b)] -> ([a], [b])
zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]

concat :: [[a]] -> [a]

concatMap :: (a -> [b]) -> [a] -> [b]