import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


  export class HeaderComponent implements OnInit {
    currentDate: string | null = null;
    constructor(private datePipe: DatePipe) {}
  
    ngOnInit() {
      const date = new Date();
      this.currentDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss', 'GMT-6', 'es-MX');
    }
}
