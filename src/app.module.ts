import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoursesModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
