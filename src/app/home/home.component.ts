import { Component,OnInit} from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private myService:ServiceService){}
  getDetails:any = [];
  ngOnInit() {
    this.getDetails = this.myService.employeeFunction();
  }

}
