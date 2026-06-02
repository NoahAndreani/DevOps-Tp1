import { Module } from '@nestjs/common';
import { AppControllerPing } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppControllerPing,AppControllerStats],
  providers: [AppService, CounterStore],
})
export class AppModule {}
