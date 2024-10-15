import { Module } from '@nestjs/common';
import { importJwtModule } from 'src/jwt/importJwtModule';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [importJwtModule()],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
