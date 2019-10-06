import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

import { Cookie } from 'ng2-cookies';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public baseurl = "http://localhost:3004"
  public socket;

  constructor(public http: HttpClient) {
    this.socket = io(this.baseurl)
  }

  //Authentication Section:

  public verifyUser = () =>{
    return Observable.create((observer)=>{
      this.socket.on("verify-user",(socketData)=>{
        observer.next(socketData)
      })
    })
  }

  public setUser = (token) => {
    this.socket.emit("set-user", token)
  }


  public onlineUserList = () => {

    return Observable.create((observer) => {

      this.socket.on("onlineUsersTodoList", (userList) => {

        observer.next(userList);

      }); // end Socket

    }); // end Observable

  } // end onlineUserList



  public getOnlineUsers = () =>{
    return Observable.create((observer) => {
      this.socket.on("onlineUsers",(socketData)=>{
        observer.next(socketData)
      })
    })
  }



  //list create socket service for multi user
  public createToDoMulti = (userName) => {
    this.socket.emit("createList",userName)
  }

  public listAddedResponse = ()=>{
    return Observable.create((observer)=>{
      this.socket.on("createList-res",(data)=>{
        observer.next(data);
      })
    })
  }

  //list delete response for multi user

  public deleteToDoMulti = (userName) =>{
    this.socket.emit("deleteList",userName)    
  }

  public listDeletedResponse = ()=>{
    return Observable.create((observer)=>{
      this.socket.on("deleteList-res",(data)=>{
        observer.next(data);
      })
    })
  }


  //list update(edit) respose for multi user

  public updateTodoMulti =(userName)=>{
    this.socket.emit("updateList",userName)
  }

  public listUpdatedResponse = () => {
    return Observable.create((observer)=>{
      this.socket.on("updateList-res",(data)=>{
        observer.next(data);
      })
    })
  }



  //Item create socket service for multi user
  public createItemMulti = (userName) => {
    this.socket.emit("createItem",userName)
  }

  public itemAddedResponse = ()=>{
    return Observable.create((observer)=>{
      this.socket.on("createItem-res",(data)=>{
        observer.next(data);
      })
    })
  }

  //Item delete socket service for multi user

  public deleteItemMulti = (userName) =>{
    this.socket.emit("deleteItem",userName)
  }

  public itemDeletedResponse = () =>{
    return Observable.create((observer)=>{
      this.socket.on("deleteItem-res",(data)=>{
        observer.next(data);
      })
    })
  }

  //Item update socket service for multi user

  public updateItemMulti = (userName) =>{
    this.socket.emit("updateItem",userName)
  }

  public itemUpdatedResponse = ()=>{
    return Observable.create((observer)=>{
      this.socket.on("updateItem-res",(data)=>{
        observer.next(data);
      })
    })
  }


  //Item marked done socket service for multi user

  public markDoneItem = (userName) => {
    this.socket.emit("markDoneItem", userName)
  }

  public itemMarkedDoneResponse = () =>{
    return Observable.create((observer)=>{
      this.socket.on("markDoneItem-res",(data)=>{
        observer.next(data);
      })
    })
  }

  //Item marked Open socket service for multi user

  public markOpenItem =(userName)=>{
    this.socket.emit("markOpenItem",userName)
  }


  public itemMarkedOpenResponse = () =>{
    return Observable.create((observer)=>{
      this.socket.on("markOpenItem-res",(data)=>{
        observer.next(data);
      })
    })
  }




  //undoItem socket service for multi user

  public undoItemMulti = (userName) =>{
    this.socket.emit("undoItem",userName)
  }

  public itemUndoResponse = () =>{
    return Observable.create((observer)=>{
      this.socket.on("undoItem-res",(data)=>{
        observer.next(data);
      })
    })
  }
  





  //Sub Item create socket service for multi user

  public createSubItemMulti =(userName)=>{
    this.socket.emit("createSubItem",(userName))
  }

  public subItemAddedResponse = ()=>{
    return Observable.create((observer)=>{
      this.socket.on("createSubItem-res",(data)=>{
        observer.next(data);
      })
    })
  } 

  //sub item delete socket service for multi user

  public deleteSubItemMulti =(userName)=>{
    this.socket.emit("deleteSubItem",(userName))
  }

  public subItemDeletedResponse = ()=>{
    return Observable.create((observer)=>{
      this.socket.on("deleteSubItem-res",(data)=>{
        observer.next(data);
      })
    })
  }

  //sub item update socket service for multi user

  public updateSubItemMulti = (userName) =>{
    this.socket.emit("updateSubItem",(userName))
  }

  public subItemUpdatedResponse = () =>{
    return Observable.create((observer)=>{
      this.socket.on("updateSubItem-res",(data)=>{
        observer.next(data);
      })
    })
  }

  //Item marked done socket service for multi user

  public markDoneSubItemMulti = (userName) => {
    this.socket.emit("markDoneSubItem", userName)
  }

  public subItemMarkedDoneResponse = () =>{
    return Observable.create((observer)=>{
      this.socket.on("markDoneSubItem-res",(data)=>{
        observer.next(data);
      })
    })
  }

  //Item marked Open socket service for multi user

  public markOpenSubItemMulti =(userName)=>{
    this.socket.emit("markOpenSubItem",userName)
  }


  public subItemMarkedOpenResponse = () =>{
    return Observable.create((observer)=>{
      this.socket.on("markOpenSubItem-res",(data)=>{
        observer.next(data);
      })
    })
  }


    //undoItem socket service for multi user

    public undoSubItemMulti = (userName) =>{
      this.socket.emit("undoSubItem",userName)
    }
  
    public subItemUndoResponse = () =>{
      return Observable.create((observer)=>{
        this.socket.on("undoSubItem-res",(data)=>{
          observer.next(data);
        })
      })
    }



    //clear undos socket service for multi user

    public clearUndos = (userName) =>{
      this.socket.emit("clearUndos",userName)
    }
  
    public clearUndosResponse = () =>{
      return Observable.create((observer)=>{
        this.socket.on("clearUndos-res",(data)=>{
          observer.next(data);
        })
      })
    }


  
  public exitSocket = () =>{

    this.socket.disconnect();

  }// end exit socket

  /**
   * functionalities for sending and recieving request
   */

   //Sending Request:

  public sendRequest=(data)=>{
    this.socket.emit("request",data);
  }

  public responseAlreadySent=()=>{
    return Observable.create((observer)=>{
      this.socket.on("reqAlreadySent",(data)=>{
        observer.next(data);
      })
    })
  }
  public responseAlreadyFriend=()=>{
    return Observable.create((observer)=>{
      this.socket.on("alreadyFriend",(data)=>{
        observer.next(data);
      })
    })
  }
  public savereq=()=>{
    return Observable.create((observer)=>{
      this.socket.on("savereq",(data)=>{
        observer.next(data);
      })
    })
  }

    //Rejecting Request:

  public rejectRequest=(data)=>{
    this.socket.emit("reject",data);
  }

  public rejectResponse=()=>{
    return Observable.create((observer)=>{
      this.socket.on("rejecting",(data)=>{
        observer.next(data);
      })
    })
  }

    //Accepting Request:

  public acceptRequest=(data)=>{
    this.socket.emit("accept",data);
  }


  public acceptResponse=()=>{
    return Observable.create((observer)=>{
      this.socket.on("accepting",(data)=>{
        observer.next(data)
      })
    })
  }
  

  //Removing Friend:
  public unfriend=(data)=>{
    this.socket.emit("unfriend",data);
  }

  public unfrndResponse=()=>{
    return Observable.create((observer)=>{
      this.socket.on("removed",(data)=>{
        observer.next(data);
      })
    })
  }

  public listenUpdate=(userId)=>{
    return Observable.create((observer)=>{
      this.socket.on(userId,(data)=>{
        observer.next(data);
      })
    })
  }


  public disconnect = () => {
    return Observable.create((observer) => {
      this.socket.on('disconnect', () => {
        observer.next();
      });//end On method
    });//end observable

  }//end disconnect


  public disconnectedSocket = () => {

    this.socket.emit("disconnect", "");//end Socket

  }//end disconnectedSocket




}
