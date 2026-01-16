import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';
import { ReservationsModule } from './reservations/reservations.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, ComicsModule, ReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
