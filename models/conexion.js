import mysql from 'mysql2'

var conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"john1093",
    database:"sistemas"
});

conexion.connect(function(err){

    if(err){
        console.log("surgio un error: "+ err);
    }
    else{
        console.log("Se abrio la conexion con exito");
    }
})

export default conexion;

