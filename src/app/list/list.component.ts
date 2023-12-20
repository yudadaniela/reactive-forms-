import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewInit{
 
  items: any = [
    {
      id:1,
      name: 'elemento1',
    },
    {
      id:2,
      name: 'elemento2',
    },
    {
      id:3,
      name: 'elemento3',
    },
  ];
  @ViewChild('listItems') listItems!:ElementRef;
  
  constructor(private elementRef:ElementRef){}
  ngAfterViewInit():void{

  }
  highLightItem(index:number){
    console.log(index);
    
   const listItem= this.listItems.nativeElement.children[index] as HTMLElement | null
   if(listItem){
    listItem.style.backgroundColor="yellow"
   }
  }
}
