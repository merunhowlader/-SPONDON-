import Joi from "joi";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import JwtService from "../../services/JwtService";
import { User } from "../../models";



const loginController = {

    

    async login(req,res,next){
        const loginSchema=Joi.object({
            username:Joi.string().required(),
            password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()

        })

        const{error}=loginSchema.validate(req.body);

        if(error){
            return next(error);
        }
        

        try{
            const user= await User.findOne({username: req.body.username,password: req.body.password});
            if(!user){
                return next(CustomErrorHandler.wrongCredentials());

            }
            

            

            


          

            const access_token= JwtService.sign({_id:user._id });
            

            res.json({access_token});
        }catch(err){
           return next(err);
        }
        
    }

}

export default loginController;