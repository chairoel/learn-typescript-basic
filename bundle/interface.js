"use strict";
// !interface
function createProsessorIntel(processor) {
    const result = `
  -------
  Terimakasih ${processor.brand} 🎇
  -------
  anda telah berhasil membuat prosesor dengan detail 
  berikut:👇
  
  nama base model: ${processor.baseModel} ❤❤
  nama model: ${processor.modelName} 🍻
  kecepatan clock: ${processor.clockSpeed} 🍌
  total core: ${processor.coreTotal} 🥓
  turbo boost enable? ${processor.turboBoost} 🍤
  `;
    console.log(result);
}
function createProsessorAMD(processor) {
    const result = `
  -------
  Terimakasih ${processor.brand} 🎇
  -------
  anda telah berhasil membuat prosesor dengan detail 
  berikut:👇
  
  nama base model: ${processor.baseModel} ❤❤
  nama model: ${processor.modelName} 🍻
  kecepatan clock: ${processor.clockSpeed} 🍌
  total core: ${processor.coreTotal} 🥓
  precision boost enable? ${processor.precisionBoost} 🍤
  `;
    console.log(result);
}
const coreI7 = {
    brand: 'intel',
    baseModel: 'core i7',
    modelName: 'i7-2172H',
    clockSpeed: 8,
    coreTotal: 'DualCore',
    turboBoost: true,
};
const ryzen3 = {
    brand: 'AMD',
    baseModel: 'ryzen 3',
    modelName: 'r-5570x',
    clockSpeed: 6,
    coreTotal: 8,
    precisionBoost: true,
};
createProsessorIntel(coreI7);
createProsessorAMD(ryzen3);
