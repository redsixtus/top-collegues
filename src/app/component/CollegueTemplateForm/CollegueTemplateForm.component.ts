import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from './Personne'


@Component({
  selector: 'app-Form',
  templateUrl: './CollegueTemplateForm.component.html',
  styleUrls: ['./CollegueTemplateForm.component.css']
})
export class CollegueFormComponent implements OnInit{



  @Input()personne:Personne={
    pseudo:'',
    nom:'',
    prenom:'',
    urlpicture:''
  }


  ngOnInit(): void {
  }
  constructor() {
  }
  creerPersonne(){

  }


}

