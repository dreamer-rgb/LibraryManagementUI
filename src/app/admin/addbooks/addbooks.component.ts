import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  addBooks: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    author:['', [Validators.required]],
  });

  constructor(public formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit(): void {
    
  }
  submit() {

    console.log(this.addBooks.value)
    this.http
      .post('http://localhost:5678/admin/addbooks', this.addBooks.value)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
