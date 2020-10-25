import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-confirm',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class ConfirmPage implements OnInit {
	user: any;

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.user = this.userService;
	}
}
