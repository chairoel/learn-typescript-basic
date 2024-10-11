"use strict";
// !interface
function createProsessor(processor) {
    const result = `
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
const intelCoreI7 = {
    brand: 'intel',
    baseModel: 'core i7',
    modelName: 'i7-2172H',
    clockSpeed: 8,
    turboBoost: true,
};
createProsessor(intelCoreI7);
