export class Patient {
  _id: string; 
 
}

export class PatientContacts{
  from: string;
  to: string;
  phone: string;
  message: string;  
  type: string;  
}
export class PatientSettings{
  isActive: boolean;
  isDeleted: boolean;
}

