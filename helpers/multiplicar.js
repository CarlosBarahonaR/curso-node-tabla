 const fs = require('fs');
 const colors = require('colors');
 const crearArchivo = async(base = 5, l = false, h = 10) => {

     try {


         let salida = '';
         let consola = '';

         for (let i = 1; i <= h; i++) {

             salida += `${base} ${'x'} ${i} ${'='} ${base*i}\n`;

             consola += colors.rainbow(`${base} ${'x'} ${i} ${'='} ${base*i}\n`);


         }
         if (l) {
             console.log('===================='.america);
             console.log('    Tabla del', base);
             console.log('===================='.america);
             console.log(consola);
         }



         fs.writeFileSync(`tabla-${base}.txt`, salida);

         return `tabla-${base}.txt`;

     } catch (error) {
         throw error;
     }


 }

 module.exports = {
     crearArchivo
 }