import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-folder',
	templateUrl: './folder.page.html',
	styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
	public folder: string;

	data: any;

	public isSuccess: boolean;
	public isError: boolean;
	public isWarning: boolean;
	public canProceed: boolean;
	public pages: Array<{
		title: string;
		thumb: string;
		description: string;
		link: any;
	}>;

	/**
	 *
	 */
	constructor(private activatedRoute: ActivatedRoute) {
		this.pages = [
			{
				title: 'About',
				thumb: './assets/images/about.png',
				description: 'Who we are. What we do. Why we’re here',
				link: '/about',
			},
			{
				title: 'Contact Us',
				thumb: './assets/images/contact.png',
				description:
					'Drop us a line and get in touch we’d love to hear from you!',
				link: '/contact',
			},
			{
				title: 'Technologies',
				thumb: './assets/images/tech.png',
				description: 'Third party resources used by this app',
				link: '/technology',
			},
			{
				title: 'Tweets',
				thumb: 'assets/images/twitter.png',
				description: 'The latest news updates from our Twitter account',
				link: 'TweetsPage',
			},
		];
	}

	ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get('id');

		/**/
		fetch('./assets/data/data.json')
			.then((res) => res.json())
			.then((json) => {
				this.data = json;

				console.log(this.data);
			});
	}

	share() {
		console.log('share');
	}

	favorite() {
		console.log('favorite');
	}

	unread() {
		console.log('unread');
	}

	edit(page) {
		console.log(
			`I could do a lot more than just print out this message for the ${page} page to the browser console`
		);
	}

	delete(page) {
		console.log(`Yep, I’m an under-performer for the ${page} page too :(`);
	}
}
