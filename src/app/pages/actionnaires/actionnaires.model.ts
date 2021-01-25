export class Actionnaire {
  id: number;
  username: string;
  password: string;  
  profile: ActionnaireProfile;
  work: ActionnaireWork;
  contacts: ActionnaireContacts;
  social: ActionnaireSocial;
  settings: ActionnaireSettings;
}

export class ActionnaireProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class ActionnaireWork {
  company: string;
  position: string;
  salary: number;
}

export class ActionnaireContacts{
  email: string;
  phone: string;
  address: string;  
}

export class ActionnaireSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class ActionnaireSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}