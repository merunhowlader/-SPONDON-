class CustomErrorHandler extends Error{
    constructor(status,msg){
        super();
        this.status=status;
        this.message=msg;
    }
    static wrongCredentials(message="for bidden"){
        return new CustomErrorHandler(403,message);
    }
}

export default CustomErrorHandler;