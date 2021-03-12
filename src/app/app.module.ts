import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CurrentNominationsComponent } from './current-nominations/current-nominations.component';
import { PastNominationsComponent } from './past-nominations/past-nominations.component';
import { DeleteModalComponent } from './_shared/delete-modal/delete-modal.component';
import { ConfirmModalComponent } from './_shared/confirm-modal/confirm-modal.component';
import { EmptyModalComponent } from './_shared/empty-modal/empty-modal.component';
import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    CurrentNominationsComponent,
    PastNominationsComponent,
    DeleteModalComponent,
    ConfirmModalComponent,
    EmptyModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    EditorModule,
  ],
  providers: [],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
