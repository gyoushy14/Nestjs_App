import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"; // Importing decorators and helpers from NestJS Mongoose package
import mongoose from "mongoose"; // Importing Mongoose, which is a MongoDB object modeling tool
import { UserSettings } from "./userSettings"; // Importing the UserSettings model to reference it in the schema

@Schema() // Decorator to mark the class as a Mongoose schema
export class DB_model {
    @Prop({ unique: true, required: true }) // Defining the 'Product' property with unique and required constraints
    Product: string; // 'Product' field of type string
    @Prop({ required: true }) // Defining the 'Vendor' property as required
    Vendor: string; // 'Vendor' field of type string
    @Prop({ unique: true, required: true }) // Defining the 'User' property with unique and required constraints
    User: string; // 'User' field of type string

    @Prop({ type: Object, required: true }) // Defining the 'Cart' property as a required object
    Cart: { // 'Cart' is an object with two properties: 'name' and 'price'
        name: string, // 'name' field inside Cart of type string
        price: number, // 'price' field inside Cart of type number
    }

    @Prop({type:mongoose.Schema.Types.ObjectId, ref: 'UserSettings'}) // Reference to 'UserSettings' schema via ObjectId
    settings?:UserSettings; // Optional 'settings' field that references the UserSettings model
}

export const DB_Schema = SchemaFactory.createForClass(DB_model); // Create a Mongoose schema for the DB_model class
