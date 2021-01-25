export class Patient {
    // _id: number;
    cin: string;
    profile: PatientProfile;
    work: PatientWork;
    contacts: PatientContacts;
    settings: PatientSettings;
  }
  
  export class PatientProfile {  
    name: string;
    surname: string;  
    birthday: Object;
    gender: string;
    service: string;
    descriptionAct: string ;
    image: string;
  }
  
  export class PatientWork {
    company: string;
    position: string;
    
  }
  
  export class PatientContacts{
    email: string;
    phone: string;
    address: string;  
  }
  
  
  export class PatientSettings{
    isActive: true;
    isDeleted: false;
    status: String ;
    dateEntree: Date;
  
  }