import { ItemDetailsComponent } from './item-details/item-details.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'item', pathMatch: 'full' },
  { path: 'items', component: ItemListComponent },
  { path: 'add', component: CreateItemComponent },
  { path: 'update/:id', component: UpdateItemComponent },
  { path: 'details/:id', component: ItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
