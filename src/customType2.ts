// !Custom Type 2

type Wanita = string;
type Pria = boolean;

// Union on Type
type Gender = Wanita | Pria;
// type Gender = string | boolean;

let sayaManusia: Gender;
sayaManusia = 'Chairul Amri';
console.log(sayaManusia);

sayaManusia = true;
console.log(sayaManusia);
