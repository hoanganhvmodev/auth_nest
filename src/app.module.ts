import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hoanganh1999zzz',
      database: 'auth_nest',
      autoLoadEntities:true,
      // logging:'all',
      synchronize: true,
    }),
      UsersModule,
      AuthModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
