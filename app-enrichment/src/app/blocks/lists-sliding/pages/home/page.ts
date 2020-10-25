import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-sliders',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Page implements OnInit {
	public title: string;
	public folder: string;

	public data: any;

	public isSuccess: boolean;
	public isError: boolean;
	public isWarning: boolean;
	public canProceed: boolean;

	public items: Array<{
		title: string;
		icon: string;
		description: string;
		link: any;
		hidden: boolean;
	}>;

	private PREFIX = 'Sliders/Home';
	log(func, line = '') {
		console.log(`${this.PREFIX}::${func} | ${line}`);
	}
	/**
	 *
	 */
	constructor(
		private activatedRoute: ActivatedRoute,
		public toastCtrl: ToastController
	) {
		this.title = 'Working with Lists';

		this.log('constructor');
		this.items = [
			{
				title: 'About',
				icon: 'information-outline',
				description: 'Who we are. What we do. Why we’re here',
				link: 'about',
				hidden: false,
			},
			{
				title: 'Contact Us',
				icon: 'person-outline',
				description:
					'Drop us a line and get in touch we’d love to hear from you!',
				link: 'contact',
				hidden: false,
			},
			{
				title: 'Technologies',
				icon: 'hardware-chip-outline',
				description: 'Third party resources used by this app',
				link: 'technology',
				hidden: true,
			},
			{
				title: 'Tweets',
				icon: 'logo-twitter',
				description: 'The latest news updates from our Twitter account',
				link: 'tweets',
				hidden: false,
			},
		];
	}

	ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get('id');

		this.log('ngOnInit');
		/**/
		fetch('./assets/data/data.json')
			.then((res) => res.json())
			.then((json) => {
				this.data = json;

				console.log(this.data);
			});
	}

	async share(slidingItem: HTMLIonItemSlidingElement, item: any) {
		this.log('share');
		console.log('slidingItem', slidingItem);
		console.log('item', item);

		/**/
		slidingItem.close();

		// Create a toast
		const toast = await this.toastCtrl.create({
			header: `${item.name} was successfully added as a favorite.`,
			duration: 3000,
			buttons: [
				{
					text: 'Close',
					role: 'cancel',
				},
			],
		});

		// Present the toast at the bottom of the page
		await toast.present();
	}

	async favorite(slidingItem: HTMLIonItemSlidingElement, item: any) {
		this.log('favorite');

		console.log('slidingItem', slidingItem);
		console.log('item', item);

		/**/
		slidingItem.close();
	}

	async unread(slidingItem: HTMLIonItemSlidingElement, item: any) {
		this.log('unread');

		console.log('slidingItem', slidingItem);
		console.log('item', item);

		/**/
		slidingItem.close();
	}

	async edit(slidingItem: HTMLIonItemSlidingElement, item: any) {
		this.log('edit', `Edit ${item.title} page`);

		console.log('slidingItem', slidingItem);
		console.log('item', item);

		/**/
		slidingItem.close();
	}

	async delete(slidingItem: HTMLIonItemSlidingElement, item: any) {
		this.log('delete', `Delete ${item.title} `);

		console.log('slidingItem', slidingItem);
		console.log('item', item);

		/**/
		slidingItem.close();
	}
}
