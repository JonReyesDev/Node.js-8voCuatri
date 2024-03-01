import conexion from "./conexion.js";

var alumnnosDb = {}
alumnnosDb.insertar = function insertar(alumno){
    return new Promise((resolver, rejects)=>{
        //consulta
        let sqlConsulta = "Insert into alumnos set ?";
        conexion.query(sqlConsulta, alumno, function(err, res){
        
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
        conexion.query(sqlConsulta, null ,function(err, res){
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