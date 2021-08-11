import {
	AfterViewInit,
	Component,
	ElementRef,
	Host,
	HostListener,
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
export class HomePage implements OnInit, AfterViewInit {
	@ViewChild('header', { static: true })
	public header!: ElementRef<HTMLElement>;
	@ViewChild('hero', { static: true })
	public hero!: ElementRef<HTMLImageElement>;
	@ViewChild('showcase', { static: true })
	public showcase!: ElementRef<HTMLImageElement>;
	private image: string = 'url(../../assets//hero.png)';
	public constructor(
		public readonly title: Title,
		private readonly renderer: Renderer2
	) {}
	ngAfterViewInit(): void {}
	ngOnInit(): void {
		this.renderer.setStyle(
			this.hero.nativeElement,
			'height',
			`${
				(window.screen.availHeight -
					this.header.nativeElement.offsetHeight) /
				2
			}px`
		);
		this.renderer.setStyle(
			this.hero.nativeElement,
			'background-image',
			this.image
		);
		this.renderer.setStyle(
			this.showcase.nativeElement,
			'grid-auto-rows',
			`${this.showcase.nativeElement.firstElementChild?.clientWidth}px`
		);
	}
	@HostListener('window:resize')
	public resize(): void {
		this.renderer.setStyle(
			this.showcase.nativeElement,
			'grid-auto-rows',
			`${this.showcase.nativeElement.firstElementChild?.clientWidth}px`
		);
		console.log(
			this.showcase.nativeElement.firstElementChild
				?.clientWidth
		);
	}
}
