import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'artists/:id', // child route path
        component: ArtistsComponent // child route component that the router renders
      },
      {
        path: 'search', // child route path
        component: SearchComponent, // child route component that the router renders
        children: []
      },
      {
        path: 'playlists/:id', // child route path
        component: PlaylistComponent // child route component that the router renders
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
