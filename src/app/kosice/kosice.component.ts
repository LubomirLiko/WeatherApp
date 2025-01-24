import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-kosice',
  standalone: true,
  imports: [],
  templateUrl: './kosice.component.html',
  styleUrl: './kosice.component.scss'
})
export class KosiceComponent {

  myWeather: any;
  temperature: number = 0;
  feels_like: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  summary: string = '';
  iconUrl: string = '';
  city: string = 'Košice';
  units: string = 'imperial';

  constructor(private weatherServise: WeatherService) {}

    ngOnInit(): void {
      this.weatherServise.getweather(this.city, this.units).subscribe({

        next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.feels_like = this.myWeather.main.feels_like;
        this.pressure = this.myWeather.main.pressure;
        this.humidity = this.myWeather.main.humidity;
        this.summary = this.myWeather.weather[0].main;

        this.iconUrl = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
        },

        error: (error) => console.log(error.message),
        complete: () => console.log('API call completed')
      })
    }
}
