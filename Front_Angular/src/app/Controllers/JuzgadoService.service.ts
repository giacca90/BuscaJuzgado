import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Juzgado} from '../Models/Juzgado';

@Injectable({
	providedIn: 'root',
})
export class JuzgadoService {
	public juzgados: Map<Juzgado, Juzgado[]> = new Map();
	public resultados: Juzgado[] = [];
	private url: string = 'http://localhost:8080/juzgados/custom';
	constructor(private http: HttpClient) {}

	busca(nombre: string, pueblo: string, provincia: string, comunidad: string) {
		let consulta: Juzgado = new Juzgado();
		if (nombre.length != 0) consulta.nombre = nombre;
		if (pueblo.length != 0) consulta.pueblo = pueblo;
		if (provincia.length != 0) consulta.provincia = provincia;
		if (comunidad.length != 0) consulta.comunidad = comunidad;

		this.http.post<Juzgado[]>(this.url, consulta).subscribe({
			next: (response) => {
				this.resultados = response;
			},

			error: (error) => {
				console.error(error);
			},
			complete: () => {},
		});
	}
}
