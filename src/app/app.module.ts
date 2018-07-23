import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { TemplateBaseComponent } from './template-base/template-base.component';

import { ContentService } from './content/content.service';
import { CoverComponent } from './slides/cover/cover.component';
import { TitleContentComponent } from './slides/title-content/title-content.component';
import { TitleImageComponent } from './slides/title-image/title-image.component';
import { TitleComponent } from './slides/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    TemplateBaseComponent,
    CoverComponent,
    TitleContentComponent,
    TitleImageComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
