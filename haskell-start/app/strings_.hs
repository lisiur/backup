-- show :: a => a -> String

-- read :: Read a => String -> a

-- lines :: String -> [String]

-- unlines :: [String] -> String

-- words :: String -> [String]

-- unwords :: [String] -> String

reverseSentence :: String -> String
reverseSentence str = unwords $ reverse $ words str
-- reverseSentence = unwords $ reverse words