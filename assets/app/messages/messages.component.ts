import { Component } from '@angular/core';

@Component({
    selector: 'app-messages',
    template: `
    <div class="row">
        <app-message-input></app-message-input>
    </div>
    <hr>
    <div class="row">
        <!--  <input type="text" [(ngModel)]="message.content"> -->
        <app-message-list></app-message-list>
    </div>
    `
})

export class MessagesComponent{

}