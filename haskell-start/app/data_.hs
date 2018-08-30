import Data.Char
import Data.List

-- Data.Char

char 90
-- 'z'

ord 'Z'
-- 90

isDigit
isLower
isUpper
isAlpha
isControl

-- Data.List
group :: Eq a => [a] -> [[a]]

isPrefixOf :: Eq a => [a] -> [a] -> Bool
isSuffixOf :: Eq a => [a] -> [a] -> Bool
isInfixOf :: Eq a => [a] -> [a] -> Bool

stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]

findIndex :: (a -> Bool) -> [a] -> Maybe Int

findIndices :: (a -> Bool) -> [a] -> [Int]

elemIndex :: Eq a => a -> [a] -> Maybe Int
-- findIndex (x==)

elemIndices :: Eq a => a -> [a] -> [Int]
-- findIndices (x==)

partition :: (a -> Bool) -> [a] -> ([a], [a])
-- partition p xs = (filter p xs, filter (not . p)  xs)

delete :: Eq a => a -> [a] -> [a]

deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]

