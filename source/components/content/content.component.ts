import {
	Component,
	ElementRef,
	HostListener,
	Input,
	OnInit,
	Renderer2
} from '@angular/core';
@Component({
	selector: 'Content',
	styleUrls: ['./content.component.scss'],
	templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
	@Input('availableHeight')
	public availableHeight!: number;
	public constructor(
		private element: ElementRef,
		private renderer: Renderer2
	) {}
	ngOnInit(): void {
		this.renderer.setStyle(
			this.element.nativeElement,
			'height',
			`${this.availableHeight}px`
		);
	}
	@HostListener('window:orientationchange')
	public orientationchange(): void {
		this.renderer.setStyle(
			this.element.nativeElement,
			'height',
			`${this.availableHeight}px`
		);
	}
	@HostListener('window:resize')
	public resize(): void {
		this.renderer.setStyle(
			this.element.nativeElement,
			'height',
			`${this.availableHeight}px`
		);
	}
}
