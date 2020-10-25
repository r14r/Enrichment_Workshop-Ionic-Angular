import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkingWithServicesPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: WorkingWithServicesPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WorkingWithServicesPageRoutingModule {}
