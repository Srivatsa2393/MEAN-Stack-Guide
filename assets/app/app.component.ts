import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
        new Message('Srivatsa is a Gunner', 'Srivatsa'),
        new Message('Srivatsa is a proud Gunner', 'Srivatsa'),
        new Message('I stay in Munich', 'Srivatsa')
    ];
}