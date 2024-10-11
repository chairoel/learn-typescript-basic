// !interface

type CoreCount = 2 | 4 | 8 | 12;
type CoreName = 'DualCore' | 'QuadCore' | 'OctaCore' | 'SuperCore';
type Core = CoreCount | CoreName; // Union Type
// type Core = CoreCount & CoreName; // Intersaction Type

interface IProsessor {
  brand: string;
  baseModel: string;
  modelName: string;
  //   coreTotal: 2 | 4 | 8 | 12 | 'dual core' | 'quad core' | 'apa core'; // membuat ketentuan khusus menggunakan union
  coreTotal: Core;
  clockSpeed: number;
}

//pewarisan dari IProsessor
interface Intel extends IProsessor {
  turboBoost: boolean;
}

//pewarisan dari IProsessor
interface AMD extends IProsessor {
  precisionBoost?: string;
}

function createProsessorIntel(processor: Intel): void {
  const result: string = `
  -------
  Terimakasih ${processor.brand} 🎇
  -------
  anda telah berhasil membuat prosesor dengan detail 
  berikut:👇
  
  nama base model: ${processor.baseModel} ❤❤
  nama model: ${processor.modelName} 🍻
  kecepatan clock: ${processor.clockSpeed} 🍌
  total core: ${processor.coreTotal} 🥓
  turbo boost enable: ${processor.turboBoost} 🍤
  `;
  console.log(result);
}
function createProsessorAMD(processor: AMD): void {
  const result: string = `
  -------
  Terimakasih ${processor.brand} 🎇
  -------
  anda telah berhasil membuat prosesor dengan detail 
  berikut:👇
  
  nama base model: ${processor.baseModel} ❤❤
  nama model: ${processor.modelName} 🍻
  kecepatan clock: ${processor.clockSpeed} 🍌
  total core: ${processor.coreTotal} 🥓
  precision boost enable: ${processor.precisionBoost ? processor.precisionBoost : 'tidak ada'} 🍤
  `;
  console.log(result);
}

const coreI7: Intel = {
  brand: 'intel',
  baseModel: 'core i7',
  modelName: 'i7-2172H',
  clockSpeed: 8,
  coreTotal: 'DualCore',
  turboBoost: true,
};

const ryzen1: AMD = {
  brand: 'AMD',
  baseModel: 'ryzen 1',
  modelName: 'r-1132x',
  clockSpeed: 2,
  coreTotal: 2,
};

const ryzen3: AMD = {
  brand: 'AMD',
  baseModel: 'ryzen 3',
  modelName: 'r-5570x',
  clockSpeed: 6,
  coreTotal: 8,
  precisionBoost: 'Yes, ready to overclock!',
};

createProsessorIntel(coreI7);
createProsessorAMD(ryzen1);
createProsessorAMD(ryzen3);
