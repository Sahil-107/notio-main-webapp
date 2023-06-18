import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { DesktopComponent } from './desktop/desktop.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: '',
    component: DesktopComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
