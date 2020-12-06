import { Component, OnInit} from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var song = <HTMLVideoElement>document.getElementById('player');
    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var next = document.getElementById("forward");
    var prev = document.getElementById("backward");


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

      song.pause();
    });

    $(next).click(function () {
      
    });

    $(prev).click(function () {

    });

  }
  
  formatTime(song) {

      var minutes = parseInt(Math.floor(song / 60).toFixed(2));
      var seconds = parseInt(Math.floor(song - minutes * 60).toFixed(2));
      function str_pad_left(string,pad,length) {
        return (new Array(length+1).join(pad)+string).slice(-length);
    }

      return str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);}

  initProgressBar() {
    var song = <HTMLVideoElement>document.getElementById('player');
    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var progressbar = <HTMLInputElement>document.getElementById('seek-obj');
    progressbar.value = (song.currentTime / song.duration).toFixed(2);
    progressbar.addEventListener("click", seek);

    if (song.currentTime == song.duration) {
      play.classList.remove('btn-hide');
      play.classList.add('btn-show');
      pause.classList.remove('btn-show');
      pause.classList.add('btn-hide');
    }

    document.getElementById("music-current").innerHTML = this.formatTime(song.currentTime);
    document.getElementById("music-duration").textContent = this.formatTime(song.duration);

    function seek(event) {
      var percent = event.offsetX / this.offsetWidth;
      song.currentTime = percent * song.duration;
      progressbar.value = (percent / 100).toFixed(2);
    }

  }
  // }
}

