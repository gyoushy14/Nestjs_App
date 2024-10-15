import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { usermodule } from './users/Users_Module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://MahmoudMohamed:K67Gbhf0u2r3AKyj@dinamo.s5vxo.mongodb.net/?retryWrites=true&w=majority&appName=DINAMO"),
    usermodule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
