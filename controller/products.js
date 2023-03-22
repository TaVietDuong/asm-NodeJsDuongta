import Joi from "joi"
import Products from "../model/products"
const  producstSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string().required(),
    status: Joi.string().required(),
})
export const create = async (req,res)=>{
   try {
    const products = await Products.create(req.body);
   return res.status(200).json({
        message:"Created successfully",
         products
    })

   } catch (error) {
  return  res.status(400).json({
        message:error
    })
   }
}
export const getAll = async (req,res)=>{
    try {
     const producst = await Products.find()
    return res.status(200).json(producst)
 
    } catch (error) {
    return res.status(400).json({
         message:error
     })
    }
 }

 export const get = async (req,res)=>{
    try {
     const producst = await Products.findById(req.params.id);
    return res.status(200).json(producst)
 
    } catch (error) {
    return res.status(400).json({
         message:error
     })
    }
 }

 export const remove = async (req,res)=>{
    try {
     const producst = await Products.findByIdAndDelete(req.params.id);
    return res.status(200).json({
        message:"Delete Product successfully",
        producst
    })
 
    } catch (error) {
    return res.status(400).json({
         message:error
     })
    }
 }

 export const update = async (req,res)=>{
    const { error } = productShema.validate(req.body);
    if (error) {
        res.json({
            message: error.details[0].message,
        });
    }
    try {
     const producst = await Products.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).json({
        message:"Update Product successfully",
        producst
    })
 
    } catch (error) {
    return res.status(400).json({
         message:error
     })
    }
 }
