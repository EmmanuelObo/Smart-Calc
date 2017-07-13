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

  addFive(value){

    if(value=='Emmanuel')
       return 'Hey Thats Me!'

     value = +value

     return value+5;
  }

  addition(value)
  {
    var values = value.split(" ");
    var total = 0

    for(var index = 0 ; index < values.length ; index++)
      {  
        if(values[index]=='+')
        {
          total += +values[index-1];
        }
        else if(values[index]=='-')
        {
          total -= +values[index-1];
        }
        else if(values[index]=='/')
        {
          total /= +values[index-1];
        }
        else if(values[index]=='*')
        {
          total *= +values[index-1];
        }
         
      }
    return total;
  }

  operator(sign){
    if(sign=='+' || 
      sign=='-' ||
      sign=='/' ||
      sign=='-')
    {
      return true;
    }
    else
      return false;
  }

}
