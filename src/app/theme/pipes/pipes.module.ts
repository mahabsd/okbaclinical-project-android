import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationPipe} from './pagination/pagination.pipe';
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { ChatPersonSearchPipe } from './search/chat-person-search.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { PatientSearchPipe } from './search/patient-search.pipe';
import { ActionnaireSearchPipe } from './search/actionnaire-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import { TimeAgoPipe } from './search/TimeAgoPipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        PaginationPipe,
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        PatientSearchPipe,
        ActionnaireSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        TimeAgoPipe
    ],
    exports: [
        PaginationPipe,
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        PatientSearchPipe,
      ActionnaireSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        TimeAgoPipe
    ]
})
export class PipesModule { }
