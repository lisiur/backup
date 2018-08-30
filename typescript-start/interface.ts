interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {
    color: "white",
    area: 100,
  };
  newSquare.color = config.color;
  newSquare.area = config.width * config.width;
  return newSquare
}

let mySquare = createSquare({colour: "red", width: 100, opacity: 0.5})

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {
  x: 10,
  y: 10,
}

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter
}