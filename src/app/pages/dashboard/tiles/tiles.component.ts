import { Component, OnInit } from '@angular/core';
import { ActionnairesService } from 'src/app/services/actionnaires.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { PatientsService } from 'src/app/services/patients.service';
import { UsersService } from 'src/app/services/users.service';

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

  constructor(private actionnairesService: ActionnairesService,
    private doctorsService: DoctorsService,
    private usersService: UsersService, private patientsService : PatientsService) {

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
  }

  ngOnInit() {
  }

}
