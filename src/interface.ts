// !interface

interface IProsessor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
}

function createProsessor(processor: IProsessor): void {
  const result: string = `
  -------
  Terimakasih ${processor.brand} 🎇
  -------
  anda telah berhasil membuat prosesor dengan detail 
  berikut:👇
  
  nama base model: ${processor.baseModel} ❤❤
  nama model: ${processor.modelName} 🍻
  kecepatan clock: ${processor.clockSpeed} 🍌`;
  console.log(result);
}

const intelCoreI7 = {
  brand: 'intel',
  baseModel: 'core i7',
  modelName: 'i7-2172H',
  clockSpeed: 8,
};

createProsessor(intelCoreI7);
