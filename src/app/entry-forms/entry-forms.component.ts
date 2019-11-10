import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-forms',
  templateUrl: './entry-forms.component.html',
  styleUrls: ['./entry-forms.component.css']
})
export class EntryFormsComponent implements OnInit {
  public questionTab: boolean = true;
  public responseTab: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  questions() {
    this.questionTab = true;
    this.responseTab = false;
  }

  responses() {
    this.questionTab = false;
    this.responseTab = true;
  }

}
