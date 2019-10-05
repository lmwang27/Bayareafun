import { NgModule } from '@angular/core';

import { greenhouseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [greenhouseSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [greenhouseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class greenhouseSharedCommonModule {}
