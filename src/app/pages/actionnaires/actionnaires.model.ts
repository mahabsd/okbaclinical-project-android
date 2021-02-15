export class Actionnaire {
  _id: string; 
  status: string; 
  userOwner:string;
  username: string;
  lastName: string;
  password: string;  
  profile: ActionnaireProfile;
  work: ActionnaireWork;
  contacts: ActionnaireContacts;
  settings: ActionnaireSettings;
}

export class ActionnaireProfile {  
  name: string;
  surname: string;  
  birthday: string;
  image: string;
}

export class ActionnaireWork {
  position: string;
}

export class ActionnaireContacts{
  email: string;
  phone: string;
  address: string;  
  
}
export class ActionnaireSettings{
  isActive: boolean;
  isDeleted: boolean;
}
