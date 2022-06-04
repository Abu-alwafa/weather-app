import { WeatherData } from './models/weather.model';
import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weatherData?: WeatherData
  cityName: string = 'istanbul'
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
    this.cityName = ''
  }
}
