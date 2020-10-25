import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkingWithServicesPage } from './page';

describe('WorkingWithServicesPage', () => {
	let component: WorkingWithServicesPage;
	let fixture: ComponentFixture<WorkingWithServicesPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WorkingWithServicesPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(WorkingWithServicesPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
