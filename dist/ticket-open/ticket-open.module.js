"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketOpenModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const ticket_open_gateway_1 = require("./ticket-open.gateway");
const ticket_open_service_1 = require("./ticket-open.service");
const ticket_open_controller_1 = require("./ticket-open.controller");
let TicketOpenModule = class TicketOpenModule {
};
TicketOpenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
        ],
        providers: [ticket_open_service_1.TicketOpenService, ticket_open_gateway_1.TicketOpenGateway],
        controllers: [ticket_open_controller_1.TicketOpenController],
    })
], TicketOpenModule);
exports.TicketOpenModule = TicketOpenModule;
//# sourceMappingURL=ticket-open.module.js.map