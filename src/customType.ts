//!TIPE DATA CUSTOM

type TemanType = {
  nama: string;
  isKampret: boolean;
  hutang?: number; //optional
};

let temanKita: TemanType;

temanKita = {
  nama: 'ade',
  isKampret: true,
};

let temanKita2: TemanType;

temanKita2 = {
  nama: 'mamas',
  isKampret: false,
  hutang: 60_000,
};

console.log({ temanKita });
console.log({ temanKita2 });
