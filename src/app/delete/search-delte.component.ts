import { Component, OnInit } from '@angular/core';
import {MyService} from "../MyService";
import {Useer} from "../useer";

@Component({
  selector: 'app-search-delte',
  templateUrl: './search-delte.component.html',
  styleUrls: ['./search-delte.component.css']
})
export class SearchDelteComponent implements OnInit {
user=new Useer("","","")
  constructor(private service:MyService) { }

  ngOnInit(): void {
  }
delteUser(){
  this.service.deleteUser(this.user)
}
}
