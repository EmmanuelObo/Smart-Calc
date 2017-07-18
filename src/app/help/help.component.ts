import {Component} from '@angular/core';


@Component({
    selector: 'help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})

export class HelpComponent{
    title = 'Help Page';
    pageDescription = 'This is page is for the purposes of guiding you through your problems using this app and to keep you well informed.';
}