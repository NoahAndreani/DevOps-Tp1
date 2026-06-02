import { Controller, Get, Req } from '@nestjs/common';
import { CounterStore } from './counter-store.service';

@Controller('ping')
export class AppControllerPing {
  constructor(private readonly shared: CounterStore) {}

  @Get()
  getHeaders(@Req() req: Request) {
    this.shared.addRequest();
    return req.headers;
  }
}

@Controller('stats')
export class AppControllerStats {
  constructor(private readonly shared: CounterStore) {}

  @Get()
  getStats() {
    this.shared.addRequest();
    return JSON.stringify({
      nbRequest: this.shared.getValue(),
      uptime: process.uptime(),
      idInstance: process.env.INSTANCE_ID,
    });
  }
}
