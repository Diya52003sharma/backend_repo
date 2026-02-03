const User=require("../Modals/User")

const create=async(req,res)=>
{
    try
    {
        const user= new User(
            {
                email:req.body.email,
                password:req.body.password,
                name:req.body.name
            }
        )
        const data=await user.save()
        res.status(200).json({
           success:true,
            message:"user added successfully",
            data:data
        })


    }
    catch(err)
    {
        res.status(400).json({
            message:"failed to loaded data",
            success:false,
            data:data.err
        })
    }
}
module.exports={create}