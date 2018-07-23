import { Component, OnInit } from '@angular/core';
import { ContentService, Presentation, Slide } from '../content/content.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-base',
  templateUrl: './template-base.component.html',
  styleUrls: ['./template-base.component.css']
})
export class TemplateBaseComponent implements OnInit {

  presentation: Presentation;
  chapter: number = 0;
  slideByChapter: number = 0;
  viewer: string;
  slide: Slide;
  type: string;

  constructor( 
    private _contentService: ContentService, 
    private _router: Router,
    private _activatedRoute:ActivatedRoute ) {
    this._activatedRoute.params.subscribe( params => {
      this.chapter = params.chapter;
      this.slideByChapter = params.slide;
      this.viewer = params.viewer;
    })
  }
  
  ngOnInit() {
    this.presentation = this._contentService.getPresentation();
    if (this.viewer == 'speaker' || 'viewer') {
      this.showSlide();
    } else {
      this._router.navigate(['']);
    }
  }

  updateSlideNumber(chapter, slideByChapter) {
    this.chapter = chapter;
    this.slideByChapter = slideByChapter;
    this.showSlide();
  }

  showSlide() {
    if (this.chapter >= this.presentation.content.length || 
      this.slideByChapter >= this.presentation.content[this.chapter].slides.length){
        this._router.navigate(['']);
    } else {
      this.slide = this.presentation.content[this.chapter].slides[this.slideByChapter];
      this.type = this.presentation.content[this.chapter].slides[this.slideByChapter].type;
      console.log(this.type)
    }
  }
}
