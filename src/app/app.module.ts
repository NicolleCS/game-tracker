import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { OfferHomeComponent } from './list-offers/pages/offer-home/offer-home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { SearchInputComponent } from './list-offers/components/search-input/search-input.component';
import { FilterSelectComponent } from './list-offers/components/filter-select/filter-select.component';
import { OfferCardComponent } from './list-offers/components/offer-card/offer-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OfferHomeComponent,
    FooterComponent,
    SearchInputComponent,
    FilterSelectComponent,
    OfferCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
