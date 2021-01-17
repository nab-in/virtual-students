import { Module } from '@nestjs/common';
import { RepliesController } from 'src/controllers/replies/replies.controller';
import { RepliesService } from 'src/services/replies/replies.service';

@Module({
  providers: [RepliesService],
  controllers: [RepliesController],
})
export class RepliesModule {}
