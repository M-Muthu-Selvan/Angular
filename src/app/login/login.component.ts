import { Component, SimpleChanges,Input, EventEmitter, Output, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { practiceServices } from '../query';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

 @Input('name')name:any;
 @Output() sendValue = new EventEmitter<any>();


myFunction(val:any){
  return this.sendValue.emit(val);
}

 day:any = new Date();
 anyNumber:any = "234.445";
 Rupee:any = 345;
 myName:any = "mUtHU";
 obj:any = {name:"selvan", age: 22};
 arr:any = [3,5,2,4];
  clearDate:any = null;
  show:boolean = true;

  call(){
    this.show = !this.show;
  }

  toggleTick(f_name:any){
    f_name.isSelected = !f_name.isSelected;
  }

  toSample(){
    this.router.navigate(["sample"], {queryParams: {name: "Muthu", Age: 22}});
  }
   
 constructor(private router: Router, private getData:practiceServices){
 }

  objData:any = [];

  ngOnInit(){
    this.getData.callDataFromStorage().then((res:any)=>{
        this.objData = res;
      // console.log(this.objData);

    },(err)=> {
      // console.log("Error:",err);
    });
  }

//  storeEmployeeDetails:any = [];
//  jpData:any; 

  // this.employee.apiCallPromise().then(response =>{
    //   this.jpData = response;
    // }).catch(error =>{
    //   console.error('ApI Error:', error);
    // })

  // ngOnInit(){
  //   this.storeEmployeeDetails = this.employee.employeeFunction();
  // }

  loginEmail:any;
  loginPassword:any;
  inputBoxVal:any =[  {
    data :'1'
  },{
    data:'2'
  },{
    data:'3'
  }];
  value:any;
  inputName:any;
  //  countRepetition:any = [
  //    {
  //      mark:10
  //    },
  //    {
  //      mark:20
  //    },
  //    {
  //      mark:30
  //    }
  //  ];

  
  //  howManyTimes:any = [3, 2, 1];
  repeatedArray:any = [1,3,5,6,7,3,2,5,3,8,6,12,6,4,7,5,9,9,7,4];
  //myObject:any = {};
 
    reduce:any = this.repeatedArray.reduce(function(accumulator:any, curVal:any){
      if(curVal in accumulator){
        accumulator[curVal]++
      }
      else{
        accumulator[curVal] = 1
      }
      return accumulator
    },{})

// Repetition3(){
//      for(let i = 0; i < this.repeatedArray.length; i++){
//        let condition = this.repeatedArray[i]
//        if(condition in this.myObject){
//            this.myObject[condition]++
//        }
//        else{
//            this.myObject[condition] = 1;
//        }
//    }
//    console.log(this.myObject);
// }
  
  //  Repetition2(){
  //    for(let i = 0; i < this.countRepetition.length; i++){
  //      const obj = this.countRepetition[i];
  //      const repeatTimes2 = this.howManyTimes[i];
  //      for(let j = 0; j < repeatTimes2; j++){
  //        this.repeatedArray.push(obj.mark);
  //      }
  //    }
  //  }

    // Repetition(obj, index){
  //   const repeatTimes = this.howManyTimes[index];
  //   for(let i = 0; i < repeatTimes; i++){
  //     this.repeatedArray.push(obj);
  //   }
  //  }
  // this.countRepetition.forEach(Repetition);

  studentMark:any = [
  {
    name: "Muthu",
    total:300,
    rank: 4
  },
  {
    name: "Selvan",
    total: 250,
    rank: 5
  },
  {
    name: "Muthu Selvan",
    total: 350,
    rank: 3
  },
  {
    name: "Ramesh",
    total: 400,
    rank: 2
  },
  {
    name: "Suresh",
    total: 200,
    rank: 6
  },
  {
    name: "Ganesh",
    total: '150',
    rank: 7
  },
  {
    name: "Raja",
    total: 450,
    rank: 1
  }
].sort(function(a,b){
   return b.rank - a.rank;
  });
//  isTyping:boolean = false;
// onKeyDown(){
//   this.isTyping = true;
// }
// onKeyUp(){
//   this.isTyping = false;
// }
tableElement:boolean = true;
hideElement(){
  this.tableElement = false;
}
showElement(){
  this.tableElement = true;
}
onSubmit(data:NgForm){
  var emailValue = data.value.email;
  var passwordValue = data.value.Password;
  var pattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  if(!emailValue.match(pattern)){
    alert("Invalid email");
    return;
  }

   if(emailValue.trim() === '' || passwordValue.trim() === ''){
       alert("Please fill in the required fields");
       return;
    }
this.router.navigate(['/home'], {queryParams: {email: emailValue, password: passwordValue}});
}
}
