import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonData } from '../models/pokemon.model';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 
import { environment } from 'src/environments/environment';


firebase.initializeApp(environment.firebaseConfig);

const db = firebase.firestore();
const pokemonTypesCollection = db.collection('pokemonTypes');

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }//private afs: AngularFirestore

  getPokemon(query: string): Observable<PokemonData> {
    const url = `${this.apiUrl}pokemon/${query}`;
    return this.http.get<PokemonData>(url).pipe(
      map(response => {
 const types = response.types.map(type => ({ type: type.type }));
 const pokemonTypes = types.map(t => t.type.name); // Obtener todos los tipos
 this.savePokemonTypesToFirestore(pokemonTypes);
 return { ...response, types };
      })
    );
  }

  private savePokemonTypesToFirestore(pokemonTypes: string[]) {
    pokemonTypesCollection.doc('Pokemon').set({ types: pokemonTypes })
      .then(() => {
        console.log('Tipos de Pokémon guardados exitosamente');
      })
      .catch((error) => {
        console.error('Error al guardar los tipos de Pokémon: ', error);
      });
  }

}