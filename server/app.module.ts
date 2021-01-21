import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { readFileSync } from 'fs';
import { AppServerModule } from '../src/main.server';
import { AppController } from './app.controller';
import * as path from 'path';
import * as domino from 'domino';


const template: string = readFileSync(path.join('dist', 'index.html')).toString();
const win: Window = domino.createWindow(template);
global['window'] = win;
global['location'] = win.location;
global['navigator'] = win.navigator;
global['document'] = win.document;
global['history'] = win.history;

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist')
    })
  ],
  controllers: [AppController]
})
export class ApplicationModule { }
