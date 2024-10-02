import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterDogsDTO } from '../class/RegisterDogs';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css'],
})
export class AgregarMascotaComponent implements OnInit {
  id: string | null = null;
  nombre: string = '';
  raza: string = '';
  estatura: number = 0;
  peso: number = 0;
  isEditMode: boolean = false;
  constructor(
    private dogsService: DogsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditMode = true;
      this.dogsService.getMacotaById(this.id).subscribe((mascota) => {
        this.nombre = mascota.nombre;
        this.estatura = mascota.estatura;
        this.peso = mascota.peso;
        this.raza = mascota.raza;
      });
    }
  }

  onSubmit() {
    const dogsData: RegisterDogsDTO = {
      nombre: this.nombre,
      raza: this.raza,
      estatura: this.estatura,
      peso: this.peso,
    };

    if (this.isEditMode && this.id) {
      const dogsWithId = { ...dogsData, id: this.id };
      this.dogsService.actualizarMascota(this.id, dogsWithId).subscribe(
        (response) => {
          this.snackBar.open('Usuario actualizado con éxito', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar'],
            verticalPosition: 'top',
          });
          this.router.navigate(['/ver-usuarios']);
        },
        (error) => {
          this.snackBar.open('Error en la actualización', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar'],
            verticalPosition: 'top',
          });
        }
      );
    } else {
      this.dogsService.registroMacota(dogsData).subscribe(
        (response) => {
          this.snackBar.open('Macota creado con éxito', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar'],
            verticalPosition: 'top',
          });
          this.router.navigate(['/ver-mascotas']);
        },
        (error) => {
          this.snackBar.open('Error en el registro', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar'],
            verticalPosition: 'top',
          });
        }
      );
    }
  }
}
