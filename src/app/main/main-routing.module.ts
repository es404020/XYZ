import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { BankingComponent } from '../component/banking/banking.component';
import { ExpensesComponent } from '../component/expenses/expenses.component';
import { SupplierComponent } from '../component/supplier/supplier.component';
import { SupplierinfoComponent } from '../component/supplierinfo/supplierinfo.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'banking', component: BankingComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'suppliers', component: SupplierComponent },
      { path: 'suppliersinfo', component:SupplierinfoComponent },
      

      

    
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
