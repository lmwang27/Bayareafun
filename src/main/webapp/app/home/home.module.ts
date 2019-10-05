import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { greenhouseSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { CourseService } from 'app/shared/service/CourseService';

@NgModule({
    imports: [greenhouseSharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [CourseService]
})
export class greenhouseHomeModule {}
