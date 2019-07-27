import { Component, OnInit } from '@angular/core';
import { Joueurs } from '../../Models/joueur';
import { ActivatedRoute } from '@angular/router';
import { JoueurService } from '../../services/joueurs/joueur.service';

@Component({
  selector: 'app-detailjoueur',
  templateUrl: './detailjoueur.component.html',
  styleUrls: ['./detailjoueur.component.sass']
})
export class DetailjoueurComponent implements OnInit {

  joueur: Joueurs;

  constructor(private route: ActivatedRoute, private joueurService: JoueurService) { 

  }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      let id = parseInt(param.get('id'));
      this.joueurService.getPlayerById(id).subscribe(data => this.joueur = data);
    });

  }
}
