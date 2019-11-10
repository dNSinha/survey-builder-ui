import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import * as $ from 'jquery';
import 'rxjs/add/operator/debounceTime';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class QuestionsComponent implements OnInit {
  customerForm: FormGroup;
  public showTextBox = true;
  public showOptions = false;
  public showFileUpload = false;

  get addresses(): FormArray {
    return <FormArray>this.customerForm.get('addresses');
  }

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.customerForm = this.fb.group({
      titleSection: this.fb.group({
        form_title: '',
        form_desc: ''
      }),
      addresses: this.fb.array([this.buildAddress()]),
    });
  }

  clone() {
    $("document").ready(function () {
      $(".fa-clone").click(function () {
        $(".questions_type").clone().appendTo(".content");
      });
    });
  }

  remove() {
    $("document").ready(function () {
      $(".fa-trash").click(function () {
        $(".questions_type").remove();
      });
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.customerForm.patchValue({
          file: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      street1: '',
      state: '',
      passage: '',
      options1: '',
      options2: '',
      options3: '',
      options4: '',
      fileUp: ''
    });
  }
  setChoice(value, i) {
    // console.log(value, +i);
    if (value === 'SA' || value === 'PG') {
      this.showTextBox = true;
      this.showOptions = false;
      this.showFileUpload = false;
    } else if (value === 'MC' || value === 'CB' || value === 'DD') {
      this.showTextBox = false;
      this.showOptions = true;
      this.showFileUpload = false;
    } else if (value === 'FA') {
      this.showTextBox = false;
      this.showOptions = false;
      this.showFileUpload = true;
    }
  }

  save(): void {
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}


