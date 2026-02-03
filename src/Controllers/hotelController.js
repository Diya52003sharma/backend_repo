const Hotel = require("../Modals/Hotel");

// CREATE HOTEL
const createHotel = async (req, res) => {
  try {
    // / const data = await Hotel.create(req.body);
    const hotel = new Hotel(req.body);   // instance
    const data = await hotel.save(); //save to DB
    res.status(201).json({
      success: true,
      message: "Hotel added successfully",
      data: data
    });

  } 
  catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
//GETALL
const getAll =async(req,res) =>
  {
  try
  {
    const hotel=await Hotel.find()
    res.status(201).json({
      success:true,
      message:"data loaded successfully",
      data:hotel
    })
    
  }
  catch(err)
  {
    res.status(400).json({
      success:false,
      message:"error while sending error",
      data:err
    })
  }
}
//UPDATEHOTEL
const update=async(req,res)=>
{
  try
  {
    const data=await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new:true,runValidators:true
      }
    )
    if(!update)
    {
      res.status(404).json(
        {
          message:"data not found"
        }
      )
    }
    res.status(201).json({
      success:true,
      message:"data found",
      data:data
    })
  }
  catch(err){
      res.status(500).json({
        status:false,
        message:"error while giving data",
        data:err
      })
  }
}
//DELETED
const deleted=async(req,res)=>
{
      try
      {
        const data=await Hotel.findByIdAndDelete(req.params.id)
        if(!data)
        {
          return res.status(400).json({
            success:false,message:"id not found"
          })
        }
        res.status(201).json({
          success:true,
          message:"deleted sucessfully",
          data:data
        })
      }
      catch(err){
          res.status(400).json({
            success:false,
            message:err
          })
      }
}
module.exports = { createHotel,getAll,update,deleted };
