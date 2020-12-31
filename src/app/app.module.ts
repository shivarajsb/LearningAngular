import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

/* Angular Material Modules */
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirstChildComponent } from './Components/first-child/first-child.component';
import { SecondChildComponent } from './Components/second-child/second-child.component';
import { FirstContainerComponent } from './Components/first-container/first-container.component';
import { SecondContainerComponent } from './Components/second-container/second-container.component';

@NgModule({
  declarations: [AppComponent, FirstChildComponent, SecondChildComponent, FirstContainerComponent, SecondContainerComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
