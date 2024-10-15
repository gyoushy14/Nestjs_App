import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common"; 
// Importing decorators and tools from NestJS to handle HTTP requests, parameters, and validation

import { UserService } from "./User_Service"; // Importing the UserService to handle business logic
import { CreateUserDTO } from "./dto/CreateUserDTO"; // Importing CreateUserDTO for creating a user
import mongoose from "mongoose"; // Importing Mongoose for MongoDB operations and ObjectId validation
import { UpdateUserDTO } from "./dto/UpdateUserDTO"; // Importing UpdateUserDTO for updating a user

@Controller('users') // Defines the base route for the controller
export class User_Controller {
  constructor(private UserService: UserService) { }; // Injecting UserService to access business logic

  @Post("add") // Route to create a new user (POST /users/add)
  @UsePipes(new ValidationPipe()) // Use validation pipe to validate incoming DTO based on class-validator decorators
  CreateUser(@Body() CreateUserDTO: CreateUserDTO) { // 'CreateUser' method, accepts CreateUserDTO from request body
    console.log(CreateUserDTO); // Logs the DTO to the console
    return this.UserService.CreateUser(CreateUserDTO); // Calls the UserService to create a new user
  };

  @Get("allUsers") // Route to get all users (GET /users/allUsers)
  GetUsers() { // 'GetUsers' method, fetches all users
    return this.UserService.GetUsers(); // Calls UserService to get the list of users
  };

  @Get(":id") // Route to get a user by ID (GET /users/:id)
  async GetUserByID(@Param('id') id: string) { // 'GetUserByID' method, accepts user ID from route params
    const IsValid = mongoose.Types.ObjectId.isValid(id); // Check if the ID is a valid MongoDB ObjectId
    if (!IsValid) throw new HttpException("User Not Found", 404); // Throw 404 if the ID is invalid

    const findUserByID = await this.UserService.GetUsersID(id); // Fetch user by ID from UserService
    if (!findUserByID) throw new HttpException("User Not Found", 404); // Throw 404 if no user found
    return findUserByID; // Return the found user
  };

  @Patch('edit/:id') // Route to update a user by ID (PATCH /users/edit/:id)
  @UsePipes(new ValidationPipe()) // Use validation pipe to validate incoming DTO for update
  async updateUser( 
    @Param('id') id: string, // 'updateUser' method, accepts user ID from route params
    @Body() updateUserDto: UpdateUserDTO, // Accepts UpdateUserDTO from request body
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id); // Check if the ID is a valid MongoDB ObjectId
    if (!isValid) throw new HttpException('Invalid ID', 400); // Throw 400 if the ID is invalid

    const updatedUser = await this.UserService.updateUser(id, updateUserDto); // Update the user in the service
    if (!updatedUser) throw new HttpException('User Not Found', 404); // Throw 404 if user not found
    return updatedUser; // Return the updated user
  };

  @Delete("delete/:id") // Route to delete a user by ID (DELETE /users/delete/:id)
  async deleteUser(@Param("id") id: string) { // 'deleteUser' method, accepts user ID from route params
    const isValid = mongoose.Types.ObjectId.isValid(id); // Check if the ID is a valid MongoDB ObjectId
    if (!isValid) throw new HttpException('Invalid ID', 400); // Throw 400 if the ID is invalid

    const Deleteuser = await this.UserService.deleteUSERBYid(id); // Delete the user via UserService
    if (!Deleteuser) throw new HttpException('User Not Found', 404); // Throw 404 if user not found
    // console.log(this.deleteUser); // (Optional) Log the delete action for debugging
    return; // Return success (No content to return)
  }
}
