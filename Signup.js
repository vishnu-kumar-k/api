const { response } = require("express");
var con=require("./Mysql");



exports.signup=(req,res)=>
{
    var t=req.body;
    var sql="insert into login(phone_number,email,name,password) values ?";
    var values=[[t.number,t.email,t.name,t.password]]
    var p="select * from login where phone_number=?";
    con.query(p,[t.number],function(err,result)
    {
        if(err)
            throw err
        if(result.length==0)
        {
        con.query(sql,[values],function(err)
        {
            if(err)
                throw err
            console.log("sucess");    
            res.send(
                {
                    "status":true,
                }
            )  
    
        })   
        }
        else
        {
            res.json(
                {
                    "status":false,
                    "Reason":"Number already exists"
                }
            )
        }
    })
    

}