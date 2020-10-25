import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkingWithListsPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: WorkingWithListsPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WorkingWithListsPageRoutingModule {}
