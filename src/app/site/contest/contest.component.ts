import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Contest } from 'src/app/Models/contest';
import { ContestService } from 'src/app/services/contest.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.sass']
})
export class ContestComponent implements OnInit {
  
  contest: Contest[];
  selectedContest: Contest;
  
  
 
  constructor(private router: Router, private contestService: ContestService) { }
  

  ngOnInit() {

    this.contest
    this.contestService.getAllContest()
      .subscribe(
        data => this.contest = data)

      
  }

   selectContest(contest: Contest) {
    this.selectedContest = contest;
    let link = ['/contest', contest.id];
    this.router.navigate(link);
  }

  deleteContestById(id: number){
    this.contestService.deleteContestById(id).subscribe(
      value => {this.contestService.getAllContest().subscribe(
        contestNew=> this.contest = contestNew);
      })
    }

    getContestById(id: number){
      this.contestService.getContestById(id).subscribe(
        data => this.selectedContest = data)
    }

  }
