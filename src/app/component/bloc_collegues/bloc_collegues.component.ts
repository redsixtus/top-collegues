import {Component, Input, OnInit} from '@angular/core';

import {Staff} from "./Staff";
import {Avis} from "../avis/Avis";


@Component({
  selector: 'app-bloc',
  templateUrl: './bloc_collegues.component.html',
  styleUrls: ['./bloc_collegues.component.css']
})
export class Bloc_colleguesComponent implements OnInit{

  constructor() {
  }
 traiterLike(avis:Avis){
    if (avis==Avis.AIMER&&this.staff.score==1000){
      this.staff.score+=100;
    }else if(avis==Avis.DETESTER&&this.staff.score==-1000){
      this.staff.score-=100;
    }
 }

  @Input() staff : Staff={
  nom:"doe",
    prenom:"john",
    grade:"R&D",
    score:200,
    photoprofil:"https://thispersondoesnotexist.com/image"
}

  ngOnInit(): void {
  }



}
