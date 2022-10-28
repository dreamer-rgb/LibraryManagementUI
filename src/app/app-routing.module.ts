import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddbooksComponent } from './admin/addbooks/addbooks.component';
import { RemovebooksComponent } from './admin/removebooks/removebooks.component';
import { IssuebooksComponent } from './admin/issuebooks/issuebooks.component';
import { ReturnbooksComponent } from './admin/returnbooks/returnbooks.component';

const routes: Routes = [
  //{path: '', component: AppComponent}, // Default Route
  {path: 'addbooks', component: AddbooksComponent},
  {path: 'removebooks', component: RemovebooksComponent},
  {path: 'issuebooks', component: IssuebooksComponent},
  {path: 'returnbooks', component: ReturnbooksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingPaths = [
    AddbooksComponent,
    RemovebooksComponent,
    IssuebooksComponent,
    ReturnbooksComponent
]
