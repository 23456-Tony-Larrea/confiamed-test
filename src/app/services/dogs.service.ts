import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { msDogsURL } from '../urls/url';
import { RegisterDogsDTO } from '../class/RegisterDogs';
import { Observable } from 'rxjs';
import { Dogs } from '../models/Dogs';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  constructor(private http: HttpClient) {}

  registroMacota(usuarios: RegisterDogsDTO): Observable<any> {
    return this.http.post(`${msDogsURL}`, usuarios);
  }
  verMascota(): Observable<{ data: Dogs[] }> {
    return this.http.get<{ data: Dogs[] }>(msDogsURL);
  }
  actualizarMascota(id: string, Dogs: RegisterDogsDTO): Observable<any> {
    return this.http.put(`${msDogsURL}/${id}`, Dogs);
  }

  eliminarMascota(id: string): Observable<any> {
    return this.http.delete(`${msDogsURL}/${id}`);
  }

  getMacotaById(id: string): Observable<Dogs> {
    return this.http.get<Dogs>(`${msDogsURL}/${id}`);
  }
}
