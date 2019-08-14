module Chp4 where

import           System.Environment             ( getArgs )

interactWith function inputFile outputFile = do
    input <- readFile inputFile
    writeFile outputFile (function input)

main = mainWith myFunction
  where
    mainWith function = do
        args <- getArgs
        case args of
            [input, output] -> interactWith function input output
            _               -> putStrLn "error: exactly two arguments needed"

    myFunction = id

splitLines :: String -> [String]
splitLines [] = []
splitLines cs =
    let (pre, suf) = break isLineTerminator cs
    in  pre : case suf of
            ('\r' : '\n' : rest) -> splitLines rest
            ('\r'        : rest) -> splitLines rest
            ('\n'        : rest) -> splitLines rest
            _                    -> []

isLineTerminator c = c == '\r' || c == '\n'

fixLines :: String -> String
fixLines input = unlines (splitLines input)

safeHead :: [a] -> Maybe a
safeHead []       = Nothing
safeHead (a : xs) = Just a

safeTail :: [a] -> Maybe [a]
safeTail []       = Nothing
safeTail (a : xs) = Just xs

safeLast :: [a] -> Maybe a
safeLast [] = Nothing
safeLast xs = Just (last xs)

safeInit :: [a] -> Maybe [a]
safeInit [] = Nothing
safeInit xs = Just (init xs)

splitWith :: (a -> Bool) -> [a] -> [[a]]
splitWith func [] = []
splitWith func xs = helper [] xs
  where
    helper base [] = [base]
    helper base (x : xs) | func x    = helper (base ++ [x]) xs
                         | otherwise = [base, x : xs]

foldl' step zero (x : xs) = foldl' step (step zero x) xs
foldl' _    zero []       = zero

foldr' step zero (x : xs) = step x (foldr' step zero xs)
foldr' _    zero []       = zero

concat' :: [[a]] -> [a]
concat' = foldr step [] where step x xs = x ++ xs

takeWhile' fn (x : xs) | fn x      = x : takeWhile' fn xs
                       | otherwise = []
takeWhile' fn [] = []

takeWhile'' fn = foldr step []  where
    step x xs | fn x      = x : xs
              | otherwise = []
