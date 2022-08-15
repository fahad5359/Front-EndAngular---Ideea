import { Component, OnInit } from '@angular/core';
import {Useer} from "../useer";

@Component({
  selector: 'app-regsetration',
  templateUrl: './regsetration.component.html',
  styleUrls: ['./regsetration.component.css']
})
export class RegsetrationComponent implements OnInit {

  userr= new Useer("","","");
  constructor() { }

  ngOnInit(): void {
  }


}
