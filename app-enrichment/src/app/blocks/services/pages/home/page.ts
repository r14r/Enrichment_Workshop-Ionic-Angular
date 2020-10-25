import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-services',
	templateUrl: 'page.html',
	styleUrls: ['page.scss'],
})
export class WorkingWithServicesPage implements OnInit {
	user: any;

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.user = this.userService;
	}
}
