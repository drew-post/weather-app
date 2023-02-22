import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'weather-app';

  countries = [
    {
      name: "United Kingdom",
      cities: ["London", "Warwick", "Birmingham"]
    },
    {
      name: "United States",
      cities: ["New York", "Chicago", "Washington"]
    },
    {
      name: "Sweden",
      cities: ["Stockholm", "Malmo", "Gothenburg", "Uppsala"]
    },
    {
      name: "Australia",
      cities: ["Sydney", "Adelaide", "Melbourne"]
    }
  ];

  countryControl: FormControl = new FormControl;
  cityControl: FormControl = new FormControl;
  cities$!: Observable<string>;

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.cityControl = new FormControl("");
      this.cityControl.valueChanges
      .subscribe(value => {
        this.router.navigate([value])
      });

      this.countryControl = new FormControl("");
      this.cities$ = this.countryControl.valueChanges.pipe(
        map(country => country.cities)
      )

  }

  ngOnDestroy(): void {

  }
}
