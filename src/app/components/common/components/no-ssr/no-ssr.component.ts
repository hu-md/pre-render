import { Component, OnInit, PLATFORM_ID, Inject, ElementRef, TemplateRef, ViewChild, EmbeddedViewRef, ViewContainerRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'nu-no-ssr',
  templateUrl: './no-ssr.component.html',
  styleUrls: ['./no-ssr.component.less']
})
export class NoSsrComponent implements OnInit {

  isServer: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platform: Object, private viewConainer: ViewContainerRef) { }

  ngOnInit(): void {
    // console.log(this.viewConainer);
    // console.log(isPlatformBrowser(this.platform), isPlatformServer(this.platform));
    const _b: boolean = isPlatformBrowser(this.platform);
    const _s: boolean = isPlatformServer(this.platform);
    this.isServer = !_b && _s;
  }

}
