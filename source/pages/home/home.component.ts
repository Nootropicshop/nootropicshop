import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
	selector: 'HomePage',
	styleUrls: ['./home.component.scss'],
	templateUrl: './home.component.html'
})
export class HomePage {
	public constructor(public readonly title: Title) {}
}
