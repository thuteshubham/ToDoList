import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//routing 
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';

//for Http service
import { HttpClientModule } from '@angular/common/http';

//for toast message
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortCountriesPipe } from './sort-countries.pipe';

//import statement to use font awesome library
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//for loading spinner

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';


@NgModule({
  declarations: [
    AppComponent,
    SortCountriesPipe,
    PageNotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    HttpClientModule,
    AngularFontAwesomeModule,
    UserModule,
    TodoModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path:'page-not-found', component: PageNotFoundComponent},
      { path:'server-error', component:ServerErrorComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ])
  ],
  providers: [SortCountriesPipe, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
