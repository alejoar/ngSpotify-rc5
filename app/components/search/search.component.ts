import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Artist } from '../../models/Artist'
import { Album } from '../../models/Album'

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    searchStr:string;
    searchRes: Artist[];

    constructor(private _spotifyService:SpotifyService){

    }

    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            }); /* Cos it's an observable */
    }
 }
