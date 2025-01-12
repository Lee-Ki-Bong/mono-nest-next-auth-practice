import { Module, ValidationPipe } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { APP_PIPE } from "@nestjs/core"
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

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
    }),
    AuthModule,
    UserModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () => {
        return new ValidationPipe({
          whitelist: true, // 요청에서 DTO에 정의되지 않은 속성 제거
          forbidNonWhitelisted: true, // DTO에 정의되지 않은 속성이 있으면 에러 발생
          transform: true // 요청 데이터를 DTO 클래스의 타입으로 자동 변환
        })
      }
    }
  ]
})
export class AppModule {}
