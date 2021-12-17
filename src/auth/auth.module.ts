import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from 'src/users/repositoris/user.repository';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([UsersRepository]),
    forwardRef(() =>  UsersModule ),
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '20h' }
    })
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
