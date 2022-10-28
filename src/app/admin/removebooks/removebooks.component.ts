import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-removebooks',
  templateUrl: './removebooks.component.html',
  styleUrls: ['./removebooks.component.css']
})
export class RemovebooksComponent implements OnInit {

  removeBooks: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author:['', [Validators.required]],
  });

  constructor(public formBuilder: FormBuilder,
              private http:HttpClient) { }

  ngOnInit(): void {
  }

  submit(){

    console.log(this.removeBooks.value)
    this.http
      .post('http://localhost:5678/admin/removebooks', this.removeBooks.value)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

  }

}
