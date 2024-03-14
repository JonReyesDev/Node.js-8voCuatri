import { getConnection } from "./conexion.js";

var alumnnosDb = {}
alumnnosDb.insertar = function insertar(alumno){
    return new Promise((resolver, rejects)=>{
        //consulta
        let sqlConsulta = "Insert into alumnos set ?";
        getConnection().query(sql_consulta, alumno, function(err, res) {
        
        const alumno = {
            id:res.id,
        }
    
        resolver(alumno);

        });
    });
}

alumnnosDb.mostrarTodos = function mmostrarTodos(){
    return new Promise((resolve, rejects)=>{
        let sqlConsulta = "select * from alumnos"
        getConnection().query(sql_consulta, null, function(err, res) {
            if(err){
                console.log("Surgio un error ", err);
                rejects(err);
            }

            else{
                resolve(res);
            }
        });
    });
}

export default alumnnosDb;