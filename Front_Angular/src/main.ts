import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.body.classList.add('modo-oscuro');
}
