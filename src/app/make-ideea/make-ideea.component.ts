import { Component, OnInit } from '@angular/core';
import { MyService } from '../MyService';
import {Useer} from "../Entitys/useer";


@Component({
  selector: 'app-make-ideea',
  templateUrl: './make-ideea.component.html',
  styleUrls: ['./make-ideea.component.css'],
})
export class MakeIdeeaComponent implements OnInit {
  usr: Useer = new Useer("", "", "","","");
  message: any;
  constructor(private servse: MyService) {}

  ngOnInit(): void {}

  // Adding Comint
  addComintBtn = false;
  addComintInput = true;

  // Array of objects ↓
  objArrau = [{ subject: '' }, { userNem: '' }, { idea: '' }];
  comnt = [{ commint: '' }];

  // Event ↓
  public postIdea(Sbjct: string, usrnem: string, Ida: string) {
    if (Sbjct && usrnem && Ida) {
      this.objArrau.push(
        { subject: Sbjct },
        { userNem: '@' + usrnem },
        { idea: Ida }
      );
      this.addComintBtn = true;
    }
  }

  //make when pressed enter, the input submits

  public CrateCommint(Cmnt: string) {
    if (Cmnt) {
      this.comnt.push({ commint: Cmnt });
    }
    this.addComintInput = true;
    console.log('commint Created');
  }

  public AddUser() {
    let resoonse = this.servse.addingUser(this.usr);
    resoonse.subscribe((date) => (this.message = date));
  }
}
