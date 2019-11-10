import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-index',
  templateUrl: './detailed-index.component.html',
  styleUrls: ['./detailed-index.component.css']
})
export class DetailedIndexComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  onBack() {
    this.router.navigate(['/index']);
  }
}
