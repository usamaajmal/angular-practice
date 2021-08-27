import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})


export class UsersListComponent implements OnInit {

  users: any;
  
  constructor(private data: UsersService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users = data 
    );
  }


 

}


