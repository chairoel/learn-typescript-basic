//!Function

// Regular Function
function create(): number {
  return 10;
}

// Arrow Function
const create2 = (): string => 'Hello World';

console.log(create());
console.log(create2());

function add(x: number, y: number): void {
  const z: number = x + y;
  console.log(`hasil adalah: ${z}`);
}

function add2(x: number, y: number): string {
  return `${x} ditambah ${y} hasilnya: ${x + y}`;
}

add(30, 20);

const result = add2(23, 43);
console.log(result);
