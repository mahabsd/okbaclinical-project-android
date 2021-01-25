
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Actionnaire, ActionnaireProfile, ActionnaireWork, ActionnaireContacts, ActionnaireSocial, ActionnaireSettings } from './actionnaires.model';
import { ActionnairesService } from './actionnaires.service';
import { ActionnaireDialogComponent } from './actionnaire-dialog/actionnaire-dialog.component';

@Component({
  selector: 'app-actionnaires',
  templateUrl: './actionnaires.component.html',
  styleUrls: ['./actionnaires.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ ActionnairesService ] 
})
export class ActionnairesComponent implements OnInit {
  public actionnaires: Actionnaire[];
  public searchText: string;
  public page:any;
  public settings: Settings;
  public showSearch:boolean = false;
  public viewType:string = 'grid';
  constructor(public appSettings:AppSettings, 
              public dialog: MatDialog,
              public actionnairesService:ActionnairesService){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
      this.getActionnaires();         
  }

  public getActionnaires(): void {
      this.actionnaires = null; //for show spinner each time
      this.actionnairesService.getActionnaires().subscribe(actionnaires => this.actionnaires = actionnaires);    
  }
  public addActionnaire(actionnaire:Actionnaire){
      this.actionnairesService.addActionnaire(actionnaire).subscribe(actionnaire => this.getActionnaires());
  }
  public updateActionnaire(actionnaire:Actionnaire){
      this.actionnairesService.updateActionnaire(actionnaire).subscribe(actionnaire => this.getActionnaires());
  }
  public deleteActionnaire(actionnaire:Actionnaire){
     this.actionnairesService.deleteActionnaire(actionnaire.id).subscribe(actionnaire => this.getActionnaires());
  }
  
  public changeView(viewType){
      this.viewType = viewType;
      this.showSearch = false;
  }

  public onPageChanged(event){
      this.page = event;
      this.getActionnaires();    
      document.getElementById('main').scrollTop = 0;
  }

  public openActionnaireDialog(actionnaire){
      let dialogRef = this.dialog.open(ActionnaireDialogComponent, {
          data: actionnaire
      });
      dialogRef.afterClosed().subscribe(actionnaire => {
          if(actionnaire){
              (actionnaire.id) ? this.updateActionnaire(actionnaire) : this.addActionnaire(actionnaire);
          }
      });
      this.showSearch = false;
  }

}
