import { resolve } from "path";
import conexion from "./conexion.js";
import { rejects } from "assert";

var alumnosDb = {}
alumnosDb.insertar = function insertar(alumno){

    return new Promise((resolve,rejects)=>{
        // Consulta
        let sqlConsulta = "Insert into alumnos set ?";
        conexion.query(sqlConsulta,alumno,function(err,res){

        

        if(err){
            console.log("Surgio un error en la conexion", err.message);
            rejects(err);
        }
        else{
            const alumno = {
                id:res.id,
            }
            resolve(alumno);
        }
        });
    });
}

alumnosDb.mostrarTodos = function mostrarTodos(){
   return new Promise((resolve,rejects)=>{
    let sqlConsulta = "select * from alumnos"
    conexion.query(sqlConsulta,null,function(err,res){
        if (err){
            console.log("Surgio un error", err);
            rejects(err);
        }
        else{
            resolve(res);
        }
    })
   })
}

export default alumnosDb;