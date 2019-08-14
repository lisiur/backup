(define vhello "Hello world")

(define fhello (lambda ()
  "Hello world"))

fhello

(fhello)

(define (hello name)
  (string-append "Hello " name "!"))

(hello "lisiur")

(define sum3 (lambda (a b c) (+ a b c)))

(sum3 1 2 3)

(define (sum3 a b c)
  (+ a b c))

(sum3 2 3 4)

(define (successor arg)
  (+ arg 1))

(define (ancestor arg)
  (- arg 1))

(successor 2)
(ancestor 3)

(define pi (* 4 (atan 1.0)))

(define (degree2arc degree)
  (* pi (/ degree 180)))

(degree2arc 180)