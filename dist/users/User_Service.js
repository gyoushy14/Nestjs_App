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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const UserSchema_1 = require("../schema/UserSchema");
const userSettings_1 = require("../schema/userSettings");
let UserService = class UserService {
    constructor(usermodel, userSettingsModel) {
        this.usermodel = usermodel;
        this.userSettingsModel = userSettingsModel;
    }
    ;
    async CreateUser({ settings, ...CreateUserDTO }) {
        if (settings) {
            const NewSettings = new this.userSettingsModel(settings);
            const SAVEDNewSettings = await NewSettings.save();
            const newuser = new this.usermodel({
                ...CreateUserDTO,
                settings: SAVEDNewSettings._id,
            });
            return newuser.save();
        }
        const newUser = new this.usermodel(CreateUserDTO);
        return newUser.save();
    }
    ;
    GetUsers() {
        return this.usermodel.find().populate('settings');
    }
    GetUsersID(id) {
        return this.usermodel.findById(id).populate('settings');
    }
    updateUser(id, updateUserDto) {
        return this.usermodel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }
    deleteUSERBYid(id) {
        return this.usermodel.findByIdAndDelete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(UserSchema_1.DB_model.name)),
    __param(1, (0, mongoose_1.InjectModel)(userSettings_1.UserSettings.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model])
], UserService);
//# sourceMappingURL=User_Service.js.map