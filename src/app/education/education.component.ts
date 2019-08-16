// imports required for the component
import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import {  NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// provides configuration metadata that determines how the component should be processed
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})

// exports are used to make the content of Education Component available to be used in other modules
export class EducationComponent implements OnInit  {
  // tslint:disable-next-line: no-trailing-whitespace
  
  @ViewChild('f', { static: false} ) eduDetailsForm: NgForm;  // ViewChild decorator is used to gain access to a child component

   educationForm: FormGroup;     // declaring a form

  ngOnInit() {    // called after the constructor and called  after the first ngOnChanges()
     this.initForm();
  }

  constructor(private router: Router) { }

  onNext() {      // method used to navigate to next page
    this.router.navigateByUrl('/experience');
  }

  onPrev() {      // method used to navigate to previous page
    this.router.navigateByUrl('/personal');
  }

  onSubmit() {   // method used to submit the contents of the form
      console.log(this.eduDetailsForm);
  }

   private initForm() {   // method used to declare varibles for feild validations
      const eduName = '';
      const eduPercentage = '';
      const eduFromyear = '';
      const eduToyear = '';

      this.educationForm = new FormGroup({
      schoolName: new FormControl(eduName, Validators.required),
      percentage : new FormControl(eduPercentage, Validators.required),
      fromYear : new FormControl(eduFromyear, Validators.required),
      toYear : new FormControl(eduToyear, Validators.required),

    });

  }
}
