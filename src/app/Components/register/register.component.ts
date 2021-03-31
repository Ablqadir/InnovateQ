import { Country } from './../../Class/country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountriesService } from 'src/services/countries.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerf: FormGroup;
  genders = ['male', 'female'];
  countries: Country[] = [];

  constructor(private countriesService: CountriesService, private formBuilder: FormBuilder)
  {
  }

  // tslint:disable-next-line: typedef
  ngOnInit()
  {
    this.countries = this.countriesService.getCountries();

    this.registerf = this.formBuilder.group({
      personName: this.formBuilder.group({
        firstName: null,
        lastName: null,
      }),
      email: null,
      mobile: null,
      dateOfBirth: null,
      gender: null,
      countryID: null,
      receiveNewsLetters: null,
      skills: this.formBuilder.array([])
    });

    // tslint:disable-next-line: deprecation
    this.registerf.valueChanges.subscribe((value) =>
    {
      // //console.log(value);
    });
  }

  // tslint:disable-next-line: typedef
  onSubmitClick()
  {

    // //reset
    this.registerf.reset();

    // //reset with Parameters
    this.registerf.reset({
      firstName: 'Adam',
      lastName: 'Smith',
      email: 'smith@gmail.com'
    });
  }
}
