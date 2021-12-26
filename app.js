const express =require('express')
const app = express()
const port =4000;

app.use((req,res,next)=>{
    let hours=new Date().getHours()
    let day=new Date().getDay()
    if((hours<9 || hours>17) || (day ==7 || day ==0 )) {
        //return res.sendFile(__dirname+'/public/close.html')
        return res.sendFile(__dirname+'/public/close.html')
   }
   else  next()
})

app.use(express.static('public'));

app.listen(port, (err)=>{
    err ? console.log(err) : console.log('the server running on port',port)
})