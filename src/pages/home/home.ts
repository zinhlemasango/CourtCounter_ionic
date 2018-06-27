import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  value = 0;
  value2 = 0;
 text = "";
  

  constructor(public navCtrl: NavController) {

  }

click3(){
this.value +=3;
}
click2(){
  this.value +=2;
}

click1(){
  this.value +=1
  
}

click4(){
  this.value2 +=3;
  }
  click5(){
    this.value2 +=2;
  }
  
  click6(){
    this.value2 +=1
    
  }

  clickReset(){
    this.value = 0;
    this.value2 = 0;

  }


  
  }
  
  





