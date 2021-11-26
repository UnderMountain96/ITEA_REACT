import jwt from "jsonwebtoken";
import bcrypt  from "bcrypt";
import { v4 as uuid } from "uuid";

// import UserModel from '../models/User';
// import RecoverModel from '../models/RecoverHashes';

const SALT_ROUNDS = 10;
const HEADER = "authorization";


class AuthService {

    static get saltRounds(){
        // BCrypt salt rounds
        return SALT_ROUNDS;
    }

    static get HEADER(){
        return HEADER;
    }

    static generateHash( password ){
        return bcrypt.hashSync( password, AuthService.saltRounds );
    }

    static async comparePassword( password, hash ){
        return await bcrypt.compare( password, hash ); 
    } 

    static async getByEmail ( email ){
        
        if( email === "test@test.ua"){
            return {
                "_id" : "5dcd64094db7bacdf8eac8a2",
                "role" : "admin",
                "name" : "user",
                "email" : "test@test.ua",
                "hash" : "$2a$10$LY2YLk4Z/hW0/h9XMRIxnO..hcZW2i8y3g2VHzCIwHlUSJNBXFYBi",
                "created_at" : "2019-11-14T14:26:17.096Z",
                "updated_at" : "2019-12-23T11:32:09.707Z",
            };
        } 
        return false;
    }

    static async login(  email, password ){
        let account = await AuthService.getByEmail( email );
        if( !account ){
            return false;
        }

        if( !await AuthService.comparePassword( password, account.hash ) ){
            return false;
        }

        return account;
    }

    static async generateToken( account ){
        return jwt.sign(
            {
                _id: account._id,
                name: account.name,
                email: account.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: ( process.env.JWT_LIFETIME * 60 )
            }
        );
    }

    static async refreshToken( ctx, account ){
        if( !account ){
            return;
        }
        ctx.response.set( AuthService.HEADER, await AuthService.generateToken(account) );
    }

    static async getAccount( token ){
        const decodedToken = await AuthService.verifyToken( token );
        return { valid: true };
    }

    static async verifyToken ( token ){
        try {
            return jwt.verify( token, process.env.JWT_SECRET );
        } catch (error) {
            return false;
        }
    }

}

export default AuthService;