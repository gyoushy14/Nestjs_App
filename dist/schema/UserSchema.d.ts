import mongoose from "mongoose";
import { UserSettings } from "./userSettings";
export declare class DB_model {
    Product: string;
    Vendor: string;
    User: string;
    Cart: {
        name: string;
        price: number;
    };
    settings?: UserSettings;
}
export declare const DB_Schema: mongoose.Schema<DB_model, mongoose.Model<DB_model, any, any, any, mongoose.Document<unknown, any, DB_model> & DB_model & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, DB_model, mongoose.Document<unknown, {}, mongoose.FlatRecord<DB_model>> & mongoose.FlatRecord<DB_model> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
