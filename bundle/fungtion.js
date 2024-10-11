"use strict";
//!Function
// Regular Function
function create() {
    return 10;
}
// Arrow Function
const create2 = () => 'Hello World';
console.log(create());
console.log(create2());
function add(x, y) {
    const z = x + y;
    console.log(`hasil adalah: ${z}`);
}
function add2(x, y) {
    return `${x} ditambah ${y} hasilnya: ${x + y}`;
}
add(30, 20);
const result = add2(23, 43);
console.log(result);
