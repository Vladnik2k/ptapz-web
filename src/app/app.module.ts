import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './services/details.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './details/detail/detail.component';
import { AddEditDetailComponent } from './add-edit-detail/add-edit-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddEditSupplierComponent } from './add-edit-supplier/add-edit-supplier.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SupplierService } from './services/supplier.service';
import { SuppliesComponent } from './supplies/supplies.component';
import { SupplyComponent } from './supplies/supply/supply.component';
import { SupplyService } from './services/supply.service';
import { AddSupplyComponent } from './add-supply/add-supply.component';
import { AddPriceHistoryComponent } from './add-price-history/add-price-history.component';
import { PricesHistoryComponent } from './prices-history/prices-history.component';
import { PriceHistoryComponent } from './prices-history/price-history/price-history.component';

const appRoutes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'details/new', component: AddEditDetailComponent },
  { path: 'details/edit/:detailId', component: AddEditDetailComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'suppliers/new', component: AddEditSupplierComponent },
  { path: 'suppliers/edit/:supplierId', component: AddEditSupplierComponent },
  { path: 'supply', component: SuppliesComponent },
  { path: 'supply/new', component: AddSupplyComponent },
  { path: 'price-history', component: PricesHistoryComponent },
  { path: 'price-history/new', component: AddPriceHistoryComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailComponent,
    AddEditDetailComponent,
    NotFoundComponent,
    SuppliersComponent,
    AddEditSupplierComponent,
    SupplierComponent,
    SuppliesComponent,
    SupplyComponent,
    AddSupplyComponent,
    AddPriceHistoryComponent,
    PricesHistoryComponent,
    PriceHistoryComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DetailsService,
    SupplierService,
    SupplyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
