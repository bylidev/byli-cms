import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BlogModule } from './blog/blog.module';
import {MatChipsModule} from '@angular/material/chips';
import {CdkDropList} from "@angular/cdk/drag-drop";
import {BlogCategoriesComponent} from "./blog/blog-categories/blog-categories.component";
import {HeaderComponent} from "./header/header.component";
import {CmsWatermarkComponent} from "./cms-watermark/cms-watermark.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BlogModule,
    MatChipsModule,
    CdkDropList,
    BlogCategoriesComponent,
    HeaderComponent,
    CmsWatermarkComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
