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
}
