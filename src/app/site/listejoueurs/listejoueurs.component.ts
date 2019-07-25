import { Component, OnInit } from '@angular/core';
import { Joueurs } from '../../Models/joueur';
import { JoueurService } from '../../services/joueurs/joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listejoueurs',
  templateUrl: './listejoueurs.component.html',
  styleUrls: ['./listejoueurs.component.sass']
})
export class ListejoueursComponent implements OnInit {

  listejoueurs: Joueurs[];
  selectedJoueur: Joueurs;
 
  constructor(private router: Router, private joueurService: JoueurService) { }

  ngOnInit() {

    this.listejoueurs
    this.joueurService.getAllPlayer()
      .subscribe(
        data => this.listejoueurs = data)
  }

   selectJoueur(joueur: Joueurs) {
    this.selectedJoueur = joueur;
    let link = ['/listejoueurs', joueur.id];
    this.router.navigate(link);
  }

  deletePlayerById(id: number){
    this.joueurService.deletePlayerById(id).subscribe(
      value => {this.joueurService.getAllPlayer().subscribe(
        listejoueursNew=> this.listejoueurs = listejoueursNew);
      })
    }

  

  }
  
 
  
