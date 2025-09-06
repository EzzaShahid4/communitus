import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface FullName {
  firstName: string;
  postcode: string;
  contactName: string;
  email: string;
  status: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // dataSource!: MatTableDataSource<fullName>;

  dataSource = new MatTableDataSource<FullName>([
    {
      firstName: 'John',
      postcode: 'CF0938',
      contactName: 'Firstname Lastname',
      email: 'emailname@example.com',
      status: 'Live',
    },
    {
      firstName: 'Jane',
      postcode: 'CF0938',
      contactName: 'Firstname Lastname',
      email: 'emailname@example.com',
      status: 'Live',
    },
    {
      firstName: 'Jane',
      postcode: 'CF0938',
      contactName: 'Firstname Lastname',
      email: 'emailname@example.com',
      status: 'Live',
    },
    {
      firstName: 'Jane',
      postcode: 'CF0938',
      contactName: 'Firstname Lastname',
      email: 'emailname@example.com',
      status: 'Live',
    },
  ]);

  displayedColumns: string[] = [
    'cell1',
    'cell2',
    'cell3',
    'cell4',
    'cell5',
    'cell6',
  ];
}
