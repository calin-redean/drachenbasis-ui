import { Component, OnInit } from '@angular/core';
import { AG } from '../ag'
import { QrcodesService } from '../qrcodes.service';

@Component({
  selector: 'app-ag',
  templateUrl: './ag.component.html',
  styleUrls: ['./ag.component.css']
})
export class AgComponent implements OnInit {

  alphabet: string;
  letters: string[];
  ags: AG[];
  searchString: string;
  searchDay: string;
  searchStart: string;
  searchAGName: string;
  listOfStart: string[];
  listOfAGs: string[];

  constructor(private QrcodesService: QrcodesService) { 

  }

  ngOnInit() {
    this.alphabet = "# a b c d e f g h i j k l m n o p q r s t u w x y z";
    this.letters = this.alphabet.split(" ");
    this.QrcodesService.getDistinctStart().subscribe(listOfStart => this.listOfStart = listOfStart);
    this.listOfStart.sort();
    this.QrcodesService.getAGList().subscribe(listOfAGs => this.listOfAGs = listOfAGs);
    this.listOfAGs.sort();
    this.getAGs();
    this.searchString = "";
    this.searchDay = "";
    this.searchStart = "";
    this.searchAGName = "";
  }

  getAGs(): void {
    this.QrcodesService.getAllAgs().subscribe(ags => this.ags = ags);
  }

  setfilter(letter: string){
    if (letter == "#") {
      this.searchString = "";
      this.searchDay = "";
      this.searchStart = "";
      this.searchAGName= "";
    }
    else
      this.searchString = this.searchString.concat(letter);
  }

}
