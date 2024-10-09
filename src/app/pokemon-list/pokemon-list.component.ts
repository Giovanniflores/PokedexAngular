import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import axios from 'axios';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 20;
  totalPokemons: number = 0;
  currentPage: number = 1;
  pages: number[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  async getPokemons() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`);
      this.pokemons = response.data.results;
      this.totalPokemons = response.data.count;
      this.calculatePages();
    } catch (error) {
      console.error(error);
    }
  }

  calculatePages() {
    this.pages = [];
    const totalPages = Math.ceil(this.totalPokemons / this.limit);
    for (let i = 1; i <= totalPages; i++) {
      this.pages.push(i);
    }
  }

  async openPokemonModal(pokemon: any) {
    try {
      const response = await axios.get(pokemon.url);
      this.dialog.open(PokemonModalComponent, {
        data: response.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  nextPage() {
    if (this.offset + this.limit < this.totalPokemons) {
      this.offset += this.limit;
      this.currentPage++;
      this.getPokemons();
    }
  }

  prevPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.currentPage--;
      this.getPokemons();
    }
  }

  goToPage(page: number) {
    this.offset = (page - 1) * this.limit;
    this.currentPage = page;
    this.getPokemons();
  }
  

handlePageEvent(event: PageEvent) {
  this.offset = event.pageIndex * event.pageSize;
  this.limit = event.pageSize;
  this.getPokemons();
}



}
