import System.IO
import Data.Char(toUpper)

main :: IO()
main = do
  -- inh <- openFile "input.txt" ReadMode
  -- outh <- openFile "output.txt" WriteMode
  -- -- mainloop inh outh
  -- inpStr <- hGetContents inh
  -- hPutStr outh . map toUpper $ inpStr
  -- hClose inh
  -- hClose outh

  inpStr <- readFile "input.txt"
  writeFile "output.txt" . map toUpper $ inpStr

-- mainloop :: Handle -> Handle -> IO ()
-- mainloop inh outh =
--   do 
--     ineof <- hIsEOF inh
--     if ineof 
--       then return() 
--       else do 
--         inpStr <- hGetLine inh
--         hPutStrLn outh (map toUpper inpStr)
--         mainloop inh outh