import { HttpClient } from '@angular/common/http';

export class WebScraperService{
  constructor(private client : HttpClient){}

  getGooglePage()
  {
    this.client.get('www.google.com').subscribe(data => 
      {
        console.log(data)
      })
  }
}