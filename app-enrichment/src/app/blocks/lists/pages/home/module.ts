import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkingWithListsPageRoutingModule } from './routing.module';
import { WorkingWithListsPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		WorkingWithListsPageRoutingModule,
	],
	declarations: [WorkingWithListsPage],
})
export class WorkingWithListsPageModule {}
