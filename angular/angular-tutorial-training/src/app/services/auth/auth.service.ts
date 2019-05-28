import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpService } from '../api/http.service';
import { ServerResponseCodes } from '../../models/constants';

@Injectable()
export class AuthService {
    constructor(private http: HttpService<any>) {
    }
   
    public login(email: string, password: string): Observable<any> {
        return this.http.post('/auth/login', { email: email, password: password })
            .map((result: any) => {
                if (result.status === ServerResponseCodes.SUCCESS) {
                    if (result.data) {
                        return result.data;
                    } 
                    return null;
                }
                return null;
            }).catch(err => Observable.throw(err));
    }

    public logout(): void {
    }
}

