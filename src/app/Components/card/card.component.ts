import { Albums } from './../../Class/albums';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/services/apiCall.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  albums: Albums[];
  constructor(private apiCallService: ApiCallService) {

  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.apiCallService.getAllAlbums().subscribe (
      (response: Albums[]) => {
        this.albums = response;
      }
    );
  }
}
