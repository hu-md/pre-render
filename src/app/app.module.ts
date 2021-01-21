import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DefaultInterceptor } from './core/net/default.interceptor';
const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'pre-app' }),
    TransferHttpCacheModule,

    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./modules/pre/pre.module').then(m => m.PreModule),
      },
      {
        path: '**',
        loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
      }
    ], {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0],
    }),
    FormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ...INTERCEPTOR_PROVIDES
  ]
})
export class AppModule { }
