import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _route:Router,private _userService:UsersService) { }

  ngOnInit(): void {
  }
  onSubmit(value:any):void
  {
   let user:User={
     id:0,
    name:value.name,
    age:value.age,
    joiningDate : value.joiningDate,
    address:value.address,
    phone:value.phone,
    position:value.position,
    salary: value.salary,
   };
   this._userService.postUser(user).subscribe(
     response=>{
      this._route.navigateByUrl('');
     }
   );

  }
}
