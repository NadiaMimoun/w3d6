const Product=require('../model/product');
const item=require('../model/shoppingcart');
const products=[];
products.push(new Product("1","blue","jeans","12$"));
products.push(new Product("2","black","shirt","14$"));
products.push(new Product("3","white","dress","16$"));
exports.getAllProducts=(req, res) => {
 
    res.render("shop", {
        products:products,
        }) 

}
exports.getInfo=(req, res) => {
    const id=req.query.id;
       res.render("product", {
           id:id,
           products:products,
   
           }) 
   
   }
const items=[];
   exports.addToCart=(req,res,next)=>{
       let found=0;
       for(let i=0;i<items.length;i++){
           if(req.body.name===items[i].name){
               items[i].quantity++;
               found=1;
           }
       }
       if(found==0){
       items.push(new item(req.body.name,req.body.price,1) );}
       res.redirect(`/shoppingcart`);
       
    // const name=req.body.name;
    // const price=req.body.price;
    

    // res.render("addToCart", {
    //     name:name,
    //     price:price,

    //     })

   }
   exports.shoppingcart=(req,res)=>{
    res.render("shoppingcart", {
        items:items,

        })

   }