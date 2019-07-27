import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Contest } from 'src/app/Models/contest';
import { ContestService } from 'src/app/services/contest.service';

@Component({
  selector: 'app-create-contest',
  templateUrl: './create-contest.component.html',
  styleUrls: ['./create-contest.component.sass']
})
export class CreateContestComponent implements OnInit {

  id: FormControl;
  label: FormControl;
  
  contestForm: FormGroup;
  contest: Contest;

  constructor(private router: Router, private contestService: ContestService, private builder: FormBuilder) { }


  ngOnInit() {
// this.id = new FormControl('', Validators.required);
  this.label = new FormControl('', Validators.required);
  
  this.contestForm = this.builder.group({
    // id: this.id,
    label: this.label
  });
   
}

onSubmit() {
  // console.log("id : " + this.id.value);
  console.log("label : " + this.label.value);

  let contest = new Contest(null, this.label.value);

    console.log(contest)

  this.contestService.createContest(contest)
    .subscribe(
    data => this.contest = data)

}

}


