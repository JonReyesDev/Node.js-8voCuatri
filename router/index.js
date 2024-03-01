import express from 'express';
import json  from 'body-parser';
import alumnnosDb from '../models/alumnos.js'; 

export const router = express.Router();
export default {router};

router.get('/',(req, res)=>{
    res.render('index',{titulo:"Mis Practicas",nombre:"Jonathan Alexis Reyes"})
})

router.get('/tabla',(req, res)=>{
//parametros
const params = {
    numero:req.query.numero
}    
res.render('tabla',params)
})

router.post("/tabla", (req, res) => {
  //parametros
  const params = {
    numero: req.body.numero,
  };
  res.render("tabla", params);
})

router.get('/cotizacion', (req, res) => {
  // Parámetros
  const params = {
      valor: req.query.valor,
      pinicial: req.body.pinicial,
      plazos: req.query.plazos,
  }
  res.render('cotizacion', params);
});

router.post('/cotizacion', (req, res) => {
  // Parámetros
  const params = {
      valor: req.body.valor,
      pinicial: req.body.pinicial,
      plazos: req.body.plazos,
  }
  res.render('cotizacion', params);
});


let rows;
router.get('/alumnos', async(req, res) => {
  rows = await alumnnosDb.mostrarTodos();
  res.render('alumnos', {reg:rows});
});


let params;
router.post('/alumnos',async (req, res) => {
  // Parámetros
  try{
    params = {
      matricula:req.body.matricula,
      nombre:req.body.nombre,
      domicilio:req.body.domicilio,
      sexo:req.body.sexo,
      especialidad:req.body.especialidad

    }
    const res = await alumnnosDb.insertar(params);

  } catch(error){
    console.error(error)
    res.status(400).send("Ocurrio un error: " + error);
  }

  rows = await alumnnosDb.mostrarTodos();
  res.render('alumnos', {reg:rows});
});

