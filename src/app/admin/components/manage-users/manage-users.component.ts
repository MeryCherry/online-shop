import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from 'shared/models/user';
import { RolesService } from 'shared/services/roles.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

interface IRole {
id: string;
}
@Component({
  selector: 'manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit, OnDestroy {
  // sorting element for columns
  @ViewChild(MatSort) sort: MatSort;
  // pagination element for columns
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<User>;
  itemCount;
  subscription: Subscription;
  subscriptionRoles: Subscription;
  prevRoleValue;
  users = {};
  admins: IRole[];
  isEdit = false;
  // this is column names definition for angular material
  // data table
  displayedColumns: string[] = ['name', 'email', 'isAdmin', 'actions'];
  constructor(private router: Router,
              private rolesSrvc: RolesService, 
              private userSrvc: UserService) { }

  async ngOnInit() {
    this.subscriptionRoles = this.rolesSrvc.getListAdmins().subscribe(
      (a: IRole[]) => {
        this.admins = a;
    }
    );
    this.subscription = this.userSrvc.getAll().subscribe((o: User[]) => {
      this.users = o;
      this.initTable(o);
    });
  }

  private initTable(users: User[]) {
    // binding sorting and paginating for data in table
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.itemCount = this.dataSource.data.length;
}
ngOnDestroy() {
  this.subscription.unsubscribe();
  this.subscriptionRoles.unsubscribe();
}

isAdmin(id: string) {
  return (this.admins.find(x => x.id === id) !== undefined);
}
delete(id) {
  if (!confirm('Are you sure you want to delete this user?')) {return; }
  this.userSrvc.delete(id);
  this.router.navigate(['/manage-users']); 
}
save(elem){
// this.rolesSrvc.updateRoleAdmin()
// this.userSrvc.update(elem.key, elem);
this.isEdit = !this.isEdit;
}
cancel(elem){
  elem.status = this.prevRoleValue;
  this.isEdit = !this.isEdit;
}
}
