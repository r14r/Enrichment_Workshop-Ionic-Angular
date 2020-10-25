import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: ConfirmPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConfirmPageRoutingModule {}
