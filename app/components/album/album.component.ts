import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/Artist'
import { Album } from '../../models/Album'
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent {
    id: string;
    album: Album;

    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute){
    }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album
                        console.log(this.album)
                    })
            })
    }
}