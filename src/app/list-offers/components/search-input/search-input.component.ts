import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output()
  searchValue = new EventEmitter<string>();
  
  public isMobile = false;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = Boolean(this.deviceService.isMobile);
  }

  onSearch(value: string) {
    this.searchValue.emit(value);  
  }

}
