import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(private router:Router){}
  idValue:any;
  emailValue:any;

  onSave(){
    if(this.idValue && this.emailValue){
      this.router.navigateByUrl("sample");
    }
  }
  onCancel(){
    this.router.navigateByUrl("sample");
  }
  onDelete(){
    this.router.navigateByUrl("sample");
  }
}
