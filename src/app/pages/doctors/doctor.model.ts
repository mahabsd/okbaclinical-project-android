export class Doctor {
  _id: string; 
  status: string; 
  userOwner:string;
  smsOwner:string;
  profile: DoctorProfile;
  work: DoctorWork;
  contacts: DoctorContacts;
  settings: DoctorSettings;
}

export class DoctorProfile {  
  name: string;
  surname: string;  
  birthday: string;
  image: string;
}

export class DoctorWork {
  position: string;
}

export class DoctorContacts{
  email: string;
  phone: string;
  address: string;  
}
export class DoctorSettings{
  isActive: boolean;
  isDeleted: boolean;
}

