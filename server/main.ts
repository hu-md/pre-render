import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { INestApplication } from '@nestjs/common/interfaces';
import { environment } from '../src/environments/environment';

async function bootstrap() {

  const app: INestApplication = await NestFactory.create(ApplicationModule);
  app.enableCors({
    methods: 'GET',
    maxAge: 3600
  });

  // 非生产环境下需要代理请求
  if (!environment.production) {
    app.use('/api', createProxyMiddleware(environment?.proxy as Options));
  }

  await app.listen(process.env.PORT || 3000);
}

// Webpack将用 '__webpack_require__' 替换 'require'
// '__non_webpack_require__' is a proxy to Node 'require'
// 确保服务器只在不需要包的情况下运行
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(err => console.error(err));
}
