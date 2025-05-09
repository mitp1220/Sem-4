const expr = require('express')
const app = expr();
const router = expr.Router()



const mvi = [{'id':101,'name':'ABC','year':2013,'rating':9.5},{'id':102,'name':'XYZ','year':2019,'rating':6.5},{'id':103,'name':'MNO','year':2015,'rating':8.8}];

module.exports = router

router.get("/",(req,res)=>{
    res.json(mvi)
    res.send()
});

router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const item = mvi.find(m => m.id === id)
    // res.json(mvi)

    if(item) {
        res.json(item);
    }
    else {
        res.status(404).send("item not found")
    }
});

