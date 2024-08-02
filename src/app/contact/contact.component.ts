import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  userName!:string;
  userNameLength!:number;
  sendDataName(x:string)
  {
    this.userNameLength = x.length;
    return this.userNameLength;
  }
  userAge!:string;
  userAgeLength!:number;
  sendDataAge(x:string)
  {
    this.userAgeLength = x.length;
    return this.userAgeLength;
  }
  userEmail!:string;
  userEmailLength!:number;
  sendDataEmail(x:string)
  {
    this.userEmailLength = x.length;
    return this.userEmailLength;
  }
  userPassword!:string;
  userPasswordLength!:number;
  sendDataPassword(x:string)
  {
    this.userPasswordLength = x.length;
    return this.userPasswordLength;
  }
}
