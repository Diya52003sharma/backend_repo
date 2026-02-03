const Contact=require('../Modals/Contact')

const create =async(req,res)=>
{
    
    try
    {
        const Cont=new Contact(req.body)
        const data=await Cont.save()
        res.status(200).json({
        message:"data added successfully",
        data:data
    })
    }
    catch(err)
    {
        res.status(400).json(
            {
                mesaage:"error while adding data",
                success:false,
                data:err
            }
        )
        
    }
}

const all=async(req,res)=>
{
    try
    {
        const data1=await Contact.find()
        res.status(200).json({
            message:"data loaded",
            success:true,
            data:data1
        })
    }
    catch(err)
    {
        res.status(400).json({
            message:"failed while loading data",
            success:false,
            data:err.message
        })
    }
}
const update=async(req,res)=>
{
    try
    {
        const data=await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,runValidators:true
            }
            
        )
            if(!update)
            {
                res.status(400).json({
                    message:"id failed to load",
                    success:false,
                    data:data
                })
            }
            res.status(200).json({
                message:"data updated successfully ",
                status:true,
                data:data
            })
    }
    catch(err){
        res.status(400).json({
            message:"error while loading data",
            success:false,
            data:err
        })
    }
}
const deleted=async(req,res)=>
{
    try{
        const data=await Contact.findByIdAndDelete(req.params.id)
        if(!data)
        {
            res.status(400).json({
                message:"data _id not found ",
                success:false
            })
        }
        res.status(200).json({
            message:"data deleted successfully",
            data:data,
            success:true
        })
    }
    catch
    {
            res.status(400).json({
                message:"error",
                success:false
            })
    }
}
module.exports={create,all,update,deleted}