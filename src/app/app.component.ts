import { WeatherData } from './models/weather.model';
import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weatherData?: WeatherData
  cityName: string = localStorage.getItem('city') || 'istanbul'

  server_base = environment.server_base
  server_base_raw = environment.server_base_raw
  constructor(private weather: WeatherService) { }
  ngOnInit(): void {

    this.weather.getWeatherData(this.cityName).subscribe({
      next: (res) => {
        this.weatherData = res
      }
    })
    this.cityName = ''
  }
  private getWeather(cityName: string) {
    this.weather.getWeatherData(cityName).subscribe({
      next: (res) => {
        this.weatherData = res
      }
    })
  }
  handleSubmit() {
    this.getWeather(this.cityName)
    localStorage.setItem('city', this.cityName)
    this.cityName = ''
  }
}
