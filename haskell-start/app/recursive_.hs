factorial 0 = 1
factorial n = n * factorial (n-1)

delete' _ [] = []
delete' a (x:xs) = if a /= x 
                   then x : delete' a xs 
                   else delete' a xs

drop' n _ | n < 0 = []
drop' _ [] = []
drop' 0 xs = xs
drop' n (x:xs) = drop' (n-1) xs