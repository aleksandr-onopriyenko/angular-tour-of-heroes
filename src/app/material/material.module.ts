import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSnackBar} from "@angular/material/snack-bar";


@NgModule({
  declarations: [],
  imports: [],
  providers: [MatSnackBar, MatSidenav, MatSidenavContainer],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
  ]
})
export class MaterialModule {
}
