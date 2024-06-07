import {Injectable} from '@angular/core';
import {Juzgado} from '../Models/Juzgado';

@Injectable({
	providedIn: 'root',
})
export class JuzgadoService {
	public juzgados: Map<Juzgado, Juzgado[]> = new Map();
	public resultados: Juzgado[] = [];

	constructor() {}

	busca(campo: string) {}
}
