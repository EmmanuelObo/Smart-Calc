import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart Calc v1';
  four:number = 4;
  three:number = 3;
  result:number = this.three + this.four;

  talk(){
    let words:string = "Hello World";
    return words;
  }

  test(){
    console.log('TESTING EVENT BINDING')
  }

  hello:string = this.talk();

}
