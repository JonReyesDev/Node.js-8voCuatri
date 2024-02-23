import express from 'express';
import json  from 'body-parser';

export const router = express.Router();

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

export default {router}