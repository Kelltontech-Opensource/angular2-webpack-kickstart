import {Component} from '@angular/core';

import { Logger} from '../../services/logger.service';


@Component({
  selector: 'alerts',
  template: `
  <button type="button" (click)="showIt()" class="close" aria-label="Close">
  <div class="row alerts-container" *ngIf="alerts.length && show">
    <div class="col-xs-12">
        <div class="alert alert-{{alert.type}}" *ngFor="let alert of alerts let i=index" role="alert">
            <button type="button" (click)="closeAlert(i)" class="close" aria-label="Close"><span
                    aria-hidden="true">&times;</span></button>
            {{alert.msg}}
        </div>
    </div>
</div>`
})
export class Alerts {
  constructor(private Logger: Logger){
    this.Logger.log('in alert comp');
    this.show = false;//_AlertService.showAlert();
  }

  show:boolean;


  alerts:any[] = [{
    type: 'success',
    msg: 'Thanks'
  }, {
    type: 'danger',
    msg: 'Danger'
  }];

  addAlert() {
    this.alerts.push({
      msg: 'Another alert!'
    });
  };

  showIt(){
    // this.JrnyLogger.log('in true');

    this.show = true;
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}
