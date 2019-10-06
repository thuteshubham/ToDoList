import { Injectable } from '@angular/core';


//for using cookies
import { Cookie } from 'ng2-cookies/ng2-cookies';

//Importing the required files for http services.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url =  'http://localhost:3004';

  private baseURL = `${this.url}/api/v1`;
  public listId: String;
  public deleteItem: String;
  public deleteSubItem: String;


  constructor(
    public http: HttpClient
  ) { }//end of constructor

  
  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) =>{

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

  public signinFunction(data): Observable<any> {
    
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);
      
    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of signinFunction function.



  //Method to get country list
  public getCountryList=()=>{
    let response=this.http.get('../assets/countries.json');
    return response;
  }//end

  //method to get country code
  public getCountryCode=()=>{
    let response=this.http.get('../assets/country-code-list.json');
    return response;
  }//end


  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobileNumber)
      .set('email', data.email)
      .set('password', data.password)
      .set('country',data.country)

    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  } // end of signupFunction function.

  
  

  public sendResetLink(email): Observable<any> {
      // console.log(this.url+"/api/v1/users/forgotPassword");
        const params = new HttpParams()
        .set('email', email)
        return this.http.post(`${this.url}/api/v1/users/forgotPassword`,params);
  } // end of sendResetLink function.
 


    //Get All Users:
  public getAllpeople = (token) => {
    return this.http.get(`${this.baseURL}/users/view/allUsers?authToken=${token}`)
  }


  /*
    To-Do List related services 
  */

     //Creating a new Todo List:
  public createTodo = (data,token) => {
    const params = new HttpParams()
      .set("listName", data.listName)
      .set("userId", data.userId)
      .set("creator",data.creator)
      .set("private",data.private)
    return this.http.post(`${this.baseURL}/lists/createList?authToken=${token}`, params)
  }

  //Getting All Todo List:
  public getAlltodo = (token) => {
    return this.http.get(`${this.baseURL}/lists/allLists?authToken=${token}`);
  }

  //Removing  todo List:
  public removetodolist = (listId,token) => {

    return this.http.post(`${this.baseURL}/lists/${listId}/delete?authToken=${token}`,listId);
  }

  //Editing  todo List:
  public edittodolist = (data,token) => {
    const params = new HttpParams()
    .set('listName', data.listName);
    return this.http.put(`${this.baseURL}/lists/${data.listId}/edit?authToken=${token}`,params);

  }



  /*
    Items related services 
  */



  //Get Tasks
  public getItems = (token) => {
    return this.http.get(`${this.baseURL}/items/allItems?authToken=${token}`);
  }

  //Create A New Item:
  public createNewItem = (data, token) => {
    const params = new HttpParams()
      .set("listId", data.listId)
      .set("itemName", data.itemName)
    return this.http.post(`${this.baseURL}/items/createItem?authToken=${token}`, params);
  }

  
  //Delete A Item:
  public deleteSingleItem = (id, token) => {
    this.deleteItem = id;
    return this.http.post(`${this.baseURL}/items/${this.deleteItem}/delete?authToken=${token}`,id);
  }


    //Edit a Item
  public editItem = (data, token) => {
    const params = new HttpParams()
    .set('itemName', data.itemName);
    return this.http.put(`${this.baseURL}/items/${data.itemId}/edit?authToken=${token}`,params);

  }


  //Edit a Item
  public markDoneOrOpenItem = (data, token) => {
    const params = new HttpParams()
    .set('isDone', data.isDone);
    return this.http.put(`${this.baseURL}/items/${data.itemId}/markItemDone?authToken=${token}`,params);

  }
  

  //Undo a Item
  public undoItem = (id, token): Observable<any>=> {
  
    return this.http.get(`${this.baseURL}/itemsHistory/${id}/getLastItem?authToken=${token}`);

  }

  //Delete A Item:
  public deleteItemFromHistory = (item, token) => {
    return this.http.post(`${this.baseURL}/itemsHistory/${item.itemId}/deleteFromHistory?authToken=${token}`,item);
  }
  
  
  //save deleted Item to history

  public saveDeleteHistoryItem = (data, token) => {
    const params = new HttpParams()
      .set("listId", data.listId)
      .set("itemId", data.itemId)
      .set("itemName", data.itemName)
      .set("isDone", data.isDone)
      .set("operationName", "Delete")
    return this.http.post(`${this.baseURL}/itemsHistory/saveHistoryItem?authToken=${token}`, params);
  }

  //save updated Item to history
  public saveUpdateHistoryItem = (data, token) => {
    const params = new HttpParams()
      .set("listId", data.listId)
      .set("itemId", data.itemId)
      .set("itemName", data.itemName)
      .set("isDone", data.isDone)
      .set("operationName", "Update")
    return this.http.post(`${this.baseURL}/itemsHistory/saveHistoryItem?authToken=${token}`, params);
  }

  //save updated Item to history
  public saveCreateHistoryItem = (data, token) => {
    const params = new HttpParams()
      .set("listId", data.listId)
      .set("itemId", data.itemId)
      .set("itemName", data.itemName)
      .set("isDone", data.isDone)
      .set("operationName", "Create")
    return this.http.post(`${this.baseURL}/itemsHistory/saveHistoryItem?authToken=${token}`, params);
  }

  


  /*
    Sub-Items related services 
  */



  //Get Tasks
  public getSubItems = (token) => {
    return this.http.get(`${this.baseURL}/subItems/allSubItems?authToken=${token}`);
  }
  
  //Create A New Item:
  public createNewSubItem = (data,token) => {
    const params = new HttpParams()
      .set("itemId", data.itemId)
      .set("subItemName", data.subItemName)
    return this.http.post(`${this.baseURL}/subItems/createSubItems?authToken=${token}`, params);
  }


  //Delete A Sub-Item:
  public deleteSingleSubItem = (id, token) => {
    this.deleteSubItem = id;
    return this.http.post(`${this.baseURL}/subItems/${this.deleteSubItem}/delete?authToken=${token}`,id);
  }

  //Edit a Sub-Item
  public editSubItem = (data, token) => {
    const params = new HttpParams()
    .set('subItemName', data.subItemName);
    return this.http.put(`${this.baseURL}/subItems/${data.subItemId}/edit?authToken=${token}`,params);

  }



  //Edit a Sub-Item
  public markSubDoneOrOpenItem = (data,token) => {
    const params = new HttpParams()
    .set('isDone', data.isDone);
    return this.http.put(`${this.baseURL}/subItems/${data.subItemId}/markSubItemDone?authToken=${token}`,params);

  }



  //Undo for Sub-Item


    //Undo a Item
    public undoSubItem = (id, token): Observable<any>=> {
  
      return this.http.get(`${this.baseURL}/subItemsHistory/${id}/getLastSubItem?authToken=${token}`);
  
    }
  
    //Delete A Item:
    public deleteSubItemFromHistory = (subItem, token) => {
      return this.http.post(`${this.baseURL}/subItemsHistory/${subItem.subItemId}/deleteSubItemFromHistory?authToken=${token}`,subItem);
    }
    
    
    //save deleted Sub-Item to history
  
    public saveDeleteHistorySubItem = (data, token) => {
      const params = new HttpParams()
        .set("itemId", data.itemId)
        .set("subItemId", data.subItemId)
        .set("subItemName", data.subItemName)
        .set("isDone", data.isDone)
        .set("operationName", "Delete")
      return this.http.post(`${this.baseURL}/subItemsHistory/saveHistorySubItem?authToken=${token}`, params);
    }

      //save updated Sub-Item to history
    public saveUpdateHistorySubItem = (data, token) => {
      const params = new HttpParams()
        .set("itemId", data.itemId)
        .set("subItemId", data.subItemId)
        .set("subItemName", data.subItemName)
        .set("isDone", data.isDone)
        .set("operationName", "Update")
    return this.http.post(`${this.baseURL}/subItemsHistory/saveHistorySubItem?authToken=${token}`, params);
  }


  //save create Sub-Item to history
  public saveCreateHistorySubItem = (data, token) => {
    const params = new HttpParams()
      .set("itemId", data.itemId)
      .set("subItemId", data.subItemId)
      .set("subItemName", data.subItemName)
      .set("isDone", data.isDone)
      .set("operationName", "Create")
    return this.http.post(`${this.baseURL}/subItemsHistory/saveHistorySubItem?authToken=${token}`, params);
  }



  public clearItemUndos=(token)=>{
    return this.http.get(`${this.baseURL}/itemsHistory/clearItemUndoHistory?authToken=${token}`);
  }

  public clearSubItemUndos=(token)=>{
    return this.http.get(`${this.baseURL}/subItemsHistory/clearSubItemUndoHistory?authToken=${token}`);    
  }



  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.baseURL}/users/logout`, params);

  } // end logout function




}
