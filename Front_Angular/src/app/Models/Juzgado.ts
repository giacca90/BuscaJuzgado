export class Juzgado {
	id: number | null = null;
	nombre: string | null = null;
	direccion: string | null = null;
	codigo_postal: string | null = null;
	pueblo: string | null = null;
	provincia: string | null = null;
	comunidad: string | null = null;
	telefono: string | null = null;
	fax: string | null = null;
	correo: string | null = null;
	juez: string | null = null;

	constructor() {}

	toString() {
		return 'Nombre: ' + this.nombre;
	}
}
