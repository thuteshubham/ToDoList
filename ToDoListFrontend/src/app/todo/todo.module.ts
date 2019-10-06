import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//for toast message
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListMultiComponent } from './todo-list-multi/todo-list-multi.component';
import { FriendsComponent } from './friends/friends.component';

//for enabling gaurd to routes
import { RouteGuardService } from '../route-guard.service';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([ 
      { path: 'todo-list', component: TodoListComponent , canActivate:[RouteGuardService]},
      { path: 'todo-list-multi', component: TodoListMultiComponent, canActivate:[RouteGuardService]}, 
      { path: 'friends', component:FriendsComponent }        
    ])
  ],
  declarations: [TodoListComponent, TodoListMultiComponent, FriendsComponent]
})
export class TodoModule { }
