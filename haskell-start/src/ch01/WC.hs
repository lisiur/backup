-- file: ch01/WC.hs
-- lines beginning with "--" are comments.

main = interact wordCount
    where wordCount input = show (length (lines input)) ++ "\n"

-- words :: String -> [String]
-- words s = case dropWhile Char.isSpace s of
--     "" -> []
--     s' -> w : words s''
--         where (w, s'') = break Char.isSpace s'