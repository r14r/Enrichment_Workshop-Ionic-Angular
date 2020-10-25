import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	public selectedIndex = 0;
	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'Lists', url: '/lists', icon: 'list' },
		{
			title: 'List Sliding',
			url: '/lists-sliding',
			icon: 'list',
		},
		{ title: 'Services', url: '/services', icon: 'service' },
		{
			title: 'Custom Components',
			url: '/custom-components',
			icon: 'components',
		},
		{
			title: 'Components',
			url: '/components',
			icon: 'components',
		},
		/*
		{ title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
		*/
	];
	public labels = [
		'Family',
		'Friends',
		'Notes',
		'Work',
		'Travel',
		'Reminders',
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	ngOnInit() {
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(
				(page) => page.title.toLowerCase() === path.toLowerCase()
			);
		}
	}
}
