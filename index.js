const express =  require('express');

const app = express();

// console.log(app)

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})