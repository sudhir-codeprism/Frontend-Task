import { Component, OnInit } from '@angular/core';
import { CollegeService } from 'src/app/Service/college.service';

@Component({
  selector: 'app-college-review',
  templateUrl: './college-review.component.html',
  styleUrls: ['./college-review.component.css']
})
export class CollegeReviewComponent implements OnInit {
  public res : any;

  constructor(private collegeService: CollegeService) { }

  ngOnInit(): void {
    this.collegeService.getData()
.subscribe(data => {
  console.log(data);
  this.res= data;
});
  }

}


