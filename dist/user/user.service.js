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
const register_schema_1 = require("./schema/register.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async register(registerAuthDto) {
        const { email, password } = registerAuthDto;
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new common_1.BadRequestException('Email is already exist');
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = {
            ...registerAuthDto,
            password: hashPassword,
            verificationToken: '',
        };
        const createUser = await this.userModel.create(newUser);
        return {
            nickName: createUser.nickName,
            email: createUser.email,
        };
    }
    async findOne(email) {
        return await this.userModel.findOne({ email });
    }
    async findByIdAndUpdate(id, obj) {
        return await this.userModel.findByIdAndUpdate(id, obj);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(register_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map