import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  standalone: false,
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() currentcolor: string = ''; 
}
