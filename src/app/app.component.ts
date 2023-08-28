import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
import { Observable, combineLatest,concat, forkJoin,merge,race } from 'rxjs';
import { subscribe } from 'diagnostics_channel';
import { from, interval,of } from 'rxjs';
import {take, map} from "rxjs/operators"
// import { practiceServices } from './query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // urlName:any = "https://reqres.in/";
  title = 'learner';
  constructor(){
    const practice = new Observable(callback1 => {
      console.log("Muthu");
      callback1.next("Selvan");
      callback1.next("Muthu Selvan");
      callback1.next("1");
      callback1.next("2");
      callback1.next("3");
      callback1.error("error Occured");
      callback1.complete();
      setTimeout(() => callback1.next("10"),1000);
      callback1.next("21");
      callback1.next("22");
      callback1.next("23");
    });

    console.log("My name is");

    practice.subscribe(sub => {
      console.log(sub);
    },err => {
      console.log(err);
    })
    console.log("Hi");

    const val = interval(1000).pipe(take(5));
    const val2 = interval(3000).pipe(take(5));

    const combined = race(val, val2);

    combined.subscribe(x => {
      console.log(x);
    }, err => {
      console.log(err);
    })
  }

  users:any;

  // callDataFromStorage(){
  //   return new Promise((resolved,reject)=>{
      // this.http.get("C:/Users/muthu/Downloads/get_data_json.json").subscribe((res)=>{
        
        // resolved(jsonResponeData);
      // },(err)=>{
      //   reject(err);
      // });
  //   });
  // }  


  // ngOnInit(){                           //ngOnInit
  //   this.testInjectable.get("/users").subscribe(res=>{
  //     this.users = res;
  //     console.log(this.users);
  //   });
  // }

  // ngOnInit(){
  //   console.log("parent component initialized")
  // }
   items:any = [];
   addItems(receive:any){
      this.items.push(receive);
   }
  //  ngOnDestroy(){
  //   console.log("parent component distroyed");
  //  }

  //   ngOnInit() {
//     this.apiCall('api/user/2')
//       .then((res) => {
//         this.users = res;
//         console.log('data response:', this.users);
//       })
//       .catch((err) => {
//         console.error('Error fetching data:', err);
//       });
//   }

//   apiCall(url:any){
//     return new Promise((resolved,reject)=>{
//         this.http.get(this.urlName + url).subscribe((res)=>{
//             resolved(res);
//         },(err)=>{
//             reject(err);
//         });
//     });
// }


}

