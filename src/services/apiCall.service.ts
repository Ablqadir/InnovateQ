import { Albums } from './../app/Class/albums';
import { Injectable } from '@angular/core';
import { Todos } from './../app/Class/todos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

constructor(private httpClient: HttpClient) { }
// Calling provided API
getAllTodos(): Observable<Todos[]>
{
  return this.httpClient.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
}

// Calling provided API

getAllAlbums(): Observable<Albums[]>
{
  return this.httpClient.get<Albums[]>('https://jsonplaceholder.typicode.com/photos');
}



}

