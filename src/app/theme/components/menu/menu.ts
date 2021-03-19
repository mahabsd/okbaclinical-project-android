import { Menu } from './menu.model';

export const verticalMenuItems = [
  new Menu(1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
  new Menu(55, 'Schedule', '/schedule', null, 'event_note', null, false, 0),
  new Menu(2,  'Users', '/users', null, 'supervisor_account', null, false, 0),
  new Menu(19, 'Doctors', '/doctors', null, 'groups', null, false, 0),
  new Menu(18, 'Patients', '/patients', null, 'people', null, false, 0),
  new Menu(37, 'Actionnaires', '/actionnaires', null, 'supervisor_account', null, false, 0),
  new Menu(86, 'SMS : messages', '/Envoie-sms', null, 'view_stream', null, false, 0),
  new Menu(37, 'SMS list', '/liste-sms', null, 'view_array', null, false, 0),
  new Menu(17, 'Chat', '/chat', null, 'chat', null, false, 0),
  new Menu(20, 'Holidays', null, null, 'dvr', null, true, 0),
  new Menu(21, 'Holidays request', '/Holidays/datepicker', null, 'today', null, false, 20),
  new Menu(22, 'Holidays list', '/Holidays/Holidays-list', null, 'format_line_spacing', null, false, 20),
  new Menu(24, 'Demande Maintenance', '/Maintenances/Demande-Maintenance', null, 'view_stream', null, false, 30),
  new Menu(30, 'Maintenances', null, null, 'view_module', null, true, 0),
  new Menu(33, 'Maintenances list', '/Maintenances/liste-maintenance', null, 'sort', null, false, 30),
  new Menu(34, 'Holidays requests list', '/Holidays/holidays-requests-list', null, 'format_line_spacing', null, false, 20),
  new Menu(50, 'Profile', null, null, 'person', null, true, 40),
  new Menu(52, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 50),
]

export const horizontalMenuItems = [
  new Menu(1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
  new Menu(55, 'Schedule', '/schedule', null, 'event_note', null, false, 0),
  new Menu(2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
  new Menu(19, 'Doctors', '/doctors', null, 'groups', null, false, 0),
  new Menu(18, 'Patients', '/patients', null, 'people', null, false, 0),
  new Menu(37, 'Actionnaires', '/actionnaires', null, 'supervisor_account', null, false, 0),
  new Menu(86, 'SMS : messages', '/Envoie-sms', null, 'view_stream', null, false, 0),
  new Menu(37, 'SMS list', '/liste-sms', null, 'view_array', null, false, 0),
  new Menu(17, 'Chat', '/chat', null, 'chat', null, false, 0),
  new Menu(20, 'Holidays', null, null, 'dvr', null, true, 0),
  new Menu(21, 'Holidays request', '/Holidays/datepicker', null, 'today', null, false, 20),
  new Menu(22, 'Holidays list', '/Holidays/Holidays-list', null, 'format_line_spacing', null, false, 20),
  new Menu(24, 'Demande Maintenance', '/Maintenances/Demande-Maintenance', null, 'view_stream', null, false, 30),
  new Menu(30, 'Maintenances', null, null, 'view_module', null, true, 0),
  new Menu(33, 'Maintenances list', '/Maintenances/liste-maintenance', null, 'sort', null, false, 30),
  new Menu(34, 'Holidays requests list', '/Holidays/holidays-requests-list', null, 'format_line_spacing', null, false, 20),
  new Menu(50, 'Profile', null, null, 'person', null, true, 40),
  new Menu(52, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 50),

]