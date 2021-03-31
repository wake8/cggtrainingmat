import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AllAds } from './all-ads';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _adFormItemSource = new Subject<Set<AllAds>>();
  adItem$ = this._adFormItemSource.asObservable();
  constructor() { }

  sendAds(aditems:Set<AllAds>){
    this._adFormItemSource.next(aditems);
  }

}
