import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AllAds } from '../all-ads';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { };
  @Output() childToParent = new EventEmitter<AllAds>();
  AdsModel = new AllAds("myTitle","myName","","");
  ngOnInit(): void {
  }
  public categories=['Furniture', 'Hardware','Mobile'];

  public items= new Set<AllAds>();
  onSubmit(){
    console.log(this.AdsModel);
    this.childToParent.emit(this.AdsModel)
    //this.items.add(this.AdsModel);
    //this.items.forEach(i=>console.log(i));
    //this._interactionService.sendAds(this.items)
  }
}
