import { UserService } from "./User_Service";
import { CreateUserDTO } from "./dto/CreateUserDTO";
import mongoose from "mongoose";
import { UpdateUserDTO } from "./dto/UpdateUserDTO";
export declare class User_Controller {
    private UserService;
    constructor(UserService: UserService);
    CreateUser(CreateUserDTO: CreateUserDTO): Promise<mongoose.Document<unknown, {}, import("../schema/UserSchema").DB_model> & import("../schema/UserSchema").DB_model & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetUsers(): mongoose.Query<(mongoose.Document<unknown, {}, import("../schema/UserSchema").DB_model> & import("../schema/UserSchema").DB_model & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    })[], mongoose.Document<unknown, {}, import("../schema/UserSchema").DB_model> & import("../schema/UserSchema").DB_model & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }, {}, import("../schema/UserSchema").DB_model, "find", {}>;
    GetUserByID(id: string): Promise<mongoose.Document<unknown, {}, import("../schema/UserSchema").DB_model> & import("../schema/UserSchema").DB_model & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDTO): Promise<mongoose.Document<unknown, {}, import("../schema/UserSchema").DB_model> & import("../schema/UserSchema").DB_model & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }>;
    deleteUser(id: string): Promise<void>;
}
