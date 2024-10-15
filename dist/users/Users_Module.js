"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usermodule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const UserSchema_1 = require("../schema/UserSchema");
const User_Service_1 = require("./User_Service");
const User_Controller_1 = require("./User_Controller");
const userSettings_1 = require("../schema/userSettings");
let usermodule = class usermodule {
};
exports.usermodule = usermodule;
exports.usermodule = usermodule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: UserSchema_1.DB_model.name,
                    schema: UserSchema_1.DB_Schema
                },
                {
                    name: userSettings_1.UserSettings.name,
                    schema: userSettings_1.UserSettingsSchema
                }
            ])
        ],
        providers: [User_Service_1.UserService],
        controllers: [User_Controller_1.User_Controller]
    })
], usermodule);
;
//# sourceMappingURL=Users_Module.js.map