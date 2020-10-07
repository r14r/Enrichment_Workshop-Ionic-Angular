import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'learn',
        loadChildren: () => import('./learn/learn.module').then((m) => m.LearnModule)
      },
      {
        path: 'explore',
        loadChildren: () => import('./explore/explore.module').then((m) => m.ExploreModule)
      },
      {
        path: 'downloads',
        loadChildren: () => import('./downloads/downloads.module').then((m) => m.DownloadsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
      },
      {
        path: '',
        redirectTo: 'learn',
        pathMatch: 'prefix'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
