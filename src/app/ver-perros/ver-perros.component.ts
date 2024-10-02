import { Component } from '@angular/core';
import { Dogs } from '../models/Dogs';
import { DogsService } from '../services/dogs.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-perros',
  templateUrl: './ver-perros.component.html',
  styleUrls: ['./ver-perros.component.css'],
})
export class VerPerrosComponent {
  dogs: Dogs[] = [];
  searchTerm: string = '';
  displayedColumns: string[] = [
    'nombre',
    'estatura',
    'raza',
    'peso',
    'acciones',
  ];

  constructor(
    private dogsService: DogsService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  deleteDogs(dogs: Dogs) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dogsService.eliminarMascota(dogs.id!.toString()).subscribe(
          (response) => {
            console.log('Mascota eliminada con éxito', response);
            this.dogs = this.dogs.filter((u) => u.id !== dogs.id);
          },
          (error) => {
            console.error('Error al eliminar la mascota', error);
          }
        );
      }
    });
  }
  ngOnInit() {
    this.dogsService.verMascota().subscribe((response) => {
      this.dogs = response.data;
    });
  }
  editDogs(dogs: Dogs) {
    this.router.navigate(['/editar-mascotas', dogs.id]);
  }
  addDog() {
    this.router.navigate(['/agregar-mascotas']);
  }
}
