import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  isDeleted: boolean = false;
  address: FormArray;
  constructor(private fb: FormBuilder, private service: ServiceDataService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: this.fb.array([this.createData()]),
    });
  }

  createData() {
    return this.fb.group({
      city: ['', Validators.required],
      pincode: ['', Validators.required],
    });
  }
  addNewAddressGroup() {
    this.address = this.registerForm.get('address') as FormArray;
    this.address.push(this.createData());
    if (this.address.value.length > 0) {
      this.isDeleted = true;
    } else {
      this.isDeleted = false;
    }
  }
  deleteAddressGroup(index: number) {
    const add = this.registerForm.get('address') as FormArray;
    add.removeAt(index);
  }
  onSubmit() {
    const registerObj = {
      username: this.registerForm.value,
      password: this.registerForm.value,
    };
    // this.service.createNewUser(registerObj).subscribe((resp) => {
    //   console.log(resp);
    // });
  }
}
