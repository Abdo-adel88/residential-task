import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PlaceComponent } from './component/place/place.component';
import { HouseComponent } from './component/house/house.component';
import { DreamHouseComponent } from './component/dream-house/dream-house.component';
import { DesignHouseComponent } from './component/design-house/design-house.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},

  {path:'home',component:HomeComponent},
  {path:'place',component:PlaceComponent},
  {path:'house',component:HouseComponent},
  {path:'dream-house',component:DreamHouseComponent},
  {path:'design-house',component:DesignHouseComponent},
  {path:'progress-bar',component:ProgressBarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
