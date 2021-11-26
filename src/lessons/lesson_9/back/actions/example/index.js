
import ResponseService from "../../services/ResponseService";

export const exampleFunc = async ctx => {
    ResponseService.success(ctx, {
        status: true 
    });
};