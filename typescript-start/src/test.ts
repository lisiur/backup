export default function test({ a, b = '3' }: { a: number; b?: string }) {
  console.log(a, b)
}

