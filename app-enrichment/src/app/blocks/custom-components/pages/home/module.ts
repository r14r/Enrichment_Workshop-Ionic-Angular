import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageRoutingModule } from './routing.module';
import { Page } from './page';

import { PersonComponent } from '../../components/person/component';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, PageRoutingModule],
	entryComponents: [PersonComponent],
	declarations: [Page, PersonComponent],
})
export class PageModule {}
