import mysql from 'mysql2'
var conexion = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"john1093",
    database:"sistemas"

});

conexion.connect(function(err){
    if (err){
        console.log("Surgio un error" + err);
    }
    else{
        console.log("Se abrio la conexion con exito");
    }
});

export default conexion;
