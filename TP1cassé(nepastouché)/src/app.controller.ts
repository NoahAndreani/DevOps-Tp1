import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ping')
export class AppControllerPing {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHeader(@Req() req: Request) {
    return req.headers;
  }
}

@Controller('stats')
export class AppControllerStats {
  constructor(private readonly shared: CounterStore) {}

  @Get()
  getstat() {
    this.shared.addRequest()
    return JSON.stringify({
      "nbRequests" : this.shared.getValue,
      "uptime" : process.uptime(),
      "idInstance" : process.env.INSTANCE_ID
    });
  }
}
