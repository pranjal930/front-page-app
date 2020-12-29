import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment2';
  constructor(private metaTagService:Meta){}
  ngOnInit(){
    this.metaTagService.addTags([
				{ property:'description' , content : 'hello'},
				{ property:'og:description' , content : 'hello' },
				{ property:'og:description' , content : 'hello'},
				{ property:'og:title' , content : " - Fast learning for the serious learner" },
				{ property:'title' , content : " - Fast Learning" },
				{ property:'twitter:card' , content : "summary" },
				{ property:'twitter:title' , content : " - Fast learning for the serious learner" },
				{ property:'twitter:description' , content : 'hello' },
				{ property:'og:url',content:window.location.href},
				{ name: 'robots', content: 'index, follow'},
				
			]);
  }
}
