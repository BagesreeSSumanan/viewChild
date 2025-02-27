import { Component, ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  colorselected:string="";
  @ViewChild('inputcolor') selectedcolor!: ElementRef;
  changecolor(){
    this.colorselected = this.selectedcolor.nativeElement.value
  }
}
