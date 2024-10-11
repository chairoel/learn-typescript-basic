// !interface

interface IProsessor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
}

//pewarisan dari IProsessor
interface Intel extends IProsessor {
  turboBoost: boolean;
}

//pewarisan dari IProsessor
interface AMD extends IProsessor {
  precisionBoost: boolean;
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
  turbo boost enable? ${processor.turboBoost}
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
  precision boost enable? ${processor.precisionBoost}
  `;
  console.log(result);
}

const coreI7: Intel = {
  brand: 'intel',
  baseModel: 'core i7',
  modelName: 'i7-2172H',
  clockSpeed: 8,
  turboBoost: true,
};

const ryzen3: AMD = {
  brand: 'AMD',
  baseModel: 'ryzen 3',
  modelName: 'r-5570x',
  clockSpeed: 6,
  precisionBoost: true,
};

createProsessorIntel(coreI7);
createProsessorAMD(ryzen3);
