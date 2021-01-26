export class Patient {
  _id: string; 
  cin: string;
  dateDentre: string;
  service: string;
  description: string;  
  profile: PatientProfile;
  work: PatientWork;
  contacts: PatientContacts;
  settings: PatientSettings;
}

export class PatientProfile {  
  name: string;
  surname: string;  
  birthday: string;
  image: string;
}

export class PatientWork {
  position: string;
}

export class PatientContacts{
  email: string;
  phone: string;
  address: string;  
}
export class PatientSettings{
  isActive: boolean;
  isDeleted: boolean;
}
