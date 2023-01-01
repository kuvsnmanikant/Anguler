import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // throw new Error('test error handler');
  }
  selecteddate!: Date | null;
  currentnam = {"name":"mani","age":34,"sallary":56788,"ihi":["hbjj","hvhfgcf"]};

  sendrequest(){
    this.router.navigate(['/firstcomponent'], { state: { currentname: this.currentnam } });
  }
}
