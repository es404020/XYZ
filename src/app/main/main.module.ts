import { NgModule } from '@angular/core';


import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../component/home/home.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UserData } from '../@core/data/users';
import { BankingComponent } from '../component/banking/banking.component';
import { ExpensesComponent } from '../component/expenses/expenses.component';
import { SupplierComponent } from '../component/supplier/supplier.component';
import { SupplierinfoComponent } from '../component/supplierinfo/supplierinfo.component';




@NgModule({
  declarations: [HomeComponent, DashboardComponent, BankingComponent, ExpensesComponent, SupplierComponent, SupplierinfoComponent],
  imports: [
    
    MainRoutingModule,
    SharedModule,
 
  ],
  providers:[]
})
export class MainModule { }
