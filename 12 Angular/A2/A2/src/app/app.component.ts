import { Component } from '@angular/core';
import { AllAds } from './all-ads';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A2 Assignment';

  
  public PAds:AllAds;
  childToParent(Ads){
    this.PAds = Ads;
    console.log("In Parentcomponent");
    
    console.log(this.PAds);
    
  }
}
