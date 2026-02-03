const Food=require('../Modals/Food')

const createFood=async(req,res)=>
{
    try{
        const food=new Food(req.body);
        const data=await food.save();
        res.status(200).json({
            message:"food added successfully",
            success:true,
            data:data
        })
    }
    catch(err){
            res.status(400).json({
                message:"error",
                success:false,
                data:err.message
            })

    }
}
const all=async(req,res)=>
{
    try
    {
        const data =await Food.find()
        res.status(200).json({
            success:true,
            message:"data loaded successfully",
            data:data
        })
    }
    catch(err)
    {
        res.status(400).json({
            success:true,
            message:"data loaded successfully",
            data:err
    })
}
}
const update=async(req,res)=>
{
    try
    {
        const data=await Food.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,runValidators:true
            }
        )
        if(!update)
        {
            res.status(400).json({
                message:"data not updated",
                success:false,
                data:err
            })
        }
        res.status(200).json({
            message:"data updated successfully",
            success:true,
            data:data
        })
    }
    catch(err){
            res.status(400).json({
                message:"data failed to load",
                success:false,
                data:err
            })
    }
}
const deleted=async(req,res)=>
{
    try
    {
        const data=await Food.findByIdAndDelete(req.params.id)
        if(!data)
            res.status(400).json({
                message:"id not found",
            success:false})
    res.status(200).json({
        message:"data deleted successfuly",
        data:data,
        success:true
    })
    }
    catch{
        res.status(400).json({
                message:"error not found",
            success:false})
    }
}
module.exports={createFood,all,update,deleted}