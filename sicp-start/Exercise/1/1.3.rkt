;; Exercise 1.2
#lang sicp

(define (sum-of-two-larger-in-three-nums a b c)
  (if (> a b)
      (if (> b c)
          (+ a b)
          (+ a c))
      (if (< a c)
          (+ b c)
          (+ a c)))
)

(define (sum-of-two-larger-in-three-nums2 a b c)
  (cond ((and (> a b) (> b c)) (+ a b))
        ((and (> a b) (< b c)) (+ a c))
        ((and (> b c) (> c a)) (+ b c))
        ((and (> b c) (< c a)) (+ b a))
        ((and (> c a) (> a b)) (+ c a))
        ((and (> c a) (< a b)) (+ c b))
  )
)

(sum-of-two-larger-in-three-nums 3 4 5)
(sum-of-two-larger-in-three-nums2 9 4 7)