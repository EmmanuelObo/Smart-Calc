import { Component, OnInit } from '@angular/core';
import { TitheCalcService } from './service/tithecalc.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TitheCalcService]
})
export class AppComponent{
  constructor(private tithe: TitheCalcService, private http: Http){}

  title = 'Smart Calc v1';
  imgPath = './assets/SmartCalcLogo.svg';
  myTithe;
  httpData;

  getTithe(input:any)
  {
    this.myTithe = this.tithe.calculate(input);
  }

  getHTTP()
  {
    this.http.get('http://127.0.0.1:8000/api/v1/list').subscribe(data => 
    {
      console.log(data);
      this.httpData = data;
    })  
  }

  calculation(input:any)
  {
    var inputs = input.split(" ");
    var total = +inputs[0]

    for(var index = 1 ; index < inputs.length ; index++)
      {  
        if(inputs[index]=='+')
        {
          total += +inputs[index+1];
        }
        else if(inputs[index]=='-')
        {
          total -= +inputs[index+1];
        }
        else if(inputs[index]=='/')
        {
          total /= +inputs[index+1];
        }
        else if(inputs[index]=='*')
        {
          total *= +inputs[index+1];
        }
      }
    return (isNaN(total) ? 'Calculating...' : '=  ' + total);
  }

  readable(input:any)
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