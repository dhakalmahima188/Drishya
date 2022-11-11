const cors=require("cors")
const express=require("express")
const stripe=require("stripe")("sk_test_51M2tsDEkKK5QsPCeykRKemPpbGudQ5H1ThU8MMlPmdQDOfN8I2MKGe8V93kxqlff6tXprnl2ZFOvp6LY85qPcFnW00EqMc0Fk3")
const uuid=require("uuid")
const app=express()
app.use(express.json())
app.use(cors())
app.get('/pay',(req,res)=>{
    const {product,token}=req.body;
    console.log("Product",product)
    console.log("price",product.price)
    const idempontencyKey=uuid()
    return stripe.costumers.create({
        email:token.email,
        source:token.id
    }).then(customer=>{
        stripe.charges.create({

            amount: product.price*100,
            costumer: customer.id,
            receipt_email: token.email
        },{idempontencyKey})
    }).then(result=>res.status(200).json(result)).catch(err=>console.log(err))

    res.send("It works")

})

app.listen(8282,()=>console.log("I am happy at 8282"))