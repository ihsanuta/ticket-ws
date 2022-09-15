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
exports.TicketOpenGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
let TicketOpenGateway = class TicketOpenGateway {
    constructor() {
        this.logger = new common_1.Logger('AppGateway');
    }
    joinRoom(client, room) {
        console.log(room);
        console.log(client.id);
        client.join(room);
    }
    pushTicketOpen(payload) {
        console.log(payload.room);
        var res = this.server.to(payload.room).emit("ticket", payload.data);
        return res;
    }
    afterInit(server) { }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
        console.log(`Client disconnected: ${client.id}`);
    }
    handleConnection(client, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], TicketOpenGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], TicketOpenGateway.prototype, "joinRoom", null);
TicketOpenGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: "/ticket-open" })
], TicketOpenGateway);
exports.TicketOpenGateway = TicketOpenGateway;
//# sourceMappingURL=ticket-open.gateway.js.map