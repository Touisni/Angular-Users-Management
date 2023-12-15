import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(1, 6).subscribe((data: any) => {
      this.users = data.data;
    });
  }
}
