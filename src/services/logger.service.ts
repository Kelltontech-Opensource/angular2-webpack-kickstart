import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  private debug = true;
  private checkEnv(): boolean{
    return this.debug;
  }
  log(msg: any) {
    if(this.checkEnv()){
        console.log(msg);
    }
  }
  error(msg: any) {
    if(this.checkEnv()){
        console.error(msg);
    }
  }
  warn(msg: any)  {
    if(this.checkEnv()){
        console.warn(msg);
    }
  }
}
