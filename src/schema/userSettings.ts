import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; // Importing decorators and helpers from NestJS Mongoose package

@Schema() // Decorator to mark the class as a Mongoose schema
export class UserSettings {
  @Prop({ required: false }) // Defining 'receiveNotifications' property, not required (optional)
  receiveNotifications?: boolean; // 'receiveNotifications' field of type boolean, optional

  @Prop({ required: false }) // Defining 'receiveEmails' property, not required (optional)
  receiveEmails?: boolean; // 'receiveEmails' field of type boolean, optional

  @Prop({ required: false }) // Defining 'receiveSMS' property, not required (optional)
  receiveSMS?: boolean; // 'receiveSMS' field of type boolean, optional
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings); // Create a Mongoose schema for the UserSettings class
