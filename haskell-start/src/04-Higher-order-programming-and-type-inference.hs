-- if ? is an operator, then (?y) is equivalent to the function \x -> x ? y, and (y?) is equivalent to \x -> y ? x. 
greaterThan100 :: [Integer] -> [Integer]
greaterThan100 = filter (>100)

-- Function composition
