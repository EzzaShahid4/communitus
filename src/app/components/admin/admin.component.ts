import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  status: boolean = false;
  chevron: string = 'chevron-right';
  isAdminExit: boolean = false;
  // constructor(private accountService: AccountService) {}
  // ngOnInit() {
  //   if (this.accountService.getRoles().includes('Admin')) {
  //     this.isAdminExit = true;
  //   }
  // }
  clickEvent() {
    this.status = !this.status;
    this.chevron =
      this.chevron == 'chevron-right' ? 'chevron-left' : 'chevron-right';
  }
}
