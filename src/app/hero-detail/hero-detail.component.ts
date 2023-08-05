import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'app/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'app/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    this.heroService.getHeroByID(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }
}
