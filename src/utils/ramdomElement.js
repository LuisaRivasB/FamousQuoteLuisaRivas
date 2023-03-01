export const ramdomElement = (min, max) => {
   const grand = max - min;
   const grandElement = min + Math.round(Math.random() * grand);

   return grandElement;
 };