import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//import 'rxjs/Rx';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpService } from '../services/http.service';
import { User } from '../models/user.model';
import { ServerResponseCodes } from '../models/constants';
 
@Injectable()
export class AuthService {
    constructor(private http: HttpService<any>) {
    }
   
    public login(email: string, password: string): Observable<any> {
        return this.http.post('/auth/login', { email: email, password: password }).pipe(
            map((result: any) => {
                if (result.status === ServerResponseCodes.SUCCESS) {
                    if (result.data) {
                        return result.data;
                    } 
                    return null;
                }
                return null;
            }), catchError (err => {
                return throwError('Something went Wrong!')
            })
        )
        
            
    }

    public signup(user: User): Observable<any> {
        return this.http.post('/auth/signup', user).pipe(
            map((result: any) => {
                if (result.status === ServerResponseCodes.SUCCESS) {
                    if (result.data) {
                        return result.data;
                    } 
                    return null;
                }
                return null;
            }), catchError(err => {
                return throwError('Something went wrong!')
            })
        )
            
    }

    public logout(): void {
    }
}