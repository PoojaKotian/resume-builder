// imports required for the component
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// provides configuration metadata that determines how the component should be processed
@Component({
  selector: 'app-education-feild',
  templateUrl: './education-feild.component.html',
  styleUrls: ['./education-feild.component.css']
})

// exports are used to make the content of EducationFeild Component available to be used in other modules
export class EducationFeildComponent implements OnInit {

  eduFeildsForm: FormGroup;     // declaring a form


  constructor() { }

  ngOnInit() {
    this.eduFeildsForm = new FormGroup({            // creates a new FormGroup instance
      eduFeilds : new FormArray([])                 // creates a new FormArray to store the data of diffrent feilds of the form
    });
  }

  onAddSEduFeilds() {
    const control = new FormControl(null, Validators.required);
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    (<FormArray> this.eduFeildsForm.get('eduFeilds')).push(control);   // creates a new FormControl to set values and validation of a form

  }
}
