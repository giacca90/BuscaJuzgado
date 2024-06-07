import {Component} from '@angular/core';
import {JuzgadoService} from '../../Controllers/JuzgadoService.service';

@Component({
	selector: 'app-buscador',
	standalone: true,
	imports: [],
	templateUrl: './buscador.component.html',
	styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
	constructor(public juzgadoService: JuzgadoService) {}

	busca() {
		this.juzgadoService.busca(
			(document.getElementById('nombre') as HTMLInputElement).value,
			(document.getElementById('pueblo') as HTMLInputElement).value,
			(document.getElementById('provincia') as HTMLInputElement).value,
			(document.getElementById('comunidad') as HTMLInputElement).value,
		);
	}
}
