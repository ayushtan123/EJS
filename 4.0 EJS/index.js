import express from "express";
const app= express();
const port =3000;

app.get("/",(req,res)=>{
    // const d = new Date("May 26,2024");
    const d = new Date();
    let day = d.getDay();
    console.log(day);
    let type = "a weekday";
    let adv = "it's time to work hard";
    if(day===0 || day===6){
        type="the weekend";
        adv="its time to chill and relax"
    }
    res.render("index.ejs",{dayType: type,advice : adv});
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
