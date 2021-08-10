import {
	Component,
	ElementRef,
	HostListener,
	OnInit,
	ViewChild
} from '@angular/core';
@Component({
	styleUrls: ['./default.component.scss'],
	templateUrl: './default.component.html'
})
export class DefaultLayout implements OnInit {
	@ViewChild('footer', { static: true })
	private footer!: ElementRef<HTMLElement>;
	@ViewChild('header', { static: true })
	private header!: ElementRef<HTMLElement>;
	public height!: number;
	public ngOnInit(): void {
		this.height =
			window.innerHeight -
			this.header.nativeElement.offsetHeight -
			this.footer.nativeElement.offsetHeight;
	}
	@HostListener('window:orientationchange')
	public orientationchange(): void {
		this.height =
			window.innerHeight -
			this.header.nativeElement.offsetHeight -
			this.footer.nativeElement.offsetHeight;
	}
	@HostListener('window:resize')
	public resize(): void {
		this.height =
			window.innerHeight -
			this.header.nativeElement.offsetHeight -
			this.footer.nativeElement.offsetHeight;
	}
}
