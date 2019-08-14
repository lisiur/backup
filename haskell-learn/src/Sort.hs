module Sort where

insertSort :: Ord a => [a] -> [a]
insertSort []       = []
insertSort (x : xs) = insert x (insertSort xs)
  where
    insert x [] = [x]
    insert x (y : ys) | x < y     = x : y : ys
                      | otherwise = y : insert x ys


selectSort :: Ord a => [a] -> [a]
