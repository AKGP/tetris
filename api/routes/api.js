module.exports = (router)=>{
    let data ={
        name:"Ajay",
        test:"api"
    }
    router.get('/test',(req,res)=>{
        res.send(data);
    });

    
    return router;
}