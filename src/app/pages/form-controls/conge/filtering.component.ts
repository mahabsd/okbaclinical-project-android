import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CongeService } from 'src/app/services/conge.service';
import { LoginService } from 'src/app/services/login.service';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Element } from '../../tables/tables.service';
import jwt_decode from "../../../../../node_modules/jwt-decode";

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],

})

export class CongeComponent implements OnInit {
  public displayedColumns = ['user', 'requestDate', 'dateDebut', 'dateFin', 'daysNumber', 'motif', 'status'];
  public dataSource: any;
  public settings: Settings;
  public data: MatTableDataSource<Element>;
  token: string;
  decoded: any;
  userId: any;
  soldeConge: [any];
  userOwner: Object;
  user: any;
  form = new FormGroup({
    nbreJours: new FormControl('',),
    dateDebut: new FormControl('', [Validators.required]),
    dateFin: new FormControl('', [Validators.required]),
    motif: new FormControl('', [Validators.required]),
    status: new FormControl('',),
    userOwner: new FormControl(''),
  });
  userConges: [];
  congeUser: any;
  constructor(public appSettings: AppSettings, private tablesService: CongeService) {
    this.settings = this.appSettings.settings;


  }
  ngOnInit(): void {

    this.userConge();
  }

  applyFilter(filterValue: string) {
    console.log(this.dataSource);

    this.data.filter = filterValue.trim().toLowerCase();
  }

  userConge() {
    this.token = localStorage.getItem('token');
    this.decoded = JSON.parse(JSON.stringify(jwt_decode(this.token)));
    this.userId = this.decoded._id;

    this.tablesService.getAllconges().subscribe(conges => {
      this.dataSource = conges;
      this.dataSource = this.dataSource.sort((data1: any, data2: any) => {
        return data2.createdAt - data1.createdAt
      })
     
       this.dataSource.reverse();
      this.userConges = this.dataSource.filter(conge => conge.userOwner._id === this.userId)
      console.log(this.dataSource);
      this.data = new MatTableDataSource<Element>(this.userConges);
    })
  }

}