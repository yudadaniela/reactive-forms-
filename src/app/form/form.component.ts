import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit{
  name:string=''
  email:string=''
  @ViewChild('myForm') myForm!:NgForm
  @ViewChild('myButton') button!:ElementRef
  ngAfterViewInit(): void {
    
  }
  submitForm(myForm:NgForm){
   console.log(this.myForm.valid);
   
   
    if(this.name!=='' && this.email!==''){
      console.log(this.myForm.valid,"verdadero");
      
     this.button.nativeElement.textContent='haz clic aqui'
    }else{
      console.log('enviar');
      this.button.nativeElement.textContent='Enviar'
    }
  }

}
