import { RouterModule, Routes } from '@angular/router';
import { TemplateBaseComponent } from './template-base/template-base.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: '', component:AppComponent },
    { path: ':chapter', component:TemplateBaseComponent },
    { path: ':chapter/:slide', component:TemplateBaseComponent },
    { path: ':chapter/:slide/:viewer', component:TemplateBaseComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);