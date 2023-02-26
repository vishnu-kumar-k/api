var con=require('./Mysql');
exports.login=(req,res)=>{
    con.query("select * from login",(err,result)=>
    {
        try{
        if(err)
            throw err
        res.json(result);   
        }
        catch
        {
            res.json(err);
        } 
    })
    
    
};