import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  data = new FormControl('');

  dataStore:any = "";
  firstNum:any = "";
  secondNum:any = "";
  sign:any = "";
  // block:boolean = false;

  clear() {
    this.dataStore = "";
    this.data.setValue("");
    this.firstNum = "";
    this.secondNum = "";
    this.sign = "";
    // this.block = false;
  }

  one() {
    this.dataStore = this.dataStore + "1";
    this.data.setValue(this.dataStore);
  }

  two() {
    this.dataStore = this.dataStore + "2";
    this.data.setValue(this.dataStore);
  }

  three() {
    this.dataStore = this.dataStore + "3";
    this.data.setValue(this.dataStore);
  }

  four() {
    this.dataStore = this.dataStore + "4";
    this.data.setValue(this.dataStore);
  }

  five() {
    this.dataStore = this.dataStore + "5";
    this.data.setValue(this.dataStore);
  }

  six() {
    this.dataStore = this.dataStore + "6";
    this.data.setValue(this.dataStore);
  }

  seven() {
    this.dataStore = this.dataStore + "7";
    this.data.setValue(this.dataStore);
  }

  eight() {
    this.dataStore = this.dataStore + "8";
    this.data.setValue(this.dataStore);
  }

  nine() {
    this.dataStore = this.dataStore + "9";
    this.data.setValue(this.dataStore);
  }

  zero() {
    this.dataStore = this.dataStore + "0";
    this.data.setValue(this.dataStore);
  }

  add() {
    this.firstNum = this.dataStore;
    this.dataStore= "";
    this.data.setValue("");
    this.sign = "+";
  }

  sub() {
    this.firstNum = this.dataStore;
    this.dataStore= "";
    this.data.setValue("");
    this.sign = "-";
  }

  div() {
    this.firstNum = this.dataStore;
    this.dataStore= "";
    this.data.setValue("");
    this.sign = "/";
  }

  mul() {
    this.firstNum = this.dataStore;
    this.dataStore= "";
    this.data.setValue("");
    this.sign = "*";
  }

  equal() {
    this.secondNum = this.dataStore;
    this.dataStore= "";
    this.data.setValue("");

    // if(this.sign !== "" && this.firstNum !== "" && this.secondNum !== "") {
    //   this.block = true;
    // }


    switch(this.sign)  {
      case "+" :
        this.data.setValue(parseInt(this.firstNum) + parseInt(this.secondNum));
        break;

      case "-" :
        this.data.setValue(parseInt(this.firstNum) - parseInt(this.secondNum));
        break;

      case "/" :
        this.data.setValue(parseInt(this.firstNum) / parseInt(this.secondNum));
        break;

      case "*" :
        this.data.setValue(parseInt(this.firstNum) * parseInt(this.secondNum));
        break;
    }

  }


  constructor() { }

  ngOnInit() {
  }

}
