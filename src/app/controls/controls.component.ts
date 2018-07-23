import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content/content.service';
import { HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateBaseComponent } from '../template-base/template-base.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})


export class ControlsComponent implements OnInit {

  chapter: number = 0;
  slideByChapter: number = 0;
  viewer: string;

  constructor( private _content:ContentService, 
    private _router:Router,
    private _activatedRoute:ActivatedRoute,
    private _templateBase:TemplateBaseComponent) {
      this._activatedRoute.params.subscribe( params => {
        this.viewer = params.viewer;
        this.chapter = params.chapter;
        this.slideByChapter = params.slide;
      })
    }
  
  ngOnInit() {
  }
  
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch(event.key){
      case 'ArrowUp':
        this.sumSlides(-1);
        break;
      case 'ArrowRight':
        this.sumChapters(1);
        break;
      case 'ArrowDown':
        this.sumSlides(1);
        break;
      case 'ArrowLeft':
        this.sumChapters(-1);
        break;
      default:
        break;
    }
  }

  sumChapters(progress:number) {
    let nextChapter = parseInt(this.chapter.toString()) + progress;
    if(nextChapter < this._content.getPresentation().content.length && nextChapter >= 0) {
      this.chapter = nextChapter;
      this._router.navigate([this.chapter, this._content.CurrentSlides[this.chapter], this.viewer]);
      this._templateBase.updateSlideNumber(this.chapter, this._content.CurrentSlides[this.chapter]);
    }
  }

  sumSlides(progress:number) {
    let nextSlideByChapter = this._content.CurrentSlides[this.chapter] + progress;
    if(nextSlideByChapter < this._content.getPresentation().content[this._content.CurrentSlides[0]].slides.length && nextSlideByChapter >= 0) {
      this._content.CurrentSlides[this.chapter] = nextSlideByChapter;
      this._router.navigate([this.chapter, nextSlideByChapter, this.viewer]);
      this._templateBase.updateSlideNumber(this.chapter, nextSlideByChapter);
    }
  }

}
