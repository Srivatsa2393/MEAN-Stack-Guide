import { Component } from '@angular/core';

import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
                [message]="message" 
                (editClicked)="message.content = $event"
                *ngFor = "let message of messages"
            ></app-message>
        </div>
    `
})

export class MessageListComponent{
    messages: Message[] = [
        new Message('Srivatsa is a Gunner', 'Srivatsa'),
        new Message('Srivatsa is a proud Gunner', 'Srivatsa'),
        new Message('I stay in Munich', 'Srivatsa')
    ];
}