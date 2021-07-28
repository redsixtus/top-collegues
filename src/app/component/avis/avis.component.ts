import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Avis} from "./Avis";


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit{
  @Output() liker= new EventEmitter<Avis>();
  @Input() likeDisable = false;
  @Input() Dislike = false;

  ngOnInit(): void {
  }
aimer(){
    this.liker.emit(Avis.AIMER)
}
deteste(){
    this.liker.emit(Avis.DETESTER)
}

}
