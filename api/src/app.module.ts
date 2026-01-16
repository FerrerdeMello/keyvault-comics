import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [ComicsModule, ReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
