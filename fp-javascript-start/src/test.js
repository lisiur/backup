const relativePath = "./"
const axios = require("axios")
const partial  = require(`${relativePath}partial`)
const partialRight = require(`${relativePath}partialRight`)
const curry = require(`${relativePath}curry`)
const looseCurry = require(`${relativePath}looseCurry`)
const uncurry = require(`${relativePath}uncurry`)
const unary = require(`${relativePath}unary`)
const identity = require(`${relativePath}identity`)
const constant = require(`${relativePath}constant`)
const spreadArgs = require(`${relativePath}spreadArgs`)
const partialProps = require(`${relativePath}partialProps`)
const not = require(`${relativePath}not`)
const when = require(`${relativePath}when`)
const unique = require(`${relativePath}unique`)
const words = require(`${relativePath}words`)
const compose = require(`${relativePath}compose`)

function output(...args) {
  console.log(...args)
}

const outputWords = compose(output, words)
outputWords("this is me, lisiur")

module.exports = {
  axios,
  partial,
  partialRight,
  curry,
  looseCurry,
  uncurry,
  unary,
  identity,
  constant,
  spreadArgs,
  partialProps,
  not,
  when,
  unique,
  words,
  compose,
}