import { Component, OnInit } from '@angular/core';
import { QrcodesService } from '../qrcodes.service';
import { AG } from '../ag';

@Component({
  selector: 'app-agadmin',
  templateUrl: './agadmin.component.html',
  styleUrls: ['./agadmin.component.css']
})
export class AgadminComponent implements OnInit {

  fileToUpload: File = null;
  uploadStatus: String = null;
  ags: AG[];


  constructor(private QrcodesService: QrcodesService) { }

  ngOnInit() {
    this.getAGs();
  }

  getAGs(): void {
    this.QrcodesService.getAllAgs().subscribe(ags => this.ags = ags);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadStatus = null;
  }

  uploadFileToAG() {
    this.QrcodesService.postAGFile(this.fileToUpload).subscribe(data => {
      this.uploadStatus = "Datei erfolgreich hochgeladen"
      this.getAGs();
      // do something, if upload success
      }, error => {
        this.uploadStatus = "Fehler: Datei NICHT erfolgreich hochgeladen"
        console.log(error);
      });
  }

}
