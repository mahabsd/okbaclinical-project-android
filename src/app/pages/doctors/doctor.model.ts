export class Doctor {
  id: number;
  username: string;
  password: string;  
  profile: DoctorProfile;
  work: DoctorWork;
  contacts: DoctorContacts;
  social: DoctorSocial;
  settings: DoctorSettings;
}

export class DoctorProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class DoctorWork {
  company: string;
  position: string;
  salary: number;
}

export class DoctorContacts{
  email: string;
  phone: string;
  address: string;  
}

export class DoctorSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class DoctorSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}