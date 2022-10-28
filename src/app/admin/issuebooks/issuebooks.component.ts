import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-issuebooks',
  templateUrl: './issuebooks.component.html',
  styleUrls: ['./issuebooks.component.css']
})
export class IssuebooksComponent implements OnInit {

  issueBooks: FormGroup = this.formBuilder.group({
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

    console.log(this.issueBooks.value)
    this.http
      .post('http://localhost:5678/admin/issuebooks', this.issueBooks.value)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

  }

}
