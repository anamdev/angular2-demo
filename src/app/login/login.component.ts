import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: User = new User();

  private sharedService: SharedService;

  constructor(sharedService: SharedService) { 
    this.sharedService = sharedService;
  }

  doLogin(){

  }
  
  ngOnInit() {
  }

}
