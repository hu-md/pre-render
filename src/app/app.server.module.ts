import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {
  ServerModule,
  ServerTransferStateModule
} from "@angular/platform-server";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";

// 必须引入模块
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
