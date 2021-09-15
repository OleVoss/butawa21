import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginformComponent } from './loginform/loginform.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'butawa21';

  constructor(private dialog: MatDialog) {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginformComponent)

  }

  close() {
    this.dialog.closeAll();
  }
}
