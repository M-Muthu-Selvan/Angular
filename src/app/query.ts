 import {Injectable} from '@angular/core';
 import {HttpClient} from '@angular/common/http';
 import { Observable, asyncScheduler } from 'rxjs';
//  const jsonResponeData = require("../api/commonConfig.json");
 const jsonResponeData = require("../assets/get_data_json.json");

// // const API_URL = "https://reqres.in";
 @Injectable({
     providedIn: "root"
 })

 export class practiceServices{
     constructor(private http:HttpClient){}
     callDataFromStorage(){
        return new Promise((resolved,reject)=>{
            resolved(jsonResponeData);
        });
      } 
 }
        // apiCall(params:object){
        //     return new Promise((resolve, reject)=>{
        //     this.http.get("https://crm.adluge.com/adluge-interview/angular/login.php",params).subscribe((res:any)=>{
        //         resolve(res);
        //     },(err)=>{
        //         reject(err);
        //     });
        // })
        // }

// }
// import {Injectable, Input, Output, EventEmitter} from "@angular/core";
// import {HttpClient} from "@angular/common/http"



// @Injectable({
//     providedIn:"root"
// })


// export class querySerive{
//     @Input() employeeList:any;
//     @Output() receiveEmployee = new EventEmitter<any>();
//     const obj = {
//         employeeId: '1',
//         employeeName: 'Muthu',
//         employeeAge: '22'
//     }
//     constructor(private http: HttpClient){}
//     loginQuery(){
        
//     }
// }

// function request(){
//     return new Promise((resolved, reject)=>{
//       this.http.get("",{request.obj}).subscribe((res:any)=>{
//         resolved(res);
//       },(err)=>{
//         reject(err);
//       })
//     })
//   }

// this.query.request(obj).then((res)=>{
//     receiveEmployee.emit(true);
// },(err)=>{

// })
