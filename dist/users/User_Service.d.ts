import { Model } from "mongoose";
import { DB_model } from "src/schema/UserSchema";
import { CreateUserDTO } from "./dto/CreateUserDTO";
import { UpdateUserDTO } from "./dto/UpdateUserDTO";
import { UserSettings } from "src/schema/userSettings";
export declare class UserService {
    private usermodel;
    private userSettingsModel;
    constructor(usermodel: Model<DB_model>, userSettingsModel: Model<UserSettings>);
    CreateUser({ settings, ...CreateUserDTO }: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetUsers(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, DB_model, "find", {}>;
    GetUsersID(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, DB_model, "findOne", {}>;
    updateUser(id: string, updateUserDto: UpdateUserDTO): import("mongoose").Query<import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, DB_model, "findOneAndUpdate", {}>;
    deleteUSERBYid(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, DB_model> & DB_model & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, DB_model, "findOneAndDelete", {}>;
}
