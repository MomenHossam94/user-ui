import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 user:User=new User();
 id:number=0;
  constructor(private _route:Router,private _activateRoute:ActivatedRoute,private _userService:UsersService) { }

  ngOnInit(): void {
 this._activateRoute.paramMap.subscribe(
   params=>{
     this.id=Number(params.get("id"))
    }
 );
   this._userService.getUser(this.id).subscribe(response=>{
     this.user = response as User

    });
  }
  onSubmit(value:any)
  {
     this._userService.EditUser(value).subscribe(response=>{
       this._route.navigateByUrl('');
     })
  }
  dateChanged(eventDate: string): Date | null {
    return !!eventDate ? new Date(eventDate) : null;
  }
}
