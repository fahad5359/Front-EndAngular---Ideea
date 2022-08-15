import {Component, OnInit} from '@angular/core';
import {Useer} from "../useer";
import {MyService} from "../MyService";

@Component({
  selector: 'app-regsetration',
  templateUrl: './regsetration.component.html',
  styleUrls: ['./regsetration.component.css']
})
export class RegsetrationComponent implements OnInit {

  useer: Useer= new Useer("", "", "");
  message: any

  constructor(private srvce: MyService) {
  }

  ngOnInit(): void {
  }

  //Post
  public AddUser() {
    let resoonse = this.srvce.addingUser(this.useer);
    resoonse.subscribe((date)=>this.message=date );
    console.log(resoonse);
  }
}
