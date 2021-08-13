import {Component, Input, OnInit} from '@angular/core';

import {Staff} from "./Staff";
import {Avis} from "../avis/Avis";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-bloc',
  templateUrl: './bloc_collegues.component.html',
  styleUrls: ['./bloc_collegues.component.css']
})
export class Bloc_colleguesComponent implements OnInit{

  msgErr=false;
 traiterLike(avis:Avis){
    if (avis==Avis.AIMER && this.staff.score<1000){
      this.postSrv.donnerUnAvisHttp(this.staff,Avis.AIMER)
        .subscribe(
          staff=>this.staff=staff,()=> this.msgErr = true
        )
    // this.postSrv.donnerUnAvis(this.staff,Avis.AIMER)
    //   .then(staff=>this.staff=staff)
    //   .catch(()=> this.msgErr = true)
    }else if(avis==Avis.DETESTER && this.staff.score>-1000) {
      this.postSrv.donnerUnAvisHttp(this.staff,Avis.DETESTER)
        .subscribe(
          staff=>this.staff=staff,()=> this.msgErr = true
        )
    //   this.postSrv.donnerUnAvis(this.staff,Avis.DETESTER)
    //     .then(staff=>this.staff=staff)
    //     .catch(()=> this.msgErr = true)

     }
 }

  @Input() staff : Staff={
    pseudo:"batman",
  nom:"doe",
    prenom:"john",
    grade:"R&D",
    score:200,
    photoprofil:"https://thispersondoesnotexist.com/image"
}

  constructor(private postSrv: DataService) {
  }

  ngOnInit(): void {

  }




}
