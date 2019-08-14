module Main where

import           Chp5

main :: IO ()
main = print (JObject [("foo", JNumber 1), ("bar", JBool False)])
