const express = require("express");
const Login=require("./Login")
const Signup=require("./Signup")
const cors = require("cors");
const con=require("./Mysql")

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


app.post("/login",Login.login)

app.post("/sign",Signup.signup)



app.listen(8000, () => {
  console.log("Running");
});
