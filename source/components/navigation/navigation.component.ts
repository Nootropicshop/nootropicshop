import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
	selector: 'Navigation',
	styleUrls: ['./navigation.component.scss'],
	templateUrl: './navigation.component.html'
})
export class NavigationComponent {
	public constructor(public readonly title: Title) {}
}
