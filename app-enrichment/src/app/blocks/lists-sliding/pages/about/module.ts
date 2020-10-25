import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageRoutingModule } from './routing.module';
import { Page } from './page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, PageRoutingModule],
	declarations: [Page],
})
export class PageModule {}
