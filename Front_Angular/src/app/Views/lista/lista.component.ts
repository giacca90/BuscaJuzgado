import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {JuzgadoService} from '../../Controllers/JuzgadoService.service';
import {Juzgado} from '../../Models/Juzgado';

@Component({
	selector: 'app-lista',
	standalone: true,
	imports: [],
	templateUrl: './lista.component.html',
	styleUrl: './lista.component.css',
})
export class ListaComponent implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) public data: string[], public juzgadoService: JuzgadoService) {}

	ngOnInit(): void {
		let lista: HTMLDivElement = document.getElementById('lista') as HTMLDivElement;
		this.juzgadoService.resultados.forEach((juzgado: Juzgado) => {
			let fila: string = '';
			if (this.data.includes('nombre')) fila = fila + juzgado.nombre + ' ';
			if (this.data.includes('direccion')) fila = fila + juzgado.direccion + ' ';
			if (this.data.includes('codigo_postal')) fila = fila + juzgado.codigo_postal + ' ';
			if (this.data.includes('pueblo')) fila = fila + juzgado.pueblo + ' ';
			if (this.data.includes('provincia')) fila = fila + juzgado.provincia + ' ';
			if (this.data.includes('comunidad')) fila = fila + juzgado.comunidad + ' ';
			if (this.data.includes('telefono')) fila = fila + juzgado.telefono + ' ';
			if (this.data.includes('fax')) fila = fila + juzgado.fax + ' ';
			if (this.data.includes('correo')) fila = fila + juzgado.correo + ' ';
			if (this.data.includes('juez')) fila = fila + juzgado.juez + ' ';
			fila = fila + '<br>';
			let p: HTMLParagraphElement = document.createElement('p');
			p.innerHTML = fila;
			lista.appendChild(p);
		});
	}
}
