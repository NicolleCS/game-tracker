import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer-home',
  templateUrl: './offer-home.component.html',
  styleUrls: ['./offer-home.component.css']
})
export class OfferHomeComponent implements OnInit {

  public offersList: Offer[] = [];
  public actualOffersList: Offer[] = [];
  public loading: boolean = false;
  public isSearching: boolean = false;
  public actualPage;

  constructor(private offerService: OfferService) {
    this.actualPage = 0;
  }

  ngOnInit(): void {
    this.loadOffers();
  }

  async loadOffers() {
    this.setLoading();
    try {
      const newOffers = await this.offerService.getOffers(this.actualPage)
        .then(result => {
          this.setLoading();
          return result;
        });

      this.offersList = [...new Set([...this.offersList, ...newOffers])];
      this.actualOffersList = this.offersList;

    } catch (error) {
      console.error(error);
    }
  }

  async searchOffer(event: string) {
    this.isSearching = event.length > 0;
    const filteredOffers = this.actualOffersList?.filter(offer => 
      offer.title.includes(event.toLowerCase())
    );
  
    this.offersList = filteredOffers;
  }

  async nextPage() {
    this.actualPage++;
    this.loadOffers();
  }

  isLoading() {
    return this.loading;
  }

  setLoading() {
    this.loading = !this.loading;
  }

  orderBy(value:string) {
    switch(value) {
      case "discount":
        return this.offersList = this.offersList.sort((element, nextElement) => {
          return parseFloat(element.discount) - parseFloat(nextElement.discount);
        });
      case "min":
        return this.offersList = this.offersList.sort((element, nextElement) => {
          return parseFloat(nextElement.salePrice) - parseFloat(element.salePrice);
        });
      case "max":
        return this.offersList = this.offersList.sort((element, nextElement) => {
          return parseFloat(element.salePrice) - parseFloat(nextElement.salePrice);
        });
      case "title":
        return this.offersList = this.offersList.sort((element, nextElement) => {
          return element.title === nextElement.title? 0 : element.title > nextElement.title? 1 : -1;
        });
      default:
        return;      
    }
  }

}
