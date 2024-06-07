import { Component } from '@angular/core';
import { JuzgadoService } from '../../Controllers/JuzgadoService.service';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
	constructor(public juzgadoService: JuzgadoService) {
		
	}

}
