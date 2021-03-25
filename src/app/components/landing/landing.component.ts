import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
   boxArray = new Array(3).fill(null).map(() => new Array(3).fill(null));
 
  
  turnNumber : number = 1;
  wontext : string = null;
  constructor() { }

  ngOnInit(): void {
  }

  turn(index1 : number, index2 : number,event  ){
    let box : number = this.getBoxNumber(index1,index2)
    if(this.turnNumber%2 !=0){
  // this.boxArray[index] = 'X';
  this.boxArray[index1][index2] = 'X'

    }
    else{
      this.boxArray[index1][index2] = 'O';
     
    }

    

    if(this.turnNumber > 5){
      this.checkIfWon()
    }
    
    this.turnNumber++;
  
  }

  checkIfWon(){
 
    let sign : string  =null;
if(this.boxArray[0][0] != null && (this.boxArray[0][0] == this.boxArray[1][1]) && (this.boxArray[1][1]  == this.boxArray[2][2]) ){
 
 sign =this.boxArray[0][0];
 
}
else if(this.boxArray[0][0] !=null && (this.boxArray[0][0] == this.boxArray[0][1]) && (this.boxArray[0][1]  == this.boxArray[0][2])){
 
  sign =this.boxArray[0][0];
 }
 else if(this.boxArray[0][0] !=null &&(this.boxArray[0][0] == this.boxArray[1][0]) && (this.boxArray[1][0]  == this.boxArray[2][0])){

  sign =this.boxArray[0][0];
 }
 else if(this.boxArray[1][0] !=null &&(this.boxArray[1][0] == this.boxArray[1][1]) && (this.boxArray[1][1]  == this.boxArray[1][2]) ){
 
  sign =this.boxArray[1][0];
 }
else if(this.boxArray[2][0] !=null &&(this.boxArray[2][0] == this.boxArray[2][1]) && (this.boxArray[2][1]  == this.boxArray[2][2])){
  
  sign =this.boxArray[2][0];
 }
 else if(this.boxArray[0][1] !=null &&(this.boxArray[0][1] == this.boxArray[1][1]) && (this.boxArray[1][1]  == this.boxArray[2][1])){

  sign =this.boxArray[0][1];
 }
 else if(this.boxArray[0][2] !=null &&(this.boxArray[0][2] == this.boxArray[1][1]) && (this.boxArray[1][1]  == this.boxArray[2][0])){
  
  sign =this.boxArray[0][2];
 }
 else if(this.boxArray[0][2] !=null &&(this.boxArray[0][2] == this.boxArray[1][2]) && (this.boxArray[1][2]  == this.boxArray[2][2])){
 
  sign =this.boxArray[0][2];
 }

 if(sign != null){
   if(sign == 'X'){
     this.wontext ='Player 1 Won';
   }
   else{
    this.wontext ='Player 2 Won';
   }
 }
  }

  getBoxNumber(index1: number , index2 : number){
  
    if(index1 == 0){
      index2 = index2+1
    }
    else if(index1 == 1){
      console.log(index2);
      index2 = index2+4;
    }
    else{
      index2 = index2 + 7;
    }

return index2; 
  }

}
