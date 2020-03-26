const fs = require('fs');

let listarArchivo = (base,limite) => {
    let texto="";
    for (let i=1; i<=limite;i++){
        texto+= `${base} * ${i} = ${base*i}\n`;
    }
    return texto;
}

let crearArchivo = async(base,limite=10) => {
    return new Promise((resolve,reject) => {

        if(!Number(base)){
            reject("No es un Numero")
            return;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`,listarArchivo(base,limite), (err) => {
            if (err){
                reject("El programa tuvo un error");
            }
            else{
                resolve("El archivo ha sido creado con exito")
            }
        });

    })
};

module.exports={
    crearArchivo,
    listarArchivo
}