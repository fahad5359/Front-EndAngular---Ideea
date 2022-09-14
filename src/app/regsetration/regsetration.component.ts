import {Component, OnInit} from '@angular/core';
import {Useer} from "../Entitys/useer";
import {ServceTowService} from "../servce-tow.service";

@Component({
  selector: 'app-regsetration',
  templateUrl: './regsetration.component.html',
  styleUrls: ['./regsetration.component.css']
})
export class RegsetrationComponent implements OnInit {

  usr: Useer = new Useer("", "", "", "", "");

  message: any

  constructor(private srvce: ServceTowService) {
  }

  ngOnInit(): void {
  }

  //Post

  public showSeccessMesge = false;

  // public riset=false;

  public addUser() {
    let respoonse = this.srvce.addUseeer(this.usr);
    respoonse.subscribe((date) => this.message = date);
    // console.log(this.message+respoonse);
    // console.log(this.respoonse);
    // console.log(this.message);
  }

  dataCheck() {
    if (this.showSeccessMesge == false)
      this.showSeccessMesge = true
    else {
      this.showSeccessMesge = false
    }


  }
}
