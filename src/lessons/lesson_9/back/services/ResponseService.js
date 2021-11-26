
class ResponseService {


    static success( context, data, code = 200 ){

        context.status = code;
        context.body = data;

    }


    static error( context, message, code = 400){
        context.status = code;
        context.body = {
            message
        };
    }

}


export default ResponseService;