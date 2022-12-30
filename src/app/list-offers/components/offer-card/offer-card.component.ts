import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../models/offer'

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  @Input()
  public offer: Offer;
  public characterLimit = 28;
  public defaultImage: string;

  constructor() { }

  ngOnInit(): void {
    this.defaultImage = this.offer.thumb;
  }

  onImageError(event) {
    this.defaultImage = '../../../../assets/sem-imagem.jpg';
  }

}
