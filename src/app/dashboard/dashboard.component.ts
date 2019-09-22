import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Observable} from 'rxjs/Observable'
import { Subject }    from 'rxjs/Subject';
import { Webcam } from '../webcam';
import { WebcamsService} from '../webcams.service'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { RFIDReader } from '../rfidreader';
import { RfidreaderService} from '../rfidreader.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes:Hero[];
  searchString: string;
  alphabet: string;
  letters: string[];
  webcams: Webcam[];
  readers: RFIDReader[];
  
  constructor(private heroService: HeroService,private WebcamsService: WebcamsService, private readerService: RfidreaderService) { 
    Observable.timer(1000,30000).subscribe(x => {this.getHeroes()});
  }

  ngOnInit() {
    this.getHeroes();
    this.alphabet = "# a b c d e f g h i j k l m n o p q r s t u w x y z";
    this.letters = this.alphabet.split(" ");
    this.searchString = "";
    this.getWebcams();
  }
  setfilter(letter: string){
    if (letter == "#") 
        this.searchString = "";
      else
        this.searchString = this.searchString.concat(letter.toUpperCase());
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.heroes.sort((leftSide,rightSide):number => {
        if (leftSide.name > rightSide.name) return 1;
        if (leftSide.name < rightSide.name) return -1;
        })
      }
      );
  }
  getWebcams(): void {
    this.WebcamsService.getWebcams()
      .subscribe(webcams => {
        this.webcams = webcams;
        this.webcams.sort();
      });
  }

  getAllRFIDReader(): void {
    this.readerService.getAllRFIDReader()
      .subscribe(readers => {
        this.readers = readers;
        this.readers.sort();
      }
      );
  }

}
