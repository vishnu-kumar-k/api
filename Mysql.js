var Mysql=require('mysql')

const con=Mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"login"
})

con.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
  });

  
module.exports=con;