import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'folder/Inbox',
		pathMatch: 'full',
	},
	{
		path: 'folder/:id',
		loadChildren: () =>
			import('./folder/folder.module').then((m) => m.FolderPageModule),
	},
	{
		path: 'about',
		loadChildren: () =>
			import('./pages/about/module').then((m) => m.AboutPageModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/home/module').then((m) => m.HomePageModule),
	},
	{
		path: 'default',
		loadChildren: () =>
			import('./pages/default/default.module').then(
				(m) => m.DefaultPageModule
			),
	},
	{
		path: 'confirm',
		loadChildren: () =>
			import('./blocks/services/pages/confirm/module').then(
				(m) => m.ConfirmPageModule
			),
	},
	/**/
	{
		path: 'services',
		loadChildren: () =>
			import('./blocks/services/pages/home/module').then(
				(m) => m.WorkingWithServicesPageModule
			),
	},
	/**/
	{
		path: 'lists',
		loadChildren: () =>
			import('./blocks/lists/pages/home/module').then(
				(m) => m.WorkingWithListsPageModule
			),
	},
	/**/
	{
		path: 'lists-sliding',
		loadChildren: () =>
			import('./blocks/lists-sliding/pages/home/module').then(
				(m) => m.PageModule
			),
	},

	/**/
	{
		path: 'components',
		loadChildren: () =>
			import('./blocks/components/pages/home/module').then(
				(m) => m.PageModule
			),
	},
	/**/
	{
		path: 'custom-components',
		loadChildren: () =>
			import('./blocks/custom-components/pages/home/module').then(
				(m) => m.PageModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
