import { Module } from '@nestjs/common';
import { AiTutorService } from './ai-tutor.service';
@Module({providers:[AiTutorService],exports:[AiTutorService]})
export class AiModule {}
