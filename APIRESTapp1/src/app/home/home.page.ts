import { APIServiceService } from './../Services/apiservice.service';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


// Declaración de variables para manejar el ID, el Nombre y la imagen del Pokémon


  pokemonID: number = 0;
  pokemonName: string = '';

  pokemonNameID: string= '';
  pokemonImageID: any;

  pokemonNameName: string= ''; 
  pokemonIDName: number=0;
  pokemonImageName: any;




  pokemonID2: number = 0;
  pokemonName2: string = '';

  pokemonNameID2: string= '';
  pokemonImageID2: any;

  pokemonNameName2: string= ''; 
  pokemonIDName2: number=0;
  pokemonImageName2: any;









  constructor(private api: APIServiceService, private sanitizer: DomSanitizer) {}

  // Función para obtener datos del Pokémon por ID
  getPokemonDataID(id: number) {
    try {
      let pokemonData;

      this.api.getPokemonID(id).subscribe((response) => {
        pokemonData = response;

        // Actualiza las variables con los datos del Pokémon por ID
        this.pokemonNameID = pokemonData.name;
        this.pokemonImageID = this.sanitizer.bypassSecurityTrustUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);

        console.log(this.pokemonNameID);
      });
    } catch (error) {
      console.log(error);
    }
  }


  

  // Función para obtener datos del Pokémon por Nombre

  getPokemonDataName(name: string) {
    try {
      let pokemonData;

      this.api.getPokemonName(name).subscribe((response) => {
        pokemonData = response;

        // Actualiza las variables con los datos del Pokémon por Nombre
        this.pokemonIDName = pokemonData.id;
        this.pokemonNameName = pokemonData.name
        this.pokemonImageName = this.sanitizer.bypassSecurityTrustUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonIDName}.png`);

        console.log(this.pokemonIDName);
      });
    } catch (error) {
      console.log(error);
    }
  }





  









  getItemDataID(id2: number) {
    try {
      let itemData;

      this.api.getItemID(id2).subscribe((response) => {
        itemData = response;

        // Actualiza las variables con los datos del Pokémon por ID
        this.pokemonNameID2 = itemData.name;
        this.pokemonImageID2 = this.sanitizer.bypassSecurityTrustUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.pokemonNameID2}.png`);

        console.log(this.pokemonNameID2);
      });
    } catch (error) {
      console.log(error);
    }
  }



  getItemDataName(name2: string) {
    try {
      let itemData;

      this.api.getItemName(name2).subscribe((response) => {
        itemData = response;

        // Actualiza las variables con los datos del Pokémon por Nombre
        this.pokemonIDName2 = itemData.id;
        this.pokemonNameName2 = itemData.name
        this.pokemonImageName2 = this.sanitizer.bypassSecurityTrustUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name2}.png`);

        console.log(this.pokemonIDName2);
      });
    } catch (error) {
      console.log(error);
    }
  }


}
