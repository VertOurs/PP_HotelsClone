import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { StartRatingComponent } from './shared/components/star-rating/star-rating.component';
import { HotelListService } from './hotel-list/hotel-list.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel-list/hotel-detail/hotel-detail.component';
import { RouterModule } from '@angular/router';

registerLocaleData(localFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StartRatingComponent,
    HomeComponent,
    HotelDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'home', component: HomeComponent },
      { path:'', redirectTo: 'home', pathMatch: 'full' },
      { path:'hotels/:id', component: HotelDetailComponent },
      { path:'hotels', component: HotelListComponent },
      { path:'**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
