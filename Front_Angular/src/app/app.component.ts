import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BuscadorComponent} from './Views/buscador/buscador.component';
import {ResultadoComponent} from './Views/resultado/resultado.component';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [RouterOutlet, BuscadorComponent, ResultadoComponent],
})
export class AppComponent {
	constructor() {
		let copyright: HTMLSpanElement | null = document.getElementById('copyright');
		let data = new Date().getFullYear();
		if (copyright) {
			copyright.textContent = data.toString();
		}
	}

	cambiaEstilo() {
		console.log(document.body.classList.toString());

		if (document.body.classList.toString().includes('modo-oscuro')) {
			document.body.classList.remove('modo-oscuro');
		} else {
			document.body.classList.add('modo-oscuro');
		}
	}
}
