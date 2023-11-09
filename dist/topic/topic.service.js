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
exports.TopicService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const topic_shema_1 = require("./schema/topic.shema");
const mongoose_2 = require("mongoose");
let TopicService = class TopicService {
    constructor(topicModel) {
        this.topicModel = topicModel;
    }
    async createTopic(createTopicDto) {
        const createTopic = await this.topicModel.create(createTopicDto);
        return createTopic;
    }
    async findAll(userId) {
        return this.topicModel.findById(userId);
    }
};
exports.TopicService = TopicService;
exports.TopicService = TopicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(topic_shema_1.Topic.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TopicService);
//# sourceMappingURL=topic.service.js.map