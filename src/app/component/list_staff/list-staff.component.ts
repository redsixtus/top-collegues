import {Component,Input,OnInit} from "@angular/core";
import {Staff} from "../bloc_collegues/Staff";
import {DataService} from "../../services/data.service";

@Component({
  selector:'app-list-staff',
  templateUrl:'list-staff.component.html'
})
export class listStaffComponent implements OnInit{
  @Input()staffs:Staff[]=[];
  msgErr = false;
  constructor(private postSrv: DataService) {
  }

  ngOnInit(): void {
    // this.postSrv.listerStaff()
    //   .then(staffs => this.staffs = staffs)
    //   .catch(()=> this.msgErr = true)
    this.postSrv.listeStaffHttp()
      .subscribe(
        staffs => this.staffs = staffs,
        ()=> this.msgErr = true
      )
  }

}
