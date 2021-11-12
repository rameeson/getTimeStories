const express =require("express")
const app= express()
const data = require("./data.json")


app.set("view engine","ejs")

app.get("/getTimeStories",(req,res)=>{

    res.render("getTimeStories",{datas:data})
})




app.listen(3000,()=>{
    console.log("Server connected to the port 30000")
})