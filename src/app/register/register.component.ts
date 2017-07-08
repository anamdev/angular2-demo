import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: User = new User();

  private sharedService: SharedService;

  constructor(sharedService: SharedService) { 
    this.sharedService = sharedService;
  }

  doLogin(){

  }
  
  ngOnInit() {
  }

}
