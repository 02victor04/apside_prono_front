import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JoueurService } from 'src/app/services/joueurs/joueur.service';
import { Joueurs } from 'src/app/Models/joueur';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {

  firstName: FormControl;
  lastName: FormControl;
  subscriptionDate: FormControl;
  mail: FormControl;
  
 
  userForm: FormGroup;
  joueurs: Joueurs;

  constructor(private router: Router, private joueurService: JoueurService, private builder: FormBuilder) { }


  ngOnInit() {

  this.firstName = new FormControl('', Validators.required);
  this.lastName = new FormControl('', Validators.required);
  this.mail = new FormControl('', Validators.required);

  this.userForm = this.builder.group({
    firstName: this.firstName,
    lastName: this.lastName,
    mail: this.mail
  });
  
}

onSubmit() {
  console.log("firstName : " + this.firstName.value);
  console.log("lastName : " + this.lastName.value);
  console.log("mail : " + this.mail.value);

  let player = new Joueurs(null,this.firstName.value, this.lastName.value,
    new Date(), this.mail.value);

    console.log(player)

  this.joueurService.createPlayer(player)
    .subscribe(
    data => this.joueurs = data)

}

}


