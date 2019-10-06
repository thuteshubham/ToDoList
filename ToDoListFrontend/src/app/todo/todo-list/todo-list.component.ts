import { Component, OnInit,HostListener, OnDestroy } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

import { SocketService } from './../../socket.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [SocketService]
})
export class TodoListComponent implements OnInit, OnDestroy {

  public listName1 : String
  public subItemName1 : any
  public listName:String
  public response = [];
  public response1 = [];
  public subItemName:any
  public itemData:any=[]
  public subItemData:any
  public users:any
  public createdOn : any

  public itemName:any
  public itemId: any
  public item:any
  public itemName1:any

  public subItemId:any;


  public undoObj:any;
  public itemSave:any;
  public modifiedOn:any
  public isDone:Boolean

  public subItemSave:any;
  public subItem:any;

 // public isDone:Boolean;

  //Variables Used With Cookies:

  public token:String;
  public userId : String
  public fullName : String
  public userInfo : any
  public listId : any



  constructor(public appService: AppService, public toastr: ToastrService, public router: Router, public socketService:SocketService) { }

  ngOnInit() {

    this.userId = Cookie.get("receiverId");
    this.fullName = Cookie.get("receiverName");
    this.token = Cookie.get('authtoken')
    this.getAllUsers();
    this.getAlltodoList();

    this.userInfo = this.appService.getUserInfoFromLocalstorage();
    this.getAllItems();
    this.getAllSubItems();

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
      this.users = apiResponse.data;
      console.log(this.users);
    })
  }


  /* To-Do list related functionality */

    //Selecting A List:

  public selectlist = (listId, listName) => {
    Cookie.set("listId", listId);
    Cookie.set("listName", listName);
    this.listName = Cookie.get("listName");
    this.listId = Cookie.get("listId");
    this.toastr.info(this.listName + " Selected");
  }

    //for getting all to do list for single user
  public getAlltodoList = () => {
    //console.log(this.response)
    this.response = []
    this.appService.getAlltodo(this.token).subscribe((apiResponse: any) => {
      for (let index in apiResponse.data) {
        if (apiResponse.data[index].userId == this.userId)
          this.response.push(apiResponse.data[index])
        else
          console.log("Does Not Match");
      }
     // console.log(this.response);
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

    //for creating new todo list for single user
  public newtodo = () => {
    if (!this.listName1) {
      this.toastr.warning("List Name is required");
    }
    else {
      let values = {
        listName: this.listName1,
        userId: this.userId,
        creator: this.fullName,
        private:true
      }
      this.appService.createTodo(values, this.token).subscribe((apiResponse: any) => {
        if (apiResponse.status == 200) {
          this.toastr.success("List Created");
          this.listName1 = ""
          this.response = [];
          this.getAlltodoList();

        }
      }, (error) => {
        console.log("Error Occured")
      })
    }
  }

    //Deleting a todolist:

  public deletetodoList = (id) => {
    this.appService.removetodolist(id,this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      Cookie.delete('listId');
      Cookie.delete('listName');
      this.listName = "";
      this.toastr.warning(apiResponse.message);
      this.response = [];
      this.getAlltodoList();

    }, (err) => {
      this.toastr.error("Unable to Delete list")
    })

  }
    
  //Update a todolist:
  public setListName =(listId,listName) =>{

    this.listId = listId
    this.listName = listName

  }
  
  public updatetodoList = () => {
    //console.log("data in componet : "+ data.listId);
    //console.log("data in componet : "+ data.listName);
    let data = {
      listName:this.listName,
      listId:this.listId
    }
    this.appService.edittodolist(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      //Cookie.set('listName', data.listName);

      this.getAlltodoList();

    }, (err) => {
      this.toastr.error("Unable to Update list")
    })

  }

  /* 
  *Item related functionality 
  */

  
    //for new creating item for sigle user
  public createItem = () => {
    if (this.listId == undefined) {
      return this.toastr.warning("Select List");
    }
    else {

    }
    if (this.itemName1 == undefined || this.itemName1 == "" || this.itemName1 == null) {
      return this.toastr.warning("Item Cannot be empty")
    }
    else {
      let data = {
        listId: this.listId,
        itemName: this.itemName1
      }
      console.log(data.itemName)
      this.appService.createNewItem(data, this.token).subscribe((apiResponse: any) => {
        this.itemName1 = "";
        this.item=apiResponse.data
        console.log(this.item)
        Cookie.set('itemId', apiResponse.data.itemId);

        this.appService.saveCreateHistoryItem(this.item, this.token).subscribe((apiResponse:any)=>{
          //this.toastr.success(apiResponse.message); 
          console.log(apiResponse.message);
         })


        this.getAllItems();
        this.toastr.success("Item Created");
      }, (err) => {
        this.toastr.error("Error Occured");
      })
    }
  }



  //Deleting A Item:
  
  public deleteItem = (item) => {
    this.itemSave=item;
    console.log(item)
    this.appService.deleteSingleItem(item.itemId, this.token).subscribe((apiResponse: any) => {
      if (apiResponse.status == 200) {
        this.toastr.warning(apiResponse.message)
        this.getAllItems();
        this.saveDeletedItem();
      }
    }, (err) => {
      console.log(err);
      this.toastr.error("Unable to delete")
    })
  }


  public saveDeletedItem=()=>{

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

  //Update a ItemName:
  public setItemName =(itemId,itemName) =>{

    this.itemId = itemId
    this.itemName = itemName
  }
   
  public saveItemUpdateHistory=(item)=>{
    
    this.appService.saveUpdateHistoryItem(item, this.token).subscribe((apiResponse:any)=>{
     // this.toastr.success(apiResponse.message); 
     console.log(apiResponse.message);
    })
  }

  public updateItem = () => {
   
      let data = {
        itemName:this.itemName,
        itemId:this.itemId
      }
      this.appService.editItem(data, this.token).subscribe((apiResponse: any) => {
        console.log(apiResponse);
        //Cookie.set('listName', data.listName);
  
        this.getAllItems();
        this.getAllSubItems();
  
      }, (err) => {
        this.toastr.error("Unable to Update Item")
      })
  
  }

  //for Mark Done and Open Item
  public markDoneItem = (itemId) => {
   
    let data = {
      isDone:true,
      itemId:itemId
    }

    console.log(data);
    this.appService.markDoneOrOpenItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      //Cookie.set('listName', data.listName);
      this.toastr.success("Item Marked Done")      
      this.getAllItems();

    }, (err) => {
      this.toastr.error("Unable to Mark Done")
    })
    
  }


  public markOpenItem = (itemId)=> {
   
    let data = {
      isDone:false,
      itemId:itemId
    }

    console.log(data);
    this.appService.markDoneOrOpenItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      //Cookie.set('listName', data.listName);
      this.toastr.info("Item Marked Open")      
      this.getAllItems();

    }, (err) => {
      this.toastr.error("Unable to Open")
    })


  } 



    //method to undo item 
  public undoItem=(listId)=>{
    console.log(listId);

    this.appService.undoItem(listId, this.token).subscribe((apiResponse)=>{
        if(apiResponse.status==200){
          this.undoObj=apiResponse.data;
          console.log(this.undoObj);
          if(this.undoObj.hasOwnProperty('itemName')){

            if(this.undoObj.operationName=="Update"){

              //this.toastr.info("Item deleted from history");
              this.appService.editItem(this.undoObj, this.token).subscribe((apiResponse: any) => {
              console.log(apiResponse.data)

              this.appService.deleteItemFromHistory(this.undoObj, this.token).subscribe((apiResponse)=>{

                this.getAllItems();
              })
  

              })

              console.log(this.itemData);
            }

            if(this.undoObj.operationName=="Delete"){

              let data={
                "listId":this.undoObj.listId,
                "itemName":this.undoObj.itemName
              }
              this.appService.createNewItem(data, this.token).subscribe((apiResponse: any) => {
                console.log(apiResponse.data)
                
                Cookie.set('itemId', apiResponse.data.itemId);
                this.getAllItems();
                this.getAllSubItems();

                  this.appService.deleteItemFromHistory(this.undoObj, this.token).subscribe((apiResponse)=>{
                    //this.toastr.info("Item deleted from history");
                  })
                

              }, (err) => {
                this.toastr.error("Error Occured");
              })

            //console.log(this.itemData);
            }           
            
            if(this.undoObj.operationName=="Create"){

              this.appService.deleteSingleItem(this.undoObj.itemId, this.token).subscribe((apiResponse: any) => {
                if (apiResponse.status == 200) {
                  this.toastr.warning(apiResponse.message)
                  this.getAllItems();

                  this.appService.deleteItemFromHistory(this.undoObj, this.token).subscribe((apiResponse)=>{
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

        }
        else{
          this.toastr.warning('No undo found!');
        }

      },
      error=>{
        this.toastr.error('Some Server error occured!');

      }
    )
  }//end




  /* Sub-Item related functionality */
  

  public addSubItemIcon = (itemId) => {
    Cookie.set("itemId", itemId);
    this.itemId = Cookie.get("itemId");
  }

  public createSubItem = () => {
 
        if (!this.subItemName1) {
          this.toastr.warning("Name is required");
        }else{}
        
      
        let data = {
          itemId: this.itemId,
          subItemName: this.subItemName1
        }
        console.log(data.subItemName)
        console.log(data.itemId)
        this.appService.createNewSubItem(data, this.token).subscribe((apiResponse: any) => {
          this.subItemName1 = "";
          this.subItem=apiResponse.data
          console.log(this.subItem)

           this.appService.saveCreateHistorySubItem(this.subItem, this.token).subscribe((apiResponse:any)=>{
            //this.toastr.success(apiResponse.message); 
            console.log(apiResponse.message);
           })          

           this.getAllSubItems();
           this.toastr.success("Sub-Item Created");

        }, (err) => {
          this.toastr.error("Error Occured");
        })
        

  }


  //Deleting A Sub-Item:

  public deleteSubItem = (subItem) => {

    this.subItemSave=subItem;
    console.log(subItem)

    this.appService.deleteSingleSubItem(subItem.subItemId, this.token).subscribe((apiResponse: any) => {
      if (apiResponse.status == 200) {
        this.toastr.warning(apiResponse.message)
        this.getAllSubItems();
        this.saveDeletedSubItem();
      }
    }, (err) => {
      console.log(err);
      this.toastr.error("Unable to delete")
    })
  }


  public saveDeletedSubItem=()=>{

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



  //Update a Sub-ItemName:
  public setSubItemName =(subItemId,subItemName) =>{

    console.log(subItemId)
    console.log(subItemName)

    this.subItemId = subItemId
    this.subItemName = subItemName

  }


  public saveSubItemUpdateHistory=(item)=>{
    
    this.appService.saveUpdateHistorySubItem(item, this.token).subscribe((apiResponse:any)=>{
     // this.toastr.success(apiResponse.message); 
     console.log(apiResponse.message);
    })
  }
      
  public updateSubItem = () => {
      let data = {
        subItemName:this.subItemName,
        subItemId:this.subItemId
      }

      console.log(data);
      this.appService.editSubItem(data, this.token).subscribe((apiResponse: any) => {
        console.log(apiResponse);
        //Cookie.set('listName', data.listName);
  
        this.getAllSubItems();
  
      }, (err) => {
        this.toastr.error("Unable to Update Sub-Item")
      })
  
  }

  //for marking item Done or Open
  public markDoneSubItem = (subItemId) => {
   
    let data = {
      isDone:true,
      subItemId:subItemId
    }

    console.log(data);
    this.appService.markSubDoneOrOpenItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      //Cookie.set('listName', data.listName);
      this.toastr.success("Sub-Item Marked Done")      
      this.getAllSubItems();

    }, (err) => {
      this.toastr.error("Unable to Mark Done")
    })
    
  }


  public markOpenSubItem = (subItemId)=> {
   
    let data = {
      isDone:false,
      subItemId:subItemId
    }

    console.log(data);
    this.appService.markSubDoneOrOpenItem(data, this.token).subscribe((apiResponse: any) => {
      console.log(apiResponse);
      //Cookie.set('listName', data.listName);
      this.toastr.info("Sub-Item Marked Open")      
      this.getAllSubItems();

    }, (err) => {
      this.toastr.error("Unable to Open")
    })


  } 

  public clearUndos=()=>{

    this.appService.clearItemUndos(this.token).subscribe((apiResponse: any) => {
      this.toastr.info(apiResponse.message)       
    }, (err) => {
      this.toastr.error("Unable to clear history")
    })
    this.appService.clearSubItemUndos(this.token).subscribe((apiResponse: any) => {
      this.toastr.info(apiResponse.message)       
    }, (err) => {
      this.toastr.error("Unable to clear history")
    })

  }


    //method to undo item 
  public undoSubItem=(itemId)=>{
    console.log(itemId);

    this.appService.undoSubItem(itemId, this.token).subscribe((apiResponse)=>{
        if(apiResponse.status==200){
          this.undoObj=apiResponse.data;
          console.log(this.undoObj);
          if(this.undoObj.hasOwnProperty('subItemName')){
            
            if(this.undoObj.operationName=="Update"){

              //this.toastr.info("Item deleted from history");
              this.appService.editSubItem(this.undoObj, this.token).subscribe((apiResponse: any) => {
                  console.log(apiResponse.data)

                  this.appService.deleteSubItemFromHistory(this.undoObj, this.token).subscribe((apiResponse)=>{

                    this.getAllSubItems();
                  })
              })

              console.log(this.itemData);
            }
          
          
            if(this.undoObj.operationName=="Delete"){

              let data={
                "itemId":this.undoObj.itemId,
                "subItemName":this.undoObj.subItemName
              }
              this.appService.createNewSubItem(data, this.token).subscribe((apiResponse: any) => {
                console.log(apiResponse.data)
                
                Cookie.set('subItemId', apiResponse.data.subItemId);
                this.getAllSubItems();
                
                  this.appService.deleteSubItemFromHistory(this.undoObj, this.token).subscribe((apiResponse)=>{
                    //this.toastr.info("Item deleted from history");
                  })
                

              }, (err) => {
                this.toastr.error("Error Occured");
              })

            //console.log(this.itemData);
            }           
          
            if(this.undoObj.operationName=="Create"){

              this.appService.deleteSingleSubItem(this.undoObj.subItemId, this.token).subscribe((apiResponse: any) => {
                if (apiResponse.status == 200) {
                  //this.toastr.warning(apiResponse.message)
                  this.getAllItems();
                  this.getAllSubItems();
                  this.appService.deleteSubItemFromHistory(this.undoObj, this.token).subscribe((apiResponse)=>{
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

        }
        else{
          this.toastr.warning('No undo found!');
        }

      },
      error=>{
        this.toastr.error('Some Server error occured!');

      }
    )
  }//end








  


   //Logout:
  public logout=()=>{
    this.appService.logout().subscribe((apiResponse) => {

      if (apiResponse.status === 200) {
          console.log("logout called")
          Cookie.delete('authtoken');

          Cookie.delete('receiverId');

          Cookie.delete('receiverName');

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

      this.createItem();

    }

  } // end sendMessageUsingKeypress

  //method to do undo using keyboard
@HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) { 
  if(event.ctrlKey && event.key=='z' || event.metaKey && event.key=='z'){
    // console.log(event);
    if(this.listId){
      this.undoItem(this.listId);
    }
   
  }
  
}//end


  


}
