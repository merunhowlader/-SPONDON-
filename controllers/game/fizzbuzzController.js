const fizzbuzzController = {

    async game(req,res,next){

        const num= req.params.number;

        
            let str = "";
        
            if (num % 3 === 0 && num % 5 === 0){
                str += "fizzbuzz";
                res.json({game: str });

            } 
            if (num % 5 === 0) {
                str += "buzz";
                res.json({game: str });
            }
            if (num % 3 === 0) {
                str += "fizz";
                res.json({game: str });
            }
           else{
            res.json({game: num });

           }

        


    }


}

export default fizzbuzzController;