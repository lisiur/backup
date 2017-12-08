;; Exercise 1.5
#lang sicp

(define (p) (p))
(define (test x y)
    (if (= x 0) 0 y))

test(0, (p))

; In applicative-order y will be evaluated whether y is needed
; In normal-order y will be evaluated only when y is needed (x eq 0 in this case)
; So it will raise an exeption in applicative-order interpreter
; And get 0 in normal-order interpreter
