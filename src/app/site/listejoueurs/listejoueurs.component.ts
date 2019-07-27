import { Component, OnInit, Input } from '@angular/core';
import { Joueurs } from '../../Models/joueur';
import { JoueurService } from '../../services/joueurs/joueur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listejoueurs',
  templateUrl: './listejoueurs.component.html',
  styleUrls: ['./listejoueurs.component.sass']
})
export class ListejoueursComponent implements OnInit {
  // @Input() joueur: Joueurs;
  listejoueurs: Joueurs[];
  selectedJoueur: Joueurs;
  joueur: Joueurs;
  
 
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

    getPlayerById(id: number){
      this.joueurService.getPlayerById(id).subscribe(
        data => this.selectedJoueur = data)
    }

    modifyPlayer(id: number){
      this.joueurService.modifyPlayer(id).subscribe(
        value=> {this.joueurService.getPlayerById(id).subscribe(data => this.joueur = data);
        })

      }
    }

    // this.route.paramMap.subscribe(param => {
    //   let id = parseInt(param.get('id'));
    //   this.joueurService.getPlayerById(id).subscribe(data => this.joueur = data);
    // });

  
  
 
  
