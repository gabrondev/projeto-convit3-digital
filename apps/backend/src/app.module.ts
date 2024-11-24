import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventosModule } from './eventos/eventos.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [EventosModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
