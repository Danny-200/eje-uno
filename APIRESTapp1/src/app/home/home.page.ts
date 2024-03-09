import { APIServiceService } from './../Services/apiservice.service';
import { Component } from '@angular/core';
import { PokemonData } from '../models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonQuery: string='';
  pokemonName: string='';
  pokemonImage: string='';
  pokemonTypes: { type: { name: string; } }[] = [];

  constructor(private apiService: APIServiceService) {}

  getPokemonData(query: string) {
    this.apiService.getPokemon(query).subscribe(
      (data: PokemonData) => {
        this.pokemonName = data.name;
        this.pokemonImage = data.sprites.front_default;
        this.pokemonTypes = data.types;
        console.log(`El tipo(s) de Pokémon de ${data.name} es/son:`, data.types);
      },
      (error: any) => {
        console.error('Error fetching Pokemon data:', error);
      }
    );
  }
}
