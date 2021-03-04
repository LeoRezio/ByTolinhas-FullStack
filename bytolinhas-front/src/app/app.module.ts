import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TopBarComponent } from './top-bar/top-bar.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './players/player/player.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { TeamDescriptionComponent } from './team-description/team-description.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConquestsComponent } from './conquests/conquests.component';
import { ConquestComponent } from './conquests/conquest/conquest.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PlayersComponent,
    PlayerComponent,
    TopBannerComponent,
    TeamDescriptionComponent,
    GamesComponent,
    GameComponent,
    ConquestsComponent,
    ConquestComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
