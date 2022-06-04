import { WeatherData } from './../models/weather.model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    try {
      return this.http.get<WeatherData>(environment.base_url, {
        headers: new HttpHeaders()
          .set(environment.host_name, environment.host_value)
          .set(environment.api_key_name, environment.api_key_value),
        params: new HttpParams()
          .set('q', cityName)
          // .set('lat', lat)
          // .set('long', long)
          .set('units', 'metric')
          .set('mode', 'json')
      })
    } catch (error) {


    }
    return null
  }
}
