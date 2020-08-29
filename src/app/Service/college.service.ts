import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollegeService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('././assets/colleges.json');
  }

}