import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { AiModule } from './ai/ai.module';
@Module({imports:[AuthModule,CoursesModule,AiModule]})
export class AppModule {}
