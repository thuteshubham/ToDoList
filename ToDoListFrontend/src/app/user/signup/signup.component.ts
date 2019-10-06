import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

import { SortCountriesPipe } from '../../sort-countries.pipe';


//import for toastr
import { ToastrService } from 'ngx-toastr';


 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public mobileNumber: number;
  public email: any;
  public password: any;
  public countryName: any ="";
  public countryList:any;
  public finalCountryList:any=[];
  public codeList:any=[];
  public code:any;

  constructor(  
    public appService: AppService,
    public router: Router,
    private toastr: ToastrService,
    public sortCountries : SortCountriesPipe
  ){

  } 

  ngOnInit() {
    this.appService.getCountryList().subscribe(
      Response=>{
         this.countryList=Response;
         for (var prop in this.countryList) {
          this.finalCountryList.push({
            'key': prop,
            'value': this.countryList[prop]
        });

         }
        this.finalCountryList=this.sortCountries.transform(this.finalCountryList);
       
      }
    )
  }

  public goToSignIn: any = () => {

    this.router.navigate(['/']);

  } // end goToSignIn

  
  public signupFunction: any = () => {

    if (!this.firstName) {
      this.toastr.warning('enter first name')
  
    } else if (!this.lastName) {
      this.toastr.warning('enter last name')

    }else if (!this.email) {
      this.toastr.warning('enter email')

    } else if (!this.password) {
      this.toastr.warning('enter password')
     
    }else if (!this.password) {
      this.toastr.warning('Select country')
     
    }else {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        mobileNumber: `+${this.code}-${this.mobileNumber}`,
        country: this.countryName
      }

  
      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {
            
            this.toastr.success('Account Created');
            
            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          }
          else if(apiResponse.status==404){
            setTimeout(() => {
            
              this.router.navigate(['/page-not-found']);
  
            },1000);
           
          }
          else if(apiResponse.status==500){
            setTimeout(()=>{
            
              this.router.navigate(['/server-error']);
            },1000)
            
          }
          else {

            this.toastr.error(apiResponse.message,'error occured');

          }

        });

    } // end condition

  } // end signupFunction


  public onChange=()=>{
   
    this.appService.getCountryCode().subscribe(
      Response=>{
        this.codeList=Response;
       
        this.code=this.codeList[this.countryName];
  
      }
    )
   }//end

}
