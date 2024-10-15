"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Controller = void 0;
const common_1 = require("@nestjs/common");
const User_Service_1 = require("./User_Service");
const CreateUserDTO_1 = require("./dto/CreateUserDTO");
const mongoose_1 = require("mongoose");
const UpdateUserDTO_1 = require("./dto/UpdateUserDTO");
let User_Controller = class User_Controller {
    constructor(UserService) {
        this.UserService = UserService;
    }
    ;
    CreateUser(CreateUserDTO) {
        console.log(CreateUserDTO);
        return this.UserService.CreateUser(CreateUserDTO);
    }
    ;
    GetUsers() {
        return this.UserService.GetUsers();
    }
    ;
    async GetUserByID(id) {
        const IsValid = mongoose_1.default.Types.ObjectId.isValid(id);
        if (!IsValid)
            throw new common_1.HttpException("User Not Found", 404);
        const findUserByID = await this.UserService.GetUsersID(id);
        if (!findUserByID)
            throw new common_1.HttpException("User Not Found", 404);
        return findUserByID;
    }
    ;
    async updateUser(id, updateUserDto) {
        const isValid = mongoose_1.default.Types.ObjectId.isValid(id);
        if (!isValid)
            throw new common_1.HttpException('Invalid ID', 400);
        const updatedUser = await this.UserService.updateUser(id, updateUserDto);
        if (!updatedUser)
            throw new common_1.HttpException('User Not Found', 404);
        return updatedUser;
    }
    ;
    async deleteUser(id) {
        const isValid = mongoose_1.default.Types.ObjectId.isValid(id);
        if (!isValid)
            throw new common_1.HttpException('Invalid ID', 400);
        const Deleteuser = await this.UserService.deleteUSERBYid(id);
        if (!Deleteuser)
            throw new common_1.HttpException('User Not Found', 404);
        return;
    }
};
exports.User_Controller = User_Controller;
__decorate([
    (0, common_1.Post)("add"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDTO_1.CreateUserDTO]),
    __metadata("design:returntype", void 0)
], User_Controller.prototype, "CreateUser", null);
__decorate([
    (0, common_1.Get)("allUsers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User_Controller.prototype, "GetUsers", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], User_Controller.prototype, "GetUserByID", null);
__decorate([
    (0, common_1.Patch)('edit/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateUserDTO_1.UpdateUserDTO]),
    __metadata("design:returntype", Promise)
], User_Controller.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], User_Controller.prototype, "deleteUser", null);
exports.User_Controller = User_Controller = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [User_Service_1.UserService])
], User_Controller);
//# sourceMappingURL=User_Controller.js.map