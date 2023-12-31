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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
let AuthService = class AuthService extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(userService, jwtService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_KEY,
        });
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validate(payload) {
        return { id: payload.sub, username: payload.username };
    }
    async singIn(email, pass) {
        const user = await this.userService.findOne(email);
        if (!user) {
            throw new common_1.BadRequestException('Email or password are wrong');
        }
        const passwordCompare = await bcrypt.compare(pass, user.password);
        if (!passwordCompare) {
            throw new common_1.BadRequestException('Email or password are wrong');
        }
        const token = await this.jwtService.signAsync({ sub: user._id, email: user.email });
        await this.userService.findByIdAndUpdate(user._id, { token });
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map