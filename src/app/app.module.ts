import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateItemComponent } from './update-item/update-item.component';
import { SearchItemComponent } from './search-item/search-item.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    ItemDetailsComponent,
    ItemListComponent,
    UpdateItemComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
