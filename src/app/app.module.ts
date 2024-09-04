import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PlaceComponent } from './component/place/place.component';
import { HouseComponent } from './component/house/house.component';
import { DreamHouseComponent } from './component/dream-house/dream-house.component';
import { DesignHouseComponent } from './component/design-house/design-house.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceComponent,
    HouseComponent,
    DreamHouseComponent,
    DesignHouseComponent,
    ProgressBarComponent,
    DesignHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
