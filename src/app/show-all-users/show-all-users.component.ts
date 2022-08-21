import { Component, OnInit } from '@angular/core';
import {Useer} from "../useer";
import {MyService} from "../MyService";

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  user:any
  constructor(private service:MyService) { }

  ngOnInit() {
     let resp= this.service.getAllUsers(this.user);
     resp.subscribe((data)=>this.user=data);
    }




}
