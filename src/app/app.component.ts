import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart Calc v1';
  imgPath = './assets/SmartCalcLogo.svg';


  calculation(value)
  {
    var values = value.split(" ");
    var total = +values[0]

    for(var index = 1 ; index < values.length ; index++)
      {  
        if(values[index]=='+')
        {
          total += +values[index+1];
        }
        else if(values[index]=='-')
        {
          total -= +values[index+1];
        }
        else if(values[index]=='/')
        {
          total /= +values[index+1];
        }
        else if(values[index]=='*')
        {
          total *= +values[index+1];
        }
      }
    return (isNaN(total) ? 'Calculating...' : '=  ' + total);
  }

  readable(input)
  {
    var inputList = input.split(" ");
    var commentary = '( ';
    commentary += inputList[1] + ' ' + inputList[0];

    for(var index = 0 ; index < inputList.length ; index++)
    {
      commentary += inputList[index] + ' ' + inputList[index-1];
    }
    commentary += ' )'

    return commentary;
  }

}
