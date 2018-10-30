import { NgModule } from '@angular/core';

import { PsmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PsmSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PsmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PsmSharedCommonModule {}
