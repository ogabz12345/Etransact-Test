import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CcDtoModel} from '../classes/cc-dto-model';

@Injectable({
  providedIn: 'root'
})
export class CcPaymentService {

  baseUrl = '';

  constructor(private http: HttpClient) {
  }

  postCard(model) {
    return this.http.post<CcDtoModel[]>(this.baseUrl + '/createpost',  model);
  }
}
