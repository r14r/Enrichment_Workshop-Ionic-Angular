import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
	public pages: Array<{
		title: string;
		icon: string;
		description: string;
		link: any;
	}>;

	private PREFIX = 'Sliders/Home';
	log(func, line = '') {
		console.log(`${this.PREFIX}::${func} | ${line}`);
	}
	/**
	 *
	 */
	constructor(private activatedRoute: ActivatedRoute) {
		this.title = 'Working with Lists';

		this.log('constructor');
		this.pages = [
			{
				title: 'About',
				icon: 'information-outline',
				description: 'Who we are. What we do. Why we’re here',
				link: 'about',
			},
			{
				title: 'Contact Us',
				icon: 'person-outline',
				description:
					'Drop us a line and get in touch we’d love to hear from you!',
				link: 'contact',
			},
			{
				title: 'Technologies',
				icon: 'hardware-chip-outline',
				description: 'Third party resources used by this app',
				link: 'technology',
			},
			{
				title: 'Tweets',
				icon: 'logo-twitter',
				description: 'The latest news updates from our Twitter account',
				link: 'tweets',
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

	share() {
		this.log('share');
	}

	favorite() {
		this.log('favorite');
	}

	unread() {
		this.log('unread');
	}

	edit(page) {
		this.log(
			`I could do a lot more than just print out this message for the ${page} page to the browser console`
		);
	}

	delete(page) {
		this.log(`Yep, I’m an under-performer for the ${page} page too :(`);
	}
}
