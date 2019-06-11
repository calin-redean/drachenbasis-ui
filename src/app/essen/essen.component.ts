import { Component, OnInit } from '@angular/core';
import { QrcodesService } from '../qrcodes.service';
import { Drache } from '../drache';
import { DracheActivity } from '../dracheactivity';
import { Webcam } from '../webcam';
import { WebcamsService} from '../webcams.service'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-essen',
  templateUrl: './essen.component.html',
  styleUrls: ['./essen.component.css']
})
export class EssenComponent implements OnInit {
  drachen: Drache[];
  drachenactivity: DracheActivity[];
  searchString: String;
  searchEssen: String;
  alphabet: String;
  letters: String[];
  selectedRoom: Webcam;
  webcams: Webcam[];


  constructor(private QrcodesService: QrcodesService, private WebcamsService: WebcamsService) { }

  ngOnInit() {
    this.getDrachen();
    this.getDrachenActivity();
    this.alphabet = "# a b c d e f g h i j k l m n o p q r s t u w x y z";
    this.letters = this.alphabet.split(" ");
    this.searchString = "";
    this.searchEssen = "";
    this.getWebcams();
    Observable.timer(1000,30000).subscribe(x => {this.getDrachenActivity()});
  }

  setEssen(dactivity: DracheActivity){
      this.QrcodesService.setEssen(dactivity).subscribe(x => {this.getDrachenActivity()});
  }

  getWebcams(): void {
    this.WebcamsService.getWebcams()
      .subscribe(webcams => this.webcams = webcams.sort());
  }  
  
  setfilter(letter: string){
    if (letter == "#") { 
      this.searchString = "";
      this.searchEssen = "";
    }
    else
      this.searchString = this.searchString.concat(letter);
  }

  getDrachen(): void {
    this.QrcodesService.getAllDrachen()
    .subscribe(drachen => this.drachen = drachen);
  }
  getDrachenActivity(): void {
    this.QrcodesService.getAllDrachenActivity()
    .subscribe(drachenactivity => this.drachenactivity = drachenactivity);
  }

}
