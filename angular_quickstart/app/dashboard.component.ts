import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})


export class DashboardComponent {
	heroes: Hero[] = [];
	selectedHero : Hero;

  	constructor(
  		private router: Router,
  		private heroService: HeroService
  	) { }

  	ngOnInit(): void {
    	this.heroService.getHeroes()
      	.then(heroes => this.heroes = heroes.slice(0, 5));
  	}

  	onSelect(hero : Hero):void{
  		this.selectedHero = hero;
  	}

  	gotoDetail(): void{
  		this.router.navigate(['/detail', this.selectedHero.id]);
  	}

 }
