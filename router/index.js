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

export default {router}