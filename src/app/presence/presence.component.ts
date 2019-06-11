import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { QrcodesService } from '../qrcodes.service';
import { Drache} from '../drache';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})

export class PresenceComponent implements OnInit {

  fileToUpload: File = null;
  uploadStatus: String = null;
  drachen: Drache[];

  @ViewChild('fileInput') fileInput: ElementRef;
  //@ViewChild("heroImage") image: ElementRef;

  constructor(private QrcodesService: QrcodesService) {
  }

  ngOnInit() {
    this.getDrachen();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadStatus = null;
  }

  initialise(day: String): void{
    this.QrcodesService.initialise(day).subscribe(data => {
      this.uploadStatus = day + " erfolgreich initialisiert"
      this.getDrachen();
      }, error => {
        this.uploadStatus = "Fehler: " + day + " NICHT erfolgreich initialisiert"
        console.log(error);
      });
  }

  getDrachen(): void {
    this.QrcodesService.getAllDrachen()
    .subscribe(drachen => this.drachen = drachen);
  }
  
  uploadFileToActivity() {
    this.QrcodesService.postFile(this.fileToUpload).subscribe(data => {
      this.uploadStatus = "Datei erfolgreich hochgeladen"
      this.getDrachen();
      // do something, if upload success
      }, error => {
        this.uploadStatus = "Fehler: Datei NICHT erfolgreich hochgeladen"
        console.log(error);
      });
  }
  downloadFile() {
    this.QrcodesService.getQRCodes();
  }
}