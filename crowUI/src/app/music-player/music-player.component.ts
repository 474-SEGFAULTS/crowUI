import { Component, OnInit, ElementRef,Renderer2} from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function () {
      var song = document.getElementById('player');
      var play = document.getElementById("play");
      var pause = document.getElementById("pause");
      var forward = document.getElementById("forward");
      var backward = document.getElementById("backward");


      $(play).click(function () {

        play.classList.remove('btn-show');
        play.classList.add('btn-hide');
        pause.classList.remove('btn-hide');
        pause.classList.add('btn-show');

        // song.play();
      });

      $(pause).click(function () {

        play.classList.remove('btn-hide');
        play.classList.add('btn-show');
        pause.classList.remove('btn-show');
        pause.classList.add('btn-hide');

        // audio dom manipulation
        // song.pause();
      });

      $(forward).click(function () {

      });

      $(backward).click(function () {

      });
      
    // }
  }


}
