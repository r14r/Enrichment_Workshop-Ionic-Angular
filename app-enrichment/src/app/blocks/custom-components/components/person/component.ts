import { Component, OnInit } from '@angular/core';

/**
 * https://edupala.com/custom-component-in-ionic/
 */
@Component({
	selector: 'app-person',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class PersonComponent {
	data: any = { myToggle: true };
	constructor() {}
}
