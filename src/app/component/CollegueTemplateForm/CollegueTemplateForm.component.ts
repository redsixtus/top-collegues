import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from './Personne'
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-Form',
  templateUrl: './CollegueTemplateForm.component.html',
  styleUrls: ['./CollegueTemplateForm.component.css']
})
export class CollegueFormComponent implements OnInit{
  msgErr=false;

  personne ={
    pseudo:'',
    nom:'',
    prenom:'',
    urlpicture:''

 }




  ngOnInit(): void {
  }
  constructor(private postSrv: DataService) {
  }
  creer(){
  this.postSrv.creerPersonne(this.personne).subscribe(personne=>this.personne=personne, ()=>this.msgErr=true )
  }



}

