import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface PokemonType {
  type: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
    url: string; // Si necesitas la URL también
  };
}

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  types: Type[];
  stats: { base_stat: number }[];
}

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModalComponent {
  types: string[];

  constructor(
    public dialogRef: MatDialogRef<PokemonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PokemonData // Usar la interfaz aquí
  ) {
    this.types = data.types.map((type: Type) => type.type.name); // Definir el tipo explícitamente
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
