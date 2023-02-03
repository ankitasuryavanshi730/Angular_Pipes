import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  today = new Date();

  laptops = ["HP","Dell","lenovo","apple","samsung"];

  student = {rollno:1, name:"Ankita", surname:"suryavanshi"}
}
