import express from "express";

const app = express();
 const products = [
  {
    "id": 1,
    "name": "Laptop",
    "price": 55000
  },
  {
    "id": 2,
    "name": "Phone",
    "price": 25000
  },
  {
    "id": 3,
    "name": "Tablet",
    "price": 30000
  },
  {
    "id": 4,
    "name": "Smart Watch",
    "price": 12000
  },
  {
    "id": 5,
    "name": "Headphones",
    "price": 5000
  },
  {
    "id": 6,
    "name": "Keyboard",
    "price": 2500
  },
  {
    "id": 7,
    "name": "Mouse",
    "price": 1500
  },
  {
    "id": 8,
    "name": "Monitor",
    "price": 18000
  },
  {
    "id": 9,
    "name": "Printer",
    "price": 10000
  },
  {
    "id": 10,
    "name": "Speaker",
    "price": 7000
  }
]

app.get('/' , (req,res)=>{
    res.send('server is ready')
})

// get a list of products
app.get('/products' , (req,res)=>{
   

 res.send(products);
})

app.get('/products/:id', (req,res)=>{
    const id = Number(req.params.id);
    const productwithid = products.find((p)=>p.id === id);
    if (productwithid){
        res.send(productwithid);
    
    }else{
        res.status(404).send({message:'product not found '})
    }
})


const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is at http://localhost:${port}`)
})