import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
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
    var song = <HTMLVideoElement>document.getElementById('player');
    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var forward = document.getElementById("forward");
    var backward = document.getElementById("backward");


    $(play).click(function () {

      play.classList.remove('btn-show');
      play.classList.add('btn-hide');
      pause.classList.remove('btn-hide');
      pause.classList.add('btn-show');

      song.play();
    });

    $(pause).click(function () {

      play.classList.remove('btn-hide');
      play.classList.add('btn-show');
      pause.classList.remove('btn-show');
      pause.classList.add('btn-hide');

      // audio dom manipulation
      song.pause();
    });

    $(forward).click(function () {

    });

    $(backward).click(function () {

    });

    // function formatTime(song) {

    //   var minutes = parseInt(Math.floor(song / 60).toFixed(2));
    //   var seconds = parseInt(Math.floor(song - minutes * 60).toFixed(2));


    //   return time = minutes + ":" + seconds;
    // }
  }
  
  initProgressBar() {
    var song = <HTMLVideoElement>document.getElementById('player');
    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var forward = document.getElementById("forward");
    var backward = document.getElementById("backward");
    var progressbar = <HTMLInputElement>document.getElementById('seek-obj');
    progressbar.value = (song.currentTime / song.duration).toFixed(2);
    progressbar.addEventListener("click", seek);

    if (song.currentTime == song.duration) {
      play.classList.remove('btn-hide');
      play.classList.add('btn-show');
      pause.classList.remove('btn-show');
      pause.classList.add('btn-hide');
    }

    document.getElementById("music-current").innerHTML = song.currentTime.toFixed(2); //formatTime(song.currentTime)
    document.getElementById("music-duration").textContent = song.duration.toFixed(2);

    function seek(event) {
      var percent = event.offsetX / this.offsetWidth;
      song.currentTime = percent * song.duration;
      progressbar.value = (percent / 100).toFixed(2);
    }

  }
  // }
}

