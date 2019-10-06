import { Component, OnInit, OnDestroy  } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies';
import { AppService } from './../../app.service';
import { SocketService } from './../../socket.service'

import { Router } from '@angular/router';



@Component({
  selector: 'app-todo-list-multi',
  templateUrl: './todo-list-multi.component.html',
  styleUrls: ['./todo-list-multi.component.css'],
  providers: [SocketService]
})
export class TodoListMultiComponent implements OnInit, OnDestroy {

  public users: any;
  public users1: any;
  public requests: any = []
  public listName1: String
  public isPrivate: Boolean = false
  public response: any = []
  public listName: String
  public listId: String
  public itemName: String
  public itemData: any = []
  public itemId: String
  public subItemName: String
  public response1: any = []
  public subItemId: String
  public subItemName1: any;

  //Cookie
  public token: String;
  public userId: String;
  public userName: String;

  //for undos
  public item: any
  public undoObj: any;
  public itemSave: any
  public subItem: any
  public subItemSave: any


  constructor(public socketService: SocketService, public appService: AppService, public toastr: ToastrService, public router: Router) { }

  ngOnInit() {

    this.token = Cookie.get('authtoken')
    this.userId = Cookie.get("receiverId");
    this.userName = Cookie.get("receiverName");

    this.verifyUserConfirmation();
    //this.onlineUsers();
    this.getOnlineUserList();

    this.getAllUsers();

    this.getAlltodoList();
    this.getAllItems();
    this.getAllSubItems();

    this.newListAddedResponse();
    this.listDeletedResponse();
    this.listUpdatedResponse();

    this.newItemAddedResponse();
    this.itemDeletedResponse();
    this.itemUpdatedResponse();
    this.itemMarkedDoneResponse();
    this.itemMarkedOpenResponse();

    this.itemUndoResponse();

    this.newSubItemAddedResponse();
    this.subItemDeletedResponse();
    this.subItemUpdatedResponse();
    this.subItemMarkedDoneResponse();
    this.subItemMarkedOpenResponse();

    this.subItemUndoResponse()

    this.clearUndosResponse()

    this.alreadySentResponse();
    this.alreadyFriendResponse();
    this.saveRequest();
    // this.listenRequest();

    this.rejectResponse();
    // this.listenReject();
    this.acceptResponse();
    // this.listenAccept()
    this.unfriendResponse();
    // this.listenUnfriend();
    this.listenUpdate()

  }

  ngOnDestroy() {
    this.socketService.exitSocket()
  }
  

  public gotologin = () => {
    this.router.navigate(['/login'])
  }


  //for getting all users
  public getAllUsers = () => {
    this.appService.getAllpeople(this.token).subscribe((apiResponse: any) => {
      this.users1 = apiResponse.data;
      //  this.requests = apiResponse.data.requests;
      console.log(this.users1);


    })
  }


  //user confirmation

  public verifyUserConfirmation = () => {
    this.socketService.verifyUser().subscribe((response) => {
      this.socketService.setUser(this.token);
      console.log("User is verified")
    })
  }
  /*
    public onlineUsers = () => {
      this.users=[]
      this.socketService.getOnlineUsers().subscribe((response)=>{
        
        this.users = response
        console.log(this.users);
      })
    }
  */


  public getOnlineUserList: any = () => {

    this.socketService.onlineUserList()
      .subscribe((userListfromdb) => {

        this.users = [];

        console.log(userListfromdb);
        for (let x in userListfromdb) {

          let temp = { 'userId': x, 'fullName': userListfromdb[x] };

          this.users.push(temp);
          console.log(this.users);
        }

      });//end subscribe

  }//end getOnlineUserList





  //Selecting A List:

  public selectlist = (listId, listName) => {
    Cookie.set("listId", listId);
    Cookie.set("listName", listName);
    this.listName = Cookie.get("listName");
    this.listId = Cookie.get("listId");
    this.toastr.info(this.listName + " Selected");
  }

  //for getting all list
  public getAlltodoList = () => {
    this.response = []
    this.appService.getAlltodo(this.token).subscribe((apiResponse: any) => {
      //  console.log(apiResponse)
      for (let index in apiResponse.data) {
        this.response.push(apiResponse.data[index])
      }
      console.log(this.response);
    }, (err) => {
      console.log("Error Occured")
    })

  }

  //Getting All Items:

  public getAllItems = () => {

    this.appService.getItems(this.token).subscribe((apiResponse: any) => {

      this.itemData = apiResponse.data
      console.log(this.itemData);
    }, (err) => {
      console.log(err);
    })
  }


  //getting all subItems
  public getAllSubItems = () => {

    this.response1 = []
    this.appService.getSubItems(this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse)
      this.response1 = apiResponse.data

      console.log(this.response1);
    }, (err) => {
      console.log("Error Occured")
    })
  }




  /**
   *  List functions for Multi-User 
   */


  //for adding and sharing to-do-list with all users

  public newTodoListMulti = () => {

    if (this.listName1 == undefined || this.listName1 == "") {
      return this.toastr.warning("List Name is required")
    } else {
      let values = {
        listName: this.listName1,
        userId: this.userId,
        creator: this.userName,
        private: false
      }

      console.log(values);

      this.appService.createTodo(values,this.token).subscribe((apiResponse: any) => {
        if (apiResponse.status == 200) {
          this.listName1 = ""
          this.response = [];
          //added for socket response
          this.socketService.createToDoMulti(this.userName);
          //this.getAlltodoList()
        }
      }, (error) => {
        console.log("Error Occured")
      })


    }

  }

  public newListAddedResponse = () => {
    this.socketService.listAddedResponse().subscribe((response) => {
      this.getAlltodoList();
      this.toastr.success(response);
    })
  }



  //Deleting a todolist for all users :

  public deletetodoListMulti = (id) => {
    this.appService.removetodolist(id, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      Cookie.delete('listId');
      Cookie.delete('listName');
      this.listName = "";
      this.response = [];

      this.socketService.deleteToDoMulti(this.userName);

      // this.getAlltodoList();

    }, (err) => {
      this.toastr.error("Unable to Delete list")
    })

  }


  public listDeletedResponse = () => {
    this.socketService.listDeletedResponse().subscribe((response) => {
      this.getAlltodoList();
      this.toastr.warning(response);
    })
  }


  //Update a todolist for all users:
  public setListName = (listId, listName) => {

    this.listId = listId
    this.listName = listName

  }

  public updatetodoListMulti = () => {

    let data = {
      listName: this.listName,
      listId: this.listId
    }
    this.appService.edittodolist(data,this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      // this.getAlltodoList();
      this.socketService.updateTodoMulti(this.userName)
    }, (err) => {
      this.toastr.error("Unable to Update list")
    })

  }

  public listUpdatedResponse = () => {
    this.socketService.listUpdatedResponse().subscribe((response) => {
      this.toastr.info(response)
      this.getAlltodoList();
    })
  }


  /**
 *  Item related functions for Multi-User 
 */

  //for new creating item for Multi user
  public createItemMulti = () => {
    if (this.listId == undefined) {
      return this.toastr.warning("Select List");
    }
    else {

    }
    if (this.itemName == undefined || this.itemName == "" || this.itemName == null) {
      return this.toastr.warning("Item Cannot be empty")
    }
    else {
      let data = {
        listId: this.listId,
        itemName: this.itemName
      }
      console.log(data.itemName)
      this.appService.createNewItem(data, this.token).subscribe((apiResponse: any) => {
        this.itemName = "";
        this.item = apiResponse.data
        console.log(this.item)
        Cookie.set('itemId', apiResponse.data.itemId);
        this.socketService.createItemMulti(this.userName);

        this.appService.saveCreateHistoryItem(this.item, this.token).subscribe((apiResponse: any) => {
          //this.toastr.success(apiResponse.message); 
          console.log(apiResponse.message);
        })

      }, (err) => {
        this.toastr.error("Error Occured");
      })
    }
  }



  public newItemAddedResponse = () => {
    this.socketService.itemAddedResponse().subscribe((response) => {
      this.getAllItems();
      this.toastr.success(response);
    })
  }

  //Deleting a items for multi user :

  public deleteItemMulti = (item) => {
    this.itemSave = item;
    console.log(item)
    this.appService.deleteSingleItem(item.itemId, this.token).subscribe((apiResponse: any) => {
      if (apiResponse.status == 200) {
        //this.toastr.warning(apiResponse.message)
        //this.getAllItems();
        this.socketService.deleteItemMulti(this.userName);
        this.saveDeletedItem();
      }
    }, (err) => {
      console.log(err);
      this.toastr.error("Unable to delete")
    })
  }


  public saveDeletedItem = () => {

    //for saving to history
    this.appService.saveDeleteHistoryItem(this.itemSave, this.token).subscribe((apiResponse: any) => {
      if (apiResponse.status == 200) {
        // this.toastr.success(apiResponse.message); 
        this.getAlltodoList();

      }
    }, (error) => {
      console.log("Error Occured")
    })
  }


  public itemDeletedResponse = () => {
    this.socketService.itemDeletedResponse().subscribe((response) => {
      this.getAllItems();
      this.toastr.warning(response);
    })
  }

  //Updating items for multi user

  public setItemName = (itemId, itemName) => {

    this.itemId = itemId
    this.itemName = itemName

  }

  public saveItemUpdateHistory = (item) => {

    this.appService.saveUpdateHistoryItem(item, this.token).subscribe((apiResponse: any) => {
      // this.toastr.success(apiResponse.message); 
      console.log(apiResponse.message);
    })
  }


  public updateItemMulti = () => {

    let data = {
      itemName: this.itemName,
      itemId: this.itemId
    }
    this.appService.editItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      //Cookie.set('listName', data.listName);

      this.getAllItems();
      this.socketService.updateItemMulti(this.userName);

    }, (err) => {
      this.toastr.error("Unable to Update Item")
    })

  }


  public itemUpdatedResponse = () => {
    this.socketService.itemUpdatedResponse().subscribe((response) => {
      this.getAllItems();
      this.toastr.info(response);
    })
  }

  //for Mark Done 
  public markDoneItemMulti = (itemId) => {

    let data = {
      isDone: true,
      itemId: itemId
    }

    console.log(data);
    this.appService.markDoneOrOpenItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      //Cookie.set('listName', data.listName);
      //this.toastr.success("Item Marked Done")      
      //this.getAllItems();
      this.socketService.markDoneItem(this.userName)

    }, (err) => {
      this.toastr.error("Unable to Mark Done")
    })

  }


  public itemMarkedDoneResponse = () => {
    this.socketService.itemMarkedDoneResponse().subscribe((response) => {
      this.getAllItems();
      this.toastr.success(response);
    })
  }


  //for Mark Open Item

  public markOpenItemMulti = (itemId) => {

    let data = {
      isDone: false,
      itemId: itemId
    }

    console.log(data);
    this.appService.markDoneOrOpenItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      this.socketService.markOpenItem(this.userName)

    }, (err) => {
      this.toastr.error("Unable to Open")
    })


  }

  public itemMarkedOpenResponse = () => {
    this.socketService.itemMarkedOpenResponse().subscribe((response) => {
      this.getAllItems();
      this.toastr.info(response);
    })
  }



  //method to undo item 
  public undoItem = (listId) => {
    console.log(listId);

    this.appService.undoItem(listId, this.token).subscribe((apiResponse) => {
      if (apiResponse.status == 200) {
        this.undoObj = apiResponse.data;
        console.log(this.undoObj);
        if (this.undoObj.hasOwnProperty('itemName')) {

          if (this.undoObj.operationName == "Update") {

            //this.toastr.info("Item deleted from history");
            this.appService.editItem(this.undoObj, this.token).subscribe((apiResponse: any) => {
              console.log(apiResponse.data)

              this.appService.deleteItemFromHistory(this.undoObj, this.token).subscribe((apiResponse) => {

                this.getAllItems();
              })


            })

            console.log(this.itemData);
          }


          if (this.undoObj.operationName == "Delete") {

            let data = {
              "listId": this.undoObj.listId,
              "itemName": this.undoObj.itemName
            }
            this.appService.createNewItem(data, this.token).subscribe((apiResponse: any) => {
              console.log(apiResponse.data)

              Cookie.set('itemId', apiResponse.data.itemId);
              this.getAllItems();
              this.getAllSubItems();

              this.appService.deleteItemFromHistory(this.undoObj, this.token).subscribe((apiResponse) => {
                //this.toastr.info("Item deleted from history");
              })


            }, (err) => {
              this.toastr.error("Error Occured");
            })

            //console.log(this.itemData);
          }

          if (this.undoObj.operationName == "Create") {

            this.appService.deleteSingleItem(this.undoObj.itemId, this.token).subscribe((apiResponse: any) => {
              if (apiResponse.status == 200) {
                //this.toastr.warning(apiResponse.message)
                this.getAllItems();

                this.appService.deleteItemFromHistory(this.undoObj, this.token).subscribe((apiResponse) => {
                  //this.toastr.info("Item deleted from history");
                })

              }
            }, (err) => {
              console.log(err);
              this.toastr.error("Unable to delete")
            })

            console.log(this.itemData);
          }

        }
        this.socketService.undoItemMulti(this.userName);
      }
      else {
        this.toastr.warning('No undo found!');
      }

    },
      error => {
        this.toastr.error('Some Server error occured!');

      }
    )
  }//end


  public itemUndoResponse = () => {
    this.socketService.itemUndoResponse().subscribe((response) => {
      this.getAllItems();
      this.toastr.warning(response);
    })
  }






  /**
  * SubItems related functions for multi user
  */


  /* Sub-Item related functionality */

  //create sub-items for multi users
  public addSubItemIcon = (itemId) => {
    Cookie.set("itemId", itemId);
    this.itemId = Cookie.get("itemId");
  }

  public createSubItemMulti = () => {

    if (!this.subItemName1) {
      this.toastr.warning("Name is required");
    } else { }


    let data = {
      itemId: this.itemId,
      subItemName: this.subItemName1
    }
    console.log(data.subItemName)
    console.log(data.itemId)
    this.appService.createNewSubItem(data, this.token).subscribe((apiResponse: any) => {
      this.subItemName1 = "";
      //this.getAllSubItems();

      this.subItem = apiResponse.data
      console.log(this.subItem)

      this.appService.saveCreateHistorySubItem(this.subItem, this.token).subscribe((apiResponse: any) => {
        //this.toastr.success(apiResponse.message); 
        console.log(apiResponse.message);
      })



      this.socketService.createSubItemMulti(this.userName);
    }, (err) => {
      this.toastr.error("Error Occured");
    })


  }

  public newSubItemAddedResponse = () => {
    this.socketService.subItemAddedResponse().subscribe((response) => {
      this.getAllSubItems();
      this.toastr.success(response);
    })
  }

  //delete sub-items for multi user


  public deleteSubItemMulti = (subItem) => {

    this.subItemSave = subItem;
    console.log(subItem)

    this.appService.deleteSingleSubItem(subItem.subItemId, this.token).subscribe((apiResponse: any) => {
      if (apiResponse.status == 200) {
        //this.toastr.warning(apiResponse.message)
        //this.getAllSubItems();
        this.socketService.deleteSubItemMulti(this.userName)
        this.saveDeletedSubItem();

      }
    }, (err) => {
      console.log(err);
      this.toastr.error("Unable to delete")
    })
  }

  public saveDeletedSubItem = () => {

    //for saving to history
    this.appService.saveDeleteHistorySubItem(this.subItemSave, this.token).subscribe((apiResponse: any) => {
      if (apiResponse.status == 200) {
        // this.toastr.success(apiResponse.message); 
        this.getAlltodoList();

      }
    }, (error) => {
      console.log("Error Occured")
    })
  }



  public subItemDeletedResponse = () => {
    this.socketService.subItemDeletedResponse().subscribe((response) => {
      this.getAllSubItems();
      this.toastr.warning(response);
    })
  }

  //update sub-items for multi-user

  public setSubItemName = (subItemId, subItemName) => {

    console.log(subItemId)
    console.log(subItemName)

    this.subItemId = subItemId
    this.subItemName = subItemName

  }


  public saveSubItemUpdateHistory = (item) => {

    this.appService.saveUpdateHistorySubItem(item, this.token).subscribe((apiResponse: any) => {
      // this.toastr.success(apiResponse.message); 
      console.log(apiResponse.message);
    })
  }


  public updateSubItemMulti = () => {

    let data = {
      subItemName: this.subItemName,
      subItemId: this.subItemId
    }

    console.log(data);
    this.appService.editSubItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      //Cookie.set('listName', data.listName);

      //this.getAllSubItems();
      this.socketService.updateSubItemMulti(this.userName)

    }, (err) => {
      this.toastr.error("Unable to Update Sub-Item")
    })

  }

  public subItemUpdatedResponse = () => {
    this.socketService.subItemUpdatedResponse().subscribe((response) => {
      this.getAllSubItems();
      this.toastr.info(response);
    })
  }


  //for Mark Done 
  public markDoneSubItemMulti = (subItemId) => {

    let data = {
      isDone: true,
      subItemId: subItemId
    }

    console.log(data);
    this.appService.markSubDoneOrOpenItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      this.socketService.markDoneSubItemMulti(this.userName)
    }, (err) => {
      this.toastr.error("Unable to Mark Done")
    })

  }

  public subItemMarkedDoneResponse = () => {
    this.socketService.subItemMarkedDoneResponse().subscribe((response) => {
      this.getAllSubItems();
      this.toastr.success(response);
    })
  }


  //for Mark Open Item

  public markOpenSubItemMulti = (subItemId) => {

    let data = {
      isDone: false,
      subItemId: subItemId
    }

    console.log(data);
    this.appService.markSubDoneOrOpenItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);

      this.socketService.markOpenSubItemMulti(this.userName)
    }, (err) => {
      this.toastr.error("Unable to Open")
    })


  }

  public subItemMarkedOpenResponse = () => {
    this.socketService.subItemMarkedOpenResponse().subscribe((response) => {
      this.getAllSubItems();
      this.toastr.info(response);
    })
  }



  //method to undo item 
  public undoSubItem = (itemId) => {
    console.log(itemId);

    this.appService.undoSubItem(itemId, this.token).subscribe((apiResponse) => {
      if (apiResponse.status == 200) {
        this.undoObj = apiResponse.data;
        console.log(this.undoObj);
        if (this.undoObj.hasOwnProperty('subItemName')) {

          if (this.undoObj.operationName == "Update") {

            //this.toastr.info("Item deleted from history");
            this.appService.editSubItem(this.undoObj, this.token).subscribe((apiResponse: any) => {
              console.log(apiResponse.data)

              this.appService.deleteSubItemFromHistory(this.undoObj, this.token).subscribe((apiResponse) => {

                this.getAllSubItems();
              })
            })

            console.log(this.itemData);
          }


          if (this.undoObj.operationName == "Delete") {

            let data = {
              "itemId": this.undoObj.itemId,
              "subItemName": this.undoObj.subItemName
            }
            this.appService.createNewSubItem(data, this.token).subscribe((apiResponse: any) => {
              console.log(apiResponse.data)

              Cookie.set('subItemId', apiResponse.data.subItemId);

              this.appService.deleteSubItemFromHistory(this.undoObj, this.token).subscribe((apiResponse) => {
                //this.toastr.info("Item deleted from history");
              })
              this.getAllSubItems();


            }, (err) => {
              this.toastr.error("Error Occured");
            })

            //console.log(this.itemData);
          }


          if (this.undoObj.operationName == "Create") {

            this.appService.deleteSingleSubItem(this.undoObj.subItemId, this.token).subscribe((apiResponse: any) => {
              if (apiResponse.status == 200) {
                //this.toastr.warning(apiResponse.message)
                this.getAllItems();
                this.getAllSubItems();
                this.appService.deleteSubItemFromHistory(this.undoObj,this.token).subscribe((apiResponse) => {
                  //this.toastr.info("Sub-Item deleted from history");
                })

              }
            }, (err) => {
              console.log(err);
              this.toastr.error("Unable to delete")
            })

            console.log(this.itemData);
          }


        }
        this.socketService.undoSubItemMulti(this.userName);
      }
      else {
        this.toastr.info('No undo found!');
      }
    },
      error => {
        this.toastr.error('Some Server error occured!');

      }
    )
  }//end



  public subItemUndoResponse = () => {
    this.socketService.subItemUndoResponse().subscribe((response) => {
      this.getAllSubItems();
      this.getAllSubItems();
      this.toastr.warning(response);
    })
  }





  //Logout:
  public logout = () => {

    this.appService.logout().subscribe((apiResponse) => {

        if (apiResponse.status === 200) {
            console.log("logout called")
            Cookie.delete('authtoken');

            Cookie.delete('receiverId');

            Cookie.delete('receiverName');

            this.socketService.disconnectedSocket();//calling the method which emits the disconnect event.

            this.socketService.exitSocket()

            this.router.navigate(['/']);

        } else {
            this.toastr.error(apiResponse.message)
        } // end condition

    },(err) => {
        this.toastr.error('some error occured')

    });

  }


  public addItemUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.

      this.createItemMulti();

    }

  } // end addItemUsingKeypress



  //Sending The Request:

  public sendreq = (id) => {
    let data = {
      receiverId: id,
      senderId: this.userId,
      senderName: this.userName
    }
    this.socketService.sendRequest(data)
  }

  public alreadySentResponse = () => {
    this.socketService.responseAlreadySent().subscribe((apiResponse) => {
      this.toastr.error(apiResponse)
    })
  }

  public alreadyFriendResponse = () => {
    this.socketService.responseAlreadyFriend().subscribe((apiResponse) => {
      this.toastr.error(apiResponse)

    })
  }

  public saveRequest = () => {
    console.log("request called")
    this.socketService.savereq().subscribe((apiResponse) => {
      this.toastr.success(apiResponse);
      console.log(apiResponse);
      this.getAllUsers();
    })
  }



  //Rejecting The Request:

  public rejectReq = (id) => {
    let data = {
      receiverId: this.userId,
      senderId: id,
      receiverName: this.userName,
      action: "Reject"
    }
    this.socketService.rejectRequest(data)
  }

  public rejectResponse = () => {
    this.socketService.rejectResponse().subscribe((apiResponse) => {
      this.toastr.warning("Request Rejected");
      this.getAllUsers();
    })
  }


  //Accepting the request

  public acceptReq = (id, name) => {
    let data = {
      senderId: id,
      receiverId: this.userId,
      receiverName: this.userName,
      senderName: name
    }
    this.socketService.acceptRequest(data);
  }

  public acceptResponse = () => {
    this.socketService.acceptResponse().subscribe((apiResponse) => {
      this.toastr.info(apiResponse);
      this.getAllUsers();
    })
  }

  //Deleting A Friend:

  public deletefriend = (id) => {
    let data = {
      friendId: id,
      myId: this.userId,
      myName: this.userName,
      action: "Unfriend"
    }
    this.socketService.unfriend(data)
  }

  public unfriendResponse = () => {
    this.socketService.unfrndResponse().subscribe((apiResponse) => {
      this.toastr.warning(apiResponse);
      this.getAllUsers();
    })
  }

  public listenUpdate = () => {
    this.socketService.listenUpdate(this.userId).subscribe((apiResponse) => {
      if (apiResponse.action == "Accept") {
        this.toastr.success(`${apiResponse.friendName} has accepted your friend request`);
      } else if (apiResponse.action == "Request") {
        this.toastr.info(`${apiResponse.senderName} sent you friend request`);
        this.getAllUsers();
      } else if (apiResponse.action == "Unfriend") {
        this.toastr.error(`${apiResponse.myName} removed you from friend list`)
      } else if (apiResponse.action == "Reject") {
        this.toastr.error(`${apiResponse.receiverName} rejected your friend request`)
      } else { }

      this.getAllUsers();

    })
  }


  public clearUndos = () => {

    this.appService.clearItemUndos(this.token).subscribe((apiResponse: any) => {
      //this.toastr.info(apiResponse.message)       
    }, (err) => {
      this.toastr.error("Unable to clear history")
    })
    this.appService.clearSubItemUndos(this.token).subscribe((apiResponse: any) => {
      //this.toastr.info(apiResponse.message)       
    }, (err) => {
      this.toastr.error("Unable to clear history")
    })

    this.socketService.clearUndos(this.userName);

  }

  public clearUndosResponse = () => {
    this.socketService.clearUndosResponse().subscribe((response) => {
      this.getAllSubItems();
      this.toastr.info(response);
    })
  }

}
