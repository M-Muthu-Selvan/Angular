import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export type objTemplate = {
  id : number;
  Name : string,
  email : any,
  company : string
}

@Injectable({
  providedIn : "root"
})


export class ServiceService{

  constructor(private http:HttpClient){}

  getJsonPlaceHolder(){
    return new Promise((resolve, reject) =>{
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
        resolve(res);
      },(err:any) => {
        reject(err);
      })
    })
  }

  postJsonPlaceHolder(data:any){

    return this.http.post("https://jsonplaceholder.typicode.com/users", data);
  }

  putJsonPlaceHolder(id:any, data:any){
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);
  }

  deleteJsonPlaceHolder(id:any, data:any){
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`, data);
  }


  // callDataFromStorage(){
  //   return new Promise((resolve,reject)=>{
  //     this.http.get("C:\Users\muthu\Downloads\get_data_json.txt",{params:obj}).subscribe((res:any)=>{
  //       resolve(res);
  //     },(err)=>{
  //       reject(err);
  //     });
  //   });
  // }

  // this.query.params(obj).then((res:any)=>{

  // })

  // apiCallPromise(obj:any): Promise<any>{
  //   const params = new HttpParams({fromObject:obj});

  //   return new Promise((resolve,reject)=>{
  //     this.http.get("https://jsonplaceholder.typicode.com/users",{params:params}).subscribe((res:any)=>{
  //       resolve(res);
  //     },(err)=>{
  //       reject(err);
  //     });
  //   });
  // }

  employeeFunction(){
  const employeeDetails = [
    {
      e_id: 1,
      e_age: 22,
      e_name: "Raja",
      e_salary: 10000
    },
    {
      e_id: 2,
      e_age: 23,
      e_name: "Siva",
      e_salary: "11000"
    },
    {
      e_id: 3,
      e_age: 25,
      e_name: "Ramesh",
      e_salary: 25000
    },
    {
      e_id: 4,
      e_age: 30,
      e_name: "Selvan",
      e_salary: 20000
    }]
    return employeeDetails;
}
}
