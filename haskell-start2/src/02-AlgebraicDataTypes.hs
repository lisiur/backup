-- Enumeration types
data Thing = Shoe
           | Ship
           | SealingWax
           | Cabbage
           | King
  deriving Show          

shoe :: Thing
shoe = Shoe

isSmall :: Thing -> Bool
isSmall Ship = False
isSmall King = False
isSmall _    = True

-- Beyond enumerations
data FailableDouble = Failure
                  | OK Double
  deriving Show

ex1 = Failure
ex2 = OK 3

safeDiv' :: Double -> Double -> FailableDouble
safeDiv' _ 0 = Failure
safeDiv' x y = OK (x / y)

failureToZero :: FailableDouble -> Double
failureToZero Failure = 0
failureToZero (OK d) = d

safeDiv :: Double -> Double -> Double
safeDiv x = failureToZero . safeDiv' x

-- Store a person's name, age, and favourite Thing
data Person = Person String Int Thing
  deriving Show

brent :: Person
brent = Person "Brent" 31 SealingWax

stan :: Person
stan = Person "Stan" 94 Cabbage

getAge :: Person -> Int
getAge (Person _ a _) = a

-- Algebraic data types in general
data AlgDataType = Constr1 Type11 Type12
                 | Constr2 Type21
                 | Constr3 Type31 Type32 Type33
                 | Constr4

-- Pattern-matching
-- _
-- x@pat
-- nest

-- Case expressions
failureToZero' :: FailableDouble -> Double
failureToZero' x = case x of
               Failure -> 0
               OK d -> d

-- Recursive data types
data IntList = Empty | Cons Int IntList

intListProd :: IntList -> Int
intListProd Empty = 1
intListProd (Cons x l) = x * intListProd l






