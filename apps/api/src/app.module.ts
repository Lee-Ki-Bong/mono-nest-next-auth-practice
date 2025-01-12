import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env.local"]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        host: await configService.getOrThrow("DB_HOST"),
        port: (await configService.getOrThrow("DB_PORT")) as number,
        username: await configService.getOrThrow("DB_USERNAME"),
        password: await configService.getOrThrow("DB_PASSWORD"),
        database: await configService.getOrThrow("DB_DATABASE"),
        autoLoadEntities: true,
        synchronize: false,
        logging: false,
        charset: "utf8mb4"
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
