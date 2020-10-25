import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
	selector: 'app-tweets',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Page {
	title = 'Tweets';

	@ViewChild('picSlider', { static: false }) viewer: IonSlides;

	constructor() {}

	slideOpts = {
		initialSlide: 1,
		speed: 400,
		autoplay: true,
	};

	onSlideMoved(event) {
		/** isEnd true when slides reach at end slide */
		event.target.isEnd().then((isEnd) => {
			console.log('End of slide', isEnd);
		});

		event.target.isBeginning().then((istrue) => {
			console.log('End of slide', istrue);
		});
	}
}
