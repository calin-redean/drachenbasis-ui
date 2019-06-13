import { Component, OnInit, ViewContainerRef, ViewChild, NgModule, ComponentFactoryResolver } from '@angular/core';
import { QrcodesService } from '../qrcodes.service';
import { Drache } from '../drache';
import { DracheActivity } from '../dracheactivity';
import { Webcam } from '../webcam';
import { WebcamsService} from '../webcams.service'
import {Observable} from 'rxjs/Observable'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Infodialog} from '../infodialog/infodialog.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  drachen: Drache[];
  drachenactivity: DracheActivity[];
  searchString: string;
  searchClass: string;
  searchArrival: string;
  searchLeaving: string;
  searchPresence: string;
  alphabet: string;
  letters: string[];
  selectedRoom: Webcam;
  webcams: Webcam[];
  comment: string;
  listOfSchoolclass: string[];
  listOfArrival: string[];
  listOfLeaving: string[];


  constructor(private QrcodesService: QrcodesService, private WebcamsService: WebcamsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getDrachen();
    this.getDrachenActivity();
    this.alphabet = "# a b c d e f g h i j k l m n o p q r s t u w x y z";
    this.letters = this.alphabet.split(" ");
    this.searchString = "";
    this.searchClass = "";
    this.searchArrival = "";
    this.searchLeaving = "";
    this.searchPresence = "";
    this.comment = "";
    this.getWebcams();
    this.QrcodesService.getDistinctSchoolclass().subscribe(listOfSchoolclass => { 
      this.listOfSchoolclass = listOfSchoolclass;
      this.listOfSchoolclass.sort();
    } 
    );
    this.QrcodesService.getDistinctArrival().subscribe(listOfArrival => {
      this.listOfArrival = listOfArrival;
      this.listOfArrival.sort();
    });
    this.QrcodesService.getDistinctLeaving().subscribe(listOfLeaving => {
      this.listOfLeaving = listOfLeaving;
      this.listOfLeaving.sort();    
    });
    Observable.timer(1000,30000).subscribe(x => {
      this.getDrachenActivity();
      this.comment = "";
    });
 
  }

  showComment(name: string, comment: string){
    this.comment = name + " -> Bemerkung: " + comment;
  }

  excused(dactivity: DracheActivity){
    dactivity.status="EXCUSED";
    this.QrcodesService.excused(dactivity).subscribe(x => {this.getDrachenActivity()});
  }


  checkin(dactivity: DracheActivity){
    dactivity.status="IN";
    this.QrcodesService.checkin(dactivity).subscribe(x => {this.getDrachenActivity()});
  }

  checkout(dactivity: DracheActivity){
    dactivity.status="OUT";
    this.QrcodesService.checkout(dactivity).subscribe(x => {this.getDrachenActivity()});
  }

  setRoom(dactivity: DracheActivity, room: string){
    if ((dactivity.room != null) && (room != dactivity.room) ){
        dactivity.lastRoom = dactivity.room;
        dactivity.room = room.toString();
        this.QrcodesService.setroom(dactivity).subscribe(x => {this.getDrachenActivity()});
    } else
      this.getDrachenActivity();
  }

  getWebcams(): void {
    this.WebcamsService.getWebcams()
      .subscribe(webcams => {
        this.webcams = webcams;
        this.webcams.sort()
      });
  }  
  
  setfilter(letter: string){
    if (letter == "#") {
      this.searchString = "";
      this.searchArrival = "";
      this.searchLeaving = "";
      this.searchClass = "";
      this.searchPresence = "";
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
  
  openDialog(name: string, comment: string): void {
    const dialogRef = this.dialog.open(Infodialog, {
      width: '350px',
      data: {name, comment}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
