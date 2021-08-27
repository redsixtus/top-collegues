import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Personne} from "../CollegueTemplateForm/Personne";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-FormReact',
  templateUrl: './CollegueReactiveForm.component.html',
  styleUrls: ['./CollegueReactiveForm.component.css']
})
export class CollegueReactiveFormComponent implements OnInit{

  fromPersonne!: FormGroup;

  constructor(private fb: FormBuilder,private postSrv: DataService ) {
  }


  ngOnInit(): void {
    this.fromPersonne= this.fb.group(
      {
        'pseudo':['',Validators.required],
        'nom':['',Validators.required, Validators.min(2)],
        'prenom':['',Validators.required, Validators.min(2)],
        'photo':['',Validators.required]
      }
    )
  }

  creerPersonne() {
    this.postSrv.creerPersonne(this.personne).subscribe(personne=>this.personne=personne, ()=>this.msgErr=true )


  }

  get isPseudoInvalid() {
    return (
      this.fromPersonne.get('pseudo')?.invalid &&
      this.fromPersonne.get('pseudo')?.dirty
    );
  }

  get isNomInvalid() {
    return (
      this.fromPersonne.get('nom')?.invalid &&
      this.fromPersonne.get('nom')?.dirty
    );
  }

  get isPrenomInvalid() {
    return (
      this.fromPersonne.get('prenom')?.invalid &&
      this.fromPersonne.get('prenom')?.dirty
    );
  }

  get isPhotoInvalid() {
    return (
      this.fromPersonne.get('photo')?.invalid &&
      this.fromPersonne.get('photo')?.dirty
    );
  }


}
