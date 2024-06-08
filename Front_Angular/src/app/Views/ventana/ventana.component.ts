import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { JuzgadoService } from '../../Controllers/JuzgadoService.service';
import { Juzgado } from '../../Models/Juzgado';

@Component({
	selector: 'app-ventana',
	standalone: true,
	imports: [MatDialogModule, CommonModule],
	templateUrl: './ventana.component.html',
	styleUrl: './ventana.component.css',
})
export class VentanaComponent implements OnInit {
	lista: String = '';
	constructor(public juzgadoService: JuzgadoService) {}

	ngOnInit(): void {
		let ventana: HTMLDivElement = document.getElementById('ventana') as HTMLDivElement;
		this.juzgadoService.resultados.forEach((juzgado: Juzgado) => {
			let parrafo = document.createElement('p');

			// Asignar el contenido del párrafo
			parrafo.innerHTML = `
        Nombre: ${juzgado.nombre}<br>
        Dirección: ${juzgado.direccion}<br>
        Código Postal: ${juzgado.codigo_postal}<br>
        Pueblo: ${juzgado.pueblo}<br>
        Provincia: ${juzgado.provincia}<br>
        Comunidad: ${juzgado.comunidad}<br>
        Teléfono: ${juzgado.telefono}<br>
        Fax: ${juzgado.fax}<br>
        Correo Electrónico: ${juzgado.correo}<br>
        Juez Representante: ${juzgado.juez}<br>
    `;

			// Agregar el párrafo al contenedor ventana
			ventana.appendChild(parrafo);

			// Agregar un elemento <hr> después de cada conjunto de líneas
			ventana.appendChild(document.createElement('hr'));
		});
	}
}
