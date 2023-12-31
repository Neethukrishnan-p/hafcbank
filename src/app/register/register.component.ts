import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  uname = ""
  acno = ""
  pswd = ""

  //registerForm
  registerForm = this.fb.group({
    uname: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    acno: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  register() {

    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd

    if (this.registerForm.valid) {
      // call register in DataService
      const result = this.ds.register(acno, pswd, uname)
      if (result) {
        alert("Registration successfull...")
        this.router.navigateByUrl("")
      }
      else {
        alert("Account already registered.. Please Log In")
      }
    }
    else {
      alert("Invalid!!!!")
    }
  }
}
