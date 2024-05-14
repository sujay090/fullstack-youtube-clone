const asyncHendeler = (requesHandeler)=>{
    (req,res,next)=>{
      Promise.resolve(requesHandeler(req,res,next)).catch((err)=>{
        next(err)
      })
    }
}

export {asyncHendeler}