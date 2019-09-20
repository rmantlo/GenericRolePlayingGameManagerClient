import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/navbar/register/register.component';
import { LoginComponent } from './components/navbar/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { ProfileCreateComponent } from './components/profile-create/profile-create.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomDetailsComponent } from './components/rooms/room-details/room-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SkeletonCreateComponent } from './components/characters/skeleton-create/skeleton-create.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { CharacterTabComponent } from './components/dashboard/character-tab/character-tab.component';
import { RoomTabComponent } from './components/dashboard/room-tab/room-tab.component';
import { CharacteristicsTabComponent } from './components/dashboard/characteristics-tab/characteristics-tab.component';
import { ItemTabComponent } from './components/dashboard/item-tab/item-tab.component';
import { DiceComponent } from './components/dice/dice.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileEditComponent } from './components/settings/profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PlayerProfileComponent,
    ProfileCreateComponent,
    RoomsComponent,
    RoomDetailsComponent,
    DashboardComponent,
    CharactersComponent,
    SkeletonCreateComponent,
    CharacterDetailsComponent,
    CharacterTabComponent,
    RoomTabComponent,
    CharacteristicsTabComponent,
    ItemTabComponent,
    DiceComponent,
    SettingsComponent,
    ProfileEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
