;; Exercise 1.4
#lang sicp

(define (a-plus-abs-b a b)
    ((if (> b 0) + -) a b))

; define a procedure named a-plus-abs-b 
; which accept two arguments a and b
; and return a + b if b > 0
; or return a - b if b <= 0