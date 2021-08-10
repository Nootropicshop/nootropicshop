import { MainModule } from './main.module';
import { enableProdMode } from '@angular/core';
import { environment } from '../environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
if (environment.production) {
	enableProdMode();
}
platformBrowserDynamic()
	.bootstrapModule(MainModule)
	.catch((error) => console.error(error));
