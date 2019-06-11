import { Component, OnInit, Input } from '@angular/core';
import { Webcam } from '../webcam';
import { WebcamsService} from '../webcams.service'

@Component({
  selector: 'app-webcams',
  templateUrl: './webcams.component.html',
  styleUrls: ['./webcams.component.css']
})

export class WebcamsComponent implements OnInit {
  webcams: Webcam[];
  webcam: Webcam;

  off: boolean;
  ip: String;
  room: String;
  username: String;
  password: String;

  selectedWebcam: Webcam;

  constructor(private WebcamsService: WebcamsService) { }

  ngOnInit() {
    this.off = false;
    this.getWebcams();
  }

  getWebcams(): void {
    this.WebcamsService.getWebcams()
      .subscribe(webcams => this.webcams = webcams.sort());
  }

  addWebcam(): void{
    this.webcam = new Webcam();
    this.webcam.off = this.off;
    this.webcam.room = this.room.toString();

    if (this.off == false) {
      this.webcam.ip = this.ip.toString();
      this.webcam.username = this.username.toString();
      this.webcam.pass = this.password.toString();
    }

    //this.WebcamsService.addWebcam(this.webcam).subscribe(webcam => {this.webcams.push(webcam);
    this.WebcamsService.addWebcam(this.webcam).subscribe(x => {this.getWebcams()});
    this.off = false;
    this.ip=null;
    this.room=null;
    this.username=null;
    this.password=null;
  }

  delete(webcam: Webcam){
    this.webcams = this.webcams.filter(w => w !== webcam);
    this.WebcamsService.deleteWebcam(webcam).subscribe();
  }
}
