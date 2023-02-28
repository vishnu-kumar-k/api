var con=require('./Mysql');
exports.login=(req,res)=>{
    var t=req.body;
    console.log("Request recevied  "+t.number)
    
    
    con.query("select name from login where phone_number =? and password=?",[t.number,t.password],(err,result)=>{
        if(err){
            console.log("Not found")
            res.json(err)
        }
        else{

            if(result.length==0)
            {
                res.json(
                    {
                        data:t,
                        status:false
                    }
                )
            }  
            else
            {
                res.json(
                    {
                        status:true,
                        q:result
                    }
                )
            }
        }

    });
    
    
    
};