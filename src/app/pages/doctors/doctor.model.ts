export class Doctor {
  _id: number; 
  profile: DoctorProfile;
  work: DoctorWork;
  contacts: DoctorContacts;
}

export class DoctorProfile {  
  name: string;
  surname: string;  
  birthday: Object;
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

