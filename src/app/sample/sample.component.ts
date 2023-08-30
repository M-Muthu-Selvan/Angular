import { Component, ChangeDetectorRef } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { OnInit } from '@angular/core';
import { fromEvent, debounceTime, sample } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  constructor(private idCheck:ServiceService, private http: HttpClient, private cdRef:ChangeDetectorRef){
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(debounceTime(1000));
    result.subscribe(x => console.log(x));
  
  }

  dataArray:any = [];
  sampleForm:any = [
    {
    componentName: '',
    unitId : '',
    strength: ''
  }
]

  ngOnInit() {
    this.idCheck.getJsonPlaceHolder().then((res:any) => {
      this.dataArray.push(res);
    },(err:any) => {
      console.log("Error:", err);
    })
  }

  onSubmit(data: any){
    const finalData ={
      name: data.name,
      email: data.email,
      address: {city:data.city},
      company: {name:data.company}
    }
    this.idCheck.postJsonPlaceHolder(finalData).subscribe((res:any) => {
      this.dataArray[0].push(res);
      console.log(res);
    });
  }

  onClick(update:any){
    const updatedData ={
      name: update.upname,
      email: update.upemail,
      address: {city: update.upcity},
      company: {name: update.upcompany}
    }
    let updatedId = update.upid;
     this.idCheck.putJsonPlaceHolder(updatedId, updatedData).subscribe((res:any) => {
      const dataArrayIndex = this.dataArray[0].findIndex((item:any) => {
        return item.id === updatedId;
      })
        if(dataArrayIndex !== -1){
          this.dataArray[0][dataArrayIndex] = res;
          this.cdRef.detectChanges();
        }
     }, (err:any) => {
      console.log("Error Updating Data:", err);
     })

}

addNewFieldGroup() {
  this.sampleForm.push({ componentName: '', unitId: '', strength: '' });
  console.log(this.sampleForm);
}

allFieldsFilled() {
  return this.sampleForm.every((fieldGroup:any) =>
    fieldGroup.componentName && fieldGroup.unitId && fieldGroup.strength
  );
}

}
