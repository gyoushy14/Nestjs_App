import { Injectable } from "@nestjs/common"; // Importing Injectable decorator to define this class as a service in NestJS
import { InjectModel } from "@nestjs/mongoose"; // Importing InjectModel decorator to inject Mongoose models
import { Model } from "mongoose"; // Importing Mongoose's Model type for typing models
import { DB_model } from "src/schema/UserSchema"; // Importing the User schema model
import { CreateUserDTO } from "./dto/CreateUserDTO"; // Importing the DTO for creating a user
import { UpdateUserDTO } from "./dto/UpdateUserDTO"; // Importing the DTO for updating a user
import { UserSettings } from "src/schema/userSettings"; // Importing the UserSettings schema

@Injectable() // Decorator to make the class injectable as a service
export class UserService {
    // Injecting the user model and user settings model via the constructor
    constructor(
        @InjectModel(DB_model.name) private usermodel: Model<DB_model>, // Injects the User schema (DB_model) into the service
        @InjectModel(UserSettings.name) private userSettingsModel: Model<UserSettings> // Injects the UserSettings schema into the service
    ) { };

    // Method to create a user with optional settings
    async CreateUser({ settings, ...CreateUserDTO }: CreateUserDTO) { 
        if (settings) { // Check if 'settings' is provided
            const NewSettings = new this.userSettingsModel(settings); // Create a new instance of UserSettings model
            const SAVEDNewSettings = await NewSettings.save(); // Save the new settings in the database
            const newuser = new this.usermodel({ // Create a new user with the settings reference
                ...CreateUserDTO, // Spread other user properties from CreateUserDTO
                settings: SAVEDNewSettings._id, // Assign the saved settings' ObjectId to the user
            });
            return newuser.save(); // Save and return the new user
        }

        // If no settings are provided, just create and save the user without settings
        const newUser = new this.usermodel(CreateUserDTO);
        return newUser.save(); // Save and return the new user
    };

    // Method to get all users, including their settings via 'populate'
    GetUsers() {
        return this.usermodel.find().populate('settings'); // Fetch all users and populate the 'settings' field
    }

    // Method to get a specific user by their ID, including their settings
    GetUsersID(id: string) {
        return this.usermodel.findById(id).populate('settings'); // Fetch the user by ID and populate the 'settings' field
    }

    // Method to update a user by their ID
    updateUser(id: string, updateUserDto: UpdateUserDTO) {
        return this.usermodel.findByIdAndUpdate(id, updateUserDto, { new: true }); // Update the user by ID and return the updated user
    }

    // Method to delete a user by their ID
    deleteUSERBYid(id: string) {
        return this.usermodel.findByIdAndDelete(id); // Find and delete the user by ID
    }
}
