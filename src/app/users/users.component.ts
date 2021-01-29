import { Component, OnInit } from '@angular/core';
import { User } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersArray :User[]=[];
  result :any =[];

  constructor(private _userService:UsersService) {
  
   }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(
      response => {
        this.result=response;
        console.log(response);
        this.usersArray =this.result.users as User[];
      },
      error=>{}
    );
  } 
  onDelete(id:number)
  {
    let user = this.usersArray.find(i=>i.id==id) as User;
    let userIndex = this.usersArray.indexOf(user,0);
    this._userService.DeleteUser(user.id).subscribe(response=>{
      this.usersArray.splice(userIndex,1);
    })
 
  }
  

}
