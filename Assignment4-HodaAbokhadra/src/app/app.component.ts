import { Component } from '@angular/core';
// import HttpClient class(service)
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos;

  // inject HttpClient service
  constructor(http: HttpClient) {
    // fetch JSON data, subscribe() takes 2 callbacks
    const URL = "assets/videos.json";
    http.get(URL).subscribe(data => {
      // success
      this.videos = data;
    }, error => {
      // failed
      console.log(error);
    });

    function watchVideo(index) {

      this.videos.push(this.videos.url);
        window.open(URL, "_blank");
      }
     

      function getAvatarUrl(index) {

        this.videos.push(this.videos);
    }

    


    
    }
  }

