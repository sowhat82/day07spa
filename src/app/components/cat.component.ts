import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['/'])
  }

}
