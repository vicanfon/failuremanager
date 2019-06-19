import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {User} from '../../models/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/dashboard']);
    }
  }

  onSignin(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;
    // this.dataService.getIntervention(11).subscribe((x)=> console.log('failure:'+ JSON.stringify(x)));
    this.authService.login(username, password);
  }

}
