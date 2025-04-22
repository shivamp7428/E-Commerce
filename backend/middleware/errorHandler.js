

const errorHandler = async(err , req, res , next)=>{
console.log(err)


const statusCode = err.statuCode || 500;
return res.status(statusCode).json({success:false,message:err.message|| "internal servcer error"})

}

export default errorHandler