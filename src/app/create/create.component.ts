import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  form = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),

    Question1: new FormControl('', [Validators.required]),

    Question2: new FormControl('', [Validators.required]),
    Question2Option1: new FormControl('', [Validators.required]),
    Question2Option2: new FormControl('', [Validators.required]),
    Question2Option3: new FormControl('', [Validators.required]),
    Question2Option4: new FormControl('', [Validators.required]),

    Question3: new FormControl('', [Validators.required]),
    Question3Option1: new FormControl('', [Validators.required]),
    Question3Option2: new FormControl('', [Validators.required]),
    Question3Option3: new FormControl('', [Validators.required]),
    Question3Option4: new FormControl('', [Validators.required]),

    Question4: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  submit(){
    const dataFromForm = {
      "Title": this.form.controls['Title'].value,
      "Description": this.form.controls['Description'].value,

      "Question1": this.form.controls['Question1'].value,

      "Question2": this.form.controls['Question2'].value,
      "Question2Option1": this.form.controls['Question2Option1'].value,
      "Question2Option2": this.form.controls['Question2Option2'].value,
      "Question2Option3": this.form.controls['Question2Option3'].value,
      "Question2Option4": this.form.controls['Question2Option4'].value,

      "Question3": this.form.controls['Question3'].value,
      "Question3Option1": this.form.controls['Question3Option1'].value,
      "Question3Option2": this.form.controls['Question3Option2'].value,
      "Question3Option3": this.form.controls['Question3Option3'].value,
      "Question3Option4": this.form.controls['Question3Option4'].value,

      "Question4": this.form.controls['Question4'].value,

    }
    this.http.post('https://rwr-project.herokuapp.com/new/', dataFromForm ).subscribe();

    this.form.reset();
  }

}
