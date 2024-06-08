import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {JuzgadoService} from '../../Controllers/JuzgadoService.service';
import {ListaComponent} from '../lista/lista.component';
import {VentanaComponent} from '../ventana/ventana.component';

@Component({
	selector: 'app-buscador',
	standalone: true,
	imports: [VentanaComponent, MatDialogModule],
	templateUrl: './buscador.component.html',
	styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
	constructor(public juzgadoService: JuzgadoService, public dialog: MatDialog) {}

	busca() {
		this.juzgadoService.busca(
			(document.getElementById('nombre') as HTMLInputElement).value,
			(document.getElementById('pueblo') as HTMLInputElement).value,
			(document.getElementById('provincia') as HTMLInputElement).value,
			(document.getElementById('comunidad') as HTMLInputElement).value,
		);
	}

	abriVentana() {
		const dialogRef = this.dialog.open(VentanaComponent, {
			width: '80%',
			height: '80%',
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	abriLista() {
		let seleccion: string[] = [];
		let checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkboxes') as NodeListOf<HTMLInputElement>;
		if ((document.getElementById('checkTodos') as HTMLInputElement).checked) {
			checkboxes.forEach((box: HTMLInputElement) => {
				seleccion.push(box.id);
			});
		} else {
			checkboxes.forEach((box: HTMLInputElement) => {
				if (box.checked) seleccion.push(box.id);
			});
		}

		const dialogRef = this.dialog.open(ListaComponent, {
			width: '80%',
			height: '80%',
			data: seleccion,
		});
	}

	checkAll() {
		let source: HTMLInputElement = document.getElementById('checkTodos') as HTMLInputElement;
		let checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkboxes');
		if (source.checked) {
			checkboxes.forEach((box: HTMLInputElement) => {
				box.disabled = true;
			});
		} else {
			checkboxes.forEach((box: HTMLInputElement) => {
				box.disabled = false;
			});
		}
	}
}
