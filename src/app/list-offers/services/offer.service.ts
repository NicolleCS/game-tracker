import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  apiUrl: string = 'https://www.cheapshark.com/api/1.0/deals';
  offerList: Offer[] = [];
  params:any = {'pageSize': '12', 'storeID': '1', 'onSale': '1', 'AAA': '1'};

  constructor(private httpClient: HttpClient) {}

  public async getOffers(page: number)  {
    this.offerList = await this.loadOffers(page);

    this.calculateDiscountValue();
    this.formatTitles();
    this.formatThumb();
    
    return this.offerList;
  }

  async loadOffers(page:number):Promise<Offer[]> {
    this.params.pageNumber = page;
    let offers: Offer[];

    try {
      offers = await this.httpClient.get<Offer[]>(
        this.apiUrl,
        { 
          headers: this.headers,
          params: this.params 
        }
      ).toPromise();

    } catch (error) {
      console.error(error);
    }
    return offers;
  }

  calculateDiscountValue() {
    if (this.offerList) {
      this.offerList.map(offer => {
        const salePrice = Number(offer.salePrice?.replace(',','.'));
        const normalPrice = Number(offer.normalPrice?.replace(',','.'));
        const discount = Math.round(((salePrice*100)/normalPrice)-100);
        offer.discount = `${discount}`;
      });
    }
  }

  formatTitles() {
    if (this.offerList) {
      this.offerList.map(offer => {
        offer.title = offer.title.toLowerCase();
      })
    }
  }

  formatThumb() {
    if (this.offerList) {
      this.offerList.map(offer => {
        if (offer.steamAppID) {
          offer.thumb = `https://cdn.akamai.steamstatic.com/steam/apps/${offer.steamAppID}/header.jpg`;
        }
      })
    }
  }
}
