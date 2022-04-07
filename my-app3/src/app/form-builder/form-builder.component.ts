import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

myForm: FormGroup;
cod: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm =fb.group({
      'cod':['',Validators.required]
    });

    this.cod = this.myForm.controls['cod'];
  }

  ngOnInit(): void {
  }


  onSubmit(value: string){

  }
}
