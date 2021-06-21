const express = require("express");//We get express function
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.Port || 8000

//to use template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../templates/views"))
//to display index.html in public folder
app.use(express.static(path.join(__dirname, "../public")));

hbs.registerPartials(path.join(__dirname,'../templates/partials'))



//Routing 
app.get("/", (req, res) =>{
    res.render("index" );
})

app.get("/about", (req, res) =>{
    res.send("Welcome to the about page");
})

app.get("/weather", (req, res) =>{
    res.render("weather");
})

app.get("*" , (req, res) =>{
    res.render("404error");
})

app.listen(port, "0.0.0.0", ()=>{
    console.log("listening");
})
