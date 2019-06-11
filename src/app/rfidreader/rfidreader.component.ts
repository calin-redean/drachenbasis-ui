import { Component, OnInit } from '@angular/core';
import { RFIDReader } from '../rfidreader';
import { RfidreaderService} from '../rfidreader.service'

@Component({
  selector: 'app-rfidreader',
  templateUrl: './rfidreader.component.html',
  styleUrls: ['./rfidreader.component.css']
})
export class RfidreaderComponent implements OnInit {
  readers: RFIDReader[];
  reader: RFIDReader;

  room: String;
  hostname: String;
  checklist: String;

  selectedReader: RFIDReader;

  constructor(private readerService: RfidreaderService) { }

  ngOnInit() {
    this.getAllRFIDReader();
  }

  getAllRFIDReader(): void {
    this.readerService.getAllRFIDReader()
      .subscribe(readers => this.readers = readers.sort());
  }

  addRFIDReader(): void{
    this.reader = new RFIDReader();
    this.reader.room = this.room.toString();
    this.reader.hostname = this.hostname.toString();
    if (this.checklist != null) {
      this.reader.checklist = this.checklist.toString();
    }
    this.readerService.addRFIDReader(this.reader).subscribe(x => {this.getAllRFIDReader()});
    this.room=null;
    this.hostname=null;
    this.checklist=null;
  }

  delete(reader: RFIDReader){
    this.readers = this.readers.filter(r => r !== reader);
    this.readerService.deleteRFIDReader(reader).subscribe();
  }
}
