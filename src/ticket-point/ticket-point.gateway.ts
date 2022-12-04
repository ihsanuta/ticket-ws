import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WsException,
    WsResponse
   } from '@nestjs/websockets';
  import { Logger } from '@nestjs/common';
  import { Socket, Server } from 'socket.io';

  @WebSocketGateway({namespace: "/ticket-point"})
  export class TicketPointGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('AppGateway');

    @SubscribeMessage('join')
    joinRoom(client: Socket, room: string): void {
      client.join(room);
    }

    pushTicketPoint(payload: any): boolean{
      var res= this.server.to(payload.room).emit("ticket", payload.data);
      return res
    }

    afterInit(server: Server) {}

    handleDisconnect(client: Socket) {
     this.logger.log(`Client disconnected: ${client.id}`);
     console.log(`Client disconnected: ${client.id}`);
    }

    handleConnection(client: Socket, ...args: any[]) {
     this.logger.log(`Client connected: ${client.id}`);
    }

  }
