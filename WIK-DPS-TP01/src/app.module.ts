import { Module } from '@nestjs/common';
import { AppControllerPing, AppControllerStats } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CounterStore } from './counter-store.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppControllerPing, AppControllerStats],
  providers: [AppService, CounterStore],
})
export class AppModule {}
