import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS aanzetten voor de veiligheid
  app.enableCors();
  await app.listen(process.env.PORT || 10000);
  console.log("Webstorm UI draait op http://localhost:3000");
  console.log("Zorg dat PyCharm draait op poort 5000!");
}
bootstrap();