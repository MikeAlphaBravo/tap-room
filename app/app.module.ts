import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { BeverageListComponent } from './beverage-list.component';
import { EditBeverageComponent } from './edit-beverage.component';
import { NewBeverageComponent } from './new-beverage.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, BeverageListComponent, EditBeverageComponent, NewBeverageComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
