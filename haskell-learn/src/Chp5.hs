module Chp5
    ( JValue(..)
    , getString
    , getInt
    , getDouble
    , getBool
    , getObject
    , getArray
    , isNull
    , putJValue
    )
where

import           Data.List                      ( intercalate )

data JValue = JString String
            | JNumber Double
            | JBool Bool
            | JNull
            | JObject [(String, JValue)]
            | JArray [JValue]
                deriving (Eq, Ord, Show)

data Doc = ToBeDefined
  deriving (Show)

(<>) :: Doc -> Doc -> Doc
a <> b = undefined

enclose :: Char -> Char -> Doc -> Doc
enclose left right x = undefined

hcat :: [Doc] -> Doc
hcat xs = undefined

oneChar :: Char -> Doc
oneChar c = undefined

string :: String -> Doc
string = enclose '"' '"' . hcat . map oneChar

text :: String -> Doc
text s = undefined

double :: Double -> Doc
double n = undefined

getString :: JValue -> Maybe String
getString (JString s) = Just s
getString _           = Nothing

getInt :: JValue -> Maybe Int
getInt (JNumber n) = Just (truncate n)
getInt _           = Nothing

getDouble :: JValue -> Maybe Double
getDouble (JNumber n) = Just n
getDouble _           = Nothing

getBool :: JValue -> Maybe Bool
getBool (JBool b) = Just b
getBool _         = Nothing

getObject :: JValue -> Maybe [(String, JValue)]
getObject (JObject o) = Just o
getObject _           = Nothing

getArray :: JValue -> Maybe [JValue]
getArray (JArray n) = Just n
getArray _          = Nothing

isNull v = v == JNull

renderJValue :: JValue -> String
renderJValue (JString s    ) = show s
renderJValue (JNumber n    ) = show n
renderJValue (JBool   True ) = "true"
renderJValue (JBool   False) = "false"
renderJValue JNull           = "null"
renderJValue (JObject o)     = "{" ++ pairs o ++ "}"
  where
    pairs [] = ""
    pairs ps = intercalate ", " (map renderPair ps)
    renderPair (k, v) = show k ++ ": " ++ renderJValue v
renderJValue (JArray a) = "[" ++ values a ++ "]"
  where
    values [] = ""
    valeus vs = intercalate ", " (map renderJValue vs)

putJValue :: JValue -> IO ()
putJValue v = putStrLn (renderJValue v)
