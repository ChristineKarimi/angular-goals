import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Goal(2,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Goal(3,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Goal(4,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Goal(5,'Watch finding Nemo','Find an online version and watch merlin find his son'),
]

completeGoal(isComplete: boolean, index: number){
  if(isComplete){
    this.goals.splice(index);

  }

}

toggleDetails(index: number){
  this.goals[index].showDescription = !this.goals[index].showDescription
}

  constructor() { }

  ngOnInit(): void {
  }

}
