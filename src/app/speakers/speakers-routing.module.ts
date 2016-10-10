import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SpeakersComponent } from './speakers.component';
import { CanDeactivateGuard } from '../core';

const routes: Routes = [
  {
    // path: '',
    path: 'speakers',
    component: SpeakersComponent,
    children: [
      { path: '', component: SpeakerListComponent },
      {
        path: ':id',
        component: SpeakerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }

// This works too ... but let's be explicit, above
// export const SpeakersRoutingModule = RouterModule.forChild(routes);

export const routedComponents = [SpeakersComponent, SpeakerListComponent, SpeakerComponent];
