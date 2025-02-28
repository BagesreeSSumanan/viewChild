import { Component, ViewChild ,ElementRef, ViewChildren, QueryList} from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  colorselected:string="";
  @ViewChild('inputcolor') selectedcolor!: ElementRef;
  @ViewChildren(MessageComponent) messageComponents!: QueryList<MessageComponent>; 
  changecolor() {
    this.colorselected = this.selectedcolor.nativeElement.value;
    console.log("Selected Color:", this.colorselected);
    this.messageComponents.forEach((child) => {
      child.currentColor = this.colorselected; 
      console.log(`Updated MessageComponent with color:`, child.currentColor);
    });
  }
}