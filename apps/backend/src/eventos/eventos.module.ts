import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { DbModule } from 'src/db/db.module';
import { EventoPrisma } from './evento.prisma';

@Module({
  imports: [DbModule],
  controllers: [EventosController],
  providers: [EventoPrisma]
})
export class EventosModule {}
