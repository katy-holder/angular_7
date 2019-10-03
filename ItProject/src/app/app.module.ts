import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { RowProductComponent } from './row-product/row-product.component';
import { SearchPipe } from './search.pipe';
// import { SortPipe } from './sort.pipe';
import { from } from 'rxjs';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SearchPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
