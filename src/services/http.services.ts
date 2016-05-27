import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService{

    constructor(private _http: Http){}

    private body;
    private headers;
    private options;

    public setMeta(data:any,headers: any){
          this.body = JSON.stringify(data);
          // this.headers = new Headers({ 'Content-Type': 'application/json' });
          // this.options = new RequestOptions({ headers: headers });
          return this;

    }

    public get(url: string): Observable<any>{
      return this._http.get(url)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    public post(url: string): Observable<any>{
      return this._http.post(url,this.body,this.options)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    private extractData(res: Response) {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
      }
      let body = res.json();
      return body.data || { };
    }


    private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
