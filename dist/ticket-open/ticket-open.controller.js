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
exports.TicketOpenController = void 0;
const common_1 = require("@nestjs/common");
const ticket_open_service_1 = require("./ticket-open.service");
let TicketOpenController = class TicketOpenController {
    constructor(service) {
        this.service = service;
    }
    async pushTicketOpen(res, req) {
        var result = await this.service.pushTicketOpen(req);
        if (result) {
            res.status(common_1.HttpStatus.OK).json({
                status_code: common_1.HttpStatus.OK,
                message: "message sent"
            });
        }
        else {
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                status_code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: "failed when sending message"
            });
        }
    }
};
__decorate([
    (0, common_1.Post)("/push"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TicketOpenController.prototype, "pushTicketOpen", null);
TicketOpenController = __decorate([
    (0, common_1.Controller)('ticket-open'),
    __metadata("design:paramtypes", [ticket_open_service_1.TicketOpenService])
], TicketOpenController);
exports.TicketOpenController = TicketOpenController;
//# sourceMappingURL=ticket-open.controller.js.map