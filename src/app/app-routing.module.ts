import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductModule } from './modules/product/product.module';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'products', loadChildren: () => ProductModule },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
