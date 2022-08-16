import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  messages: string[] = []

  constructor(private _snackBar: MatSnackBar) {
  }

  getMessages(): Observable<string[]> {
    return of(this.messages)
  }

  add(message: string) {
    this.messages.splice(0, 1)
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }
}
