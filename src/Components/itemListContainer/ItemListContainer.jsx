import React from 'react'
import {useEffect, useState} from "react"
import ItemsList from './ItemsList'

const ItemListContainer = () => {

  const [prods, setProds] = useState([])

  const prodList=[
    {"id":1,"name":"Zapatillas Adidas Monster","type":"zapatillas","size":"41","color":"negro","gender":"m","cost":9600,"price":14400,"priceIva":17424,"stock":4,"stockCost":38400,"imagen":require("./../../img/Zapatillas Adidas Monster.jpg"),"quant":1},
    {"id":2,"name":"Zapatillas Nike Crazy","type":"zapatillas","size":"42","color":"blanco","gender":"m","cost":11300,"price":16950,"priceIva":20509.5,"stock":2,"stockCost":22600,"imagen":require("./../../img/Zapatillas Nike Crazy.jpg"),"quant":1},
    {"id":3,"name":"Remera Adidas Super Dry","type":"remera","size":"l","color":"rojo","gender":"f","cost":5200,"price":7800,"priceIva":9438,"stock":4,"stockCost":20800,"imagen":require("./../../img/Remera Adidas Super Dry.jpg"),"quant":1},
    {"id":4,"name":"Remera Adidas Side Kick","type":"remera","size":"m","color":"blanco","gender":"f","cost":4300,"price":6450,"priceIva":7804.5,"stock":6,"stockCost":25800,"imagen":require("./../../img/Remera Adidas Side Kick.jpg"),"quant":1},
    {"id":5,"name":"Remera Nike Just You","type":"remera","size":"m","color":"negro","gender":"f","cost":6000,"price":9000,"priceIva":10890,"stock":1,"stockCost":6000,"imagen":require("./../../img/Remera Nike Just You.jpg"),"quant":1},
    {"id":6,"name":"Zapatillas Adidas New Summer","type":"zapatillas","size":"41","color":"rojo","gender":"f","cost":5500,"price":8250,"priceIva":9982.5,"stock":4,"stockCost":22000,"imagen":require("./../../img/Zapatillas Adidas New Summer.jpg"),"quant":1},
    {"id":7,"name":"Zapatillas Adidas Lite","type":"zapatillas","size":"43","color":"rojo","gender":"m","cost":8300,"price":12450,"priceIva":15064.5,"stock":2,"stockCost":16600,"imagen":require("./../../img/Zapatillas Adidas Lite.jpg"),"quant":1},
    {"id":8,"name":"Zapatillas Nike Wonder","type":"zapatillas","size":"40","color":"blanco","gender":"m","cost":13000,"price":19500,"priceIva":23595,"stock":1,"stockCost":13000,"imagen":require("./../../img/Zapatillas Nike Wonder.jpg"),"quant":1},
    {"id":9,"name":"Remera Adidas Kendra","type":"remera","size":"s","color":"azul","gender":"f","cost":4300,"price":6450,"priceIva":7804.5,"stock":3,"stockCost":12900,"imagen":require("./../../img/Remera Adidas Kendra.jpg"),"quant":1},
    {"id":10,"name":"Remera Adidas Lontana","type":"remera","size":"m","color":"blanco","gender":"m","cost":4500,"price":6750,"priceIva":8167.5,"stock":2,"stockCost":9000,"imagen":require("./../../img/Remera Adidas Lontana.jpg"),"quant":1},
    {"id":11,"name":"Remera Nike Tundra","type":"remera","size":"l","color":"blanco","gender":"f","cost":6300,"price":9450,"priceIva":11434.5,"stock":2,"stockCost":12600,"imagen":require("./../../img/Remera Nike Tundra.jpg"),"quant":1},
    {"id":12,"name":"Zapatillas Adidas Autumn","type":"zapatillas","size":"38","color":"marron","gender":"f","cost":6500,"price":9750,"priceIva":11797.5,"stock":3,"stockCost":19500,"imagen":require("./../../img/Zapatillas Adidas Autumn.jpg"),"quant":1}
]

  const buscarProds = new Promise((res) =>{
    setTimeout(()=>{
      res(prodList)
    },2000)
  })

  useEffect(()=>{
    buscarProds.then(res => setProds(res)).catch(error => console.log(error))
  },[])
  
  return (
    <>
    <div className="body"> <ItemsList prods={prods}  /></div>
    </>
  )
}

export default ItemListContainer