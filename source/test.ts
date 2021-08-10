import 'zone.js/testing';

import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { getTestBed } from '@angular/core/testing';

declare const require: {
	context(
		path: string,
		deep?: boolean,
		filter?: RegExp
	): {
		keys(): string[];
		<T>(id: string): T;
	};
};
getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting(),
	{ teardown: { destroyAfterEach: true } }
);
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
