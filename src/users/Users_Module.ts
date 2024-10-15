import { Module } from '@nestjs/common'; // Importing Module decorator to define a NestJS module
import { MongooseModule } from '@nestjs/mongoose'; // Importing MongooseModule for database interaction with MongoDB
import { DB_model, DB_Schema } from 'src/schema/UserSchema'; // Importing the User schema model and its schema
import { UserService } from './User_Service'; // Importing the UserService to provide business logic
import { User_Controller } from './User_Controller'; // Importing the UserController to handle user routes
import { UserSettings, UserSettingsSchema } from 'src/schema/userSettings'; // Importing the UserSettings model and its schema

@Module({
    imports: [
        // Registering Mongoose models to work with MongoDB collections
        MongooseModule.forFeature([
            {
                name: DB_model.name, // Registering the 'DB_model' schema (User schema)
                schema: DB_Schema // Using 'DB_Schema' for the schema definition
            },
            {
                name: UserSettings.name, // Registering the 'UserSettings' schema (User settings schema)
                schema: UserSettingsSchema // Using 'UserSettingsSchema' for the schema definition
            }
        ])
    ],
    providers: [UserService], // Registering the UserService in the module's providers array
    controllers: [User_Controller] // Registering the UserController to handle routes
})
export class usermodule { }; // Exporting the user module
