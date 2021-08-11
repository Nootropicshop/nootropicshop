import {
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild
} from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
	selector: 'HomePage',
	styleUrls: ['./home.component.scss'],
	templateUrl: './home.component.html'
})
export class HomePage implements OnInit {
	@ViewChild('header', { static: true })
	public header!: ElementRef<HTMLElement>;
	private height: number = 0;
	@ViewChild('hero', { static: true })
	public hero!: ElementRef<HTMLImageElement>;
	private image: string = 'url(../../assets//hero.png)';
	public constructor(
		public readonly title: Title,
		private readonly renderer: Renderer2
	) {}
	ngOnInit(): void {
		this.height =
			window.screen.availHeight -
			this.header.nativeElement.offsetHeight;
		this.renderer.setStyle(
			this.hero.nativeElement,
			'height',
			`${this.height * 0.5}px`
		);
		this.renderer.setStyle(
			this.hero.nativeElement,
			'background-image',
			this.image
		);
	}
}
