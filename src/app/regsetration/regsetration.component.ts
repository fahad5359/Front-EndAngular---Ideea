import {Component, OnInit} from '@angular/core';
import {Useer} from "../Entitys/useer";
import {MyService} from "../MyService";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-regsetration',
  templateUrl: './regsetration.component.html',
  styleUrls: ['./regsetration.component.css']
})
export class RegsetrationComponent implements OnInit {

  useer: Useer = new Useer("", "", "", "");

  message: any
  val=false;

  constructor(private srvce: MyService) {
  }

  ngOnInit(): void {
  }

  //Post

  public AddUser() {
    let resoonse = this.srvce.addingUser(this.useer);
    resoonse.subscribe((date) => this.message = date);
    console.log(this.message);
  }

  // valedation make button despear till all inputs are filled with text.
  public makeButtonAppear(){
    if (this.useer.userNem===" "){
      console.log("aisunhusiahushyaddsauhyiuhioasuhashudsduhiiuhadsd")
    }
  }


//
}
