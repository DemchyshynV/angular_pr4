import {Component} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled4';
  user: IUser;

  getUser(user: IUser) {
    this.user = user
  }
}
