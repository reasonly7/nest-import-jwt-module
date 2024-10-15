import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [importConfigModule(), AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
