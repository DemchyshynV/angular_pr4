import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserSubjectService} from "../../services";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: IUser;

  constructor(private subjectService:UserSubjectService) {
  }

  ngOnInit(): void {
  }

  login():void{
    this.subjectService.username.next(this.user.username)
  }
}
