import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page } from './page';

const routes: Routes = [
	{
		path: '',
		component: Page,
	},
	{
		path: 'about',
		loadChildren: () => import('../about/module').then((m) => m.PageModule),
	},
	{
		path: 'tweets',
		loadChildren: () =>
			import('../tweets/module').then((m) => m.PageModule),
	},
	{
		path: 'contact',
		loadChildren: () =>
			import('../contact/module').then((m) => m.PageModule),
	},
	{
		path: 'technology',
		loadChildren: () =>
			import('../technology/module').then((m) => m.PageModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PageRoutingModule {}
