import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [UsersModule, CoursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
