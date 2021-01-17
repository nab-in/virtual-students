import { Module } from '@nestjs/common';
import { RepliesController } from 'src/modules/replies/controllers/replies.controller';
import { RepliesService } from 'src/modules/replies/services/replies.service';

@Module({
  providers: [RepliesService],
  controllers: [RepliesController],
})
export class RepliesModule {}
