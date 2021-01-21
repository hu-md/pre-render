import { Directive, TemplateRef, ViewContainerRef, Input, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Directive({
  selector: '[nuNoSsr]'
})
export class NoSsrDirective {

  constructor(@Inject(PLATFORM_ID) private platform: Object, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set nuNoSsr(param: any) {
    if (isPlatformBrowser(this.platform)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
