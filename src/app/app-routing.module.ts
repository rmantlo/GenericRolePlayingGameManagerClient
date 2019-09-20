import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileCreateComponent } from './components/profile-create/profile-create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { RoomDetailsComponent } from './components/rooms/room-details/room-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profileCreate', component: ProfileCreateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'room/:id', component: RoomDetailsComponent },
  { path: 'character-details/Outline/:id', component: CharacterDetailsComponent },
  { path: 'character-details/Instance/:id', component: CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
