import { Component, OnInit } from '@angular/core';
import { ActionnairesService } from 'src/app/services/actionnaires.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { PatientsService } from 'src/app/services/patients.service';
import { UsersService } from 'src/app/services/users.service';
import { MaintenancesService } from 'src/app/services/maintenance.service';
import { CongeService } from 'src/app/services/conge.service';
import jwt_decode from "../../../../../node_modules/jwt-decode";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
  public lengthDoc;
  public lengthAct;
  public lengthUsers;
  public lengthPatients;

  public lengthMaints;

  public lengthconges;
  public token = localStorage.getItem('token');
  public decoded = JSON.parse(JSON.stringify(jwt_decode(this.token)));
  public userId = this.decoded._id;
  conges: any[];

  constructor(private actionnairesService: ActionnairesService,
    private doctorsService: DoctorsService,
    private usersService: UsersService, private patientsService: PatientsService,
    private maintenancesService: MaintenancesService, private congeservice: CongeService) {

    this.actionnairesService.getAllActionnaires().subscribe((res: []) => {
      this.lengthAct = res.length
    }
    );
    this.doctorsService.getAllDoctors().subscribe((res: []) =>
      this.lengthDoc = res.length
    );
    this.usersService.getAllUsers().subscribe((res: []) =>
      this.lengthUsers = res.length
    );
    this.patientsService.getAllPatients().subscribe((res: []) =>
      this.lengthPatients = res.length
    );
    this.maintenancesService.getAllMaintenances().subscribe((res: [any]) => {
      this.lengthMaints = res.filter(re => re.statut === "pending").length;
    }
    );
    this.congeservice.getAllconges().subscribe((res: [any]) => {
      this.lengthconges = res.filter(res => ((res.status != "validated") && ((res.status != "annulée")))).length;
    }
    );
  }

  ngOnInit() {
  }

}
