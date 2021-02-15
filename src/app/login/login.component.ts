import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  @ViewChild('para', { static: true }) data: ElementRef;
  data1: string;
  isdata: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ServiceDataService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userid: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    let loginObject = {
      userName: this.loginForm.value.userid,
      password: this.loginForm.value.password,
    };
    this.service.createNewUser().subscribe((Response) => {
      console.log(Response);
    });
  }
  ngAfterViewInit() {
    console.log(this.data.nativeElement);
    this.data.nativeElement.style.color = 'red';
  }
}
