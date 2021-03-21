import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepliesController } from 'src/modules/replies/controllers/replies.controller';
import { RepliesService } from 'src/modules/replies/services/replies.service';
@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [RepliesService],
  controllers: [RepliesController],
})
export class RepliesModule {}
