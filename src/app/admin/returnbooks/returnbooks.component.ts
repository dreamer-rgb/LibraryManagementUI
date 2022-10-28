import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-returnbooks',
  templateUrl: './returnbooks.component.html',
  styleUrls: ['./returnbooks.component.css']
})
export class ReturnbooksComponent implements OnInit {

  returnBooks: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    user_Name:['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    contact_Number:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    book_Name: ['', [Validators.required, Validators.minLength(4)]],
    author:['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(public formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(){

    console.log(this.returnBooks.value)
    this.http
      .post('http://localhost:5678/admin/returnbooks', this.returnBooks.value)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

  }

}
