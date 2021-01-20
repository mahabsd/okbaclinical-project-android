export class Patient {
    id: number;
    username: string;
    password: string;  
    profile: PatientProfile;
    work: PatientWork;
    contacts: PatientContacts;
    social: PatientSocial;
    settings: PatientSettings;
  }
  
  export class PatientProfile {  
    name: string;
    surname: string;  
    birthday: Object;
    gender: string;
    image: string;
  }
  
  export class PatientWork {
    company: string;
    position: string;
    salary: number;
  }
  
  export class PatientContacts{
    email: string;
    phone: string;
    address: string;  
  }
  
  export class PatientSocial {
    facebook: string;
    twitter: string;
    google: string;
  }
  
  export class PatientSettings{
    isActive: boolean;
    isDeleted: boolean;
    registrationDate: Date;
    joinedDate: Date;
  }