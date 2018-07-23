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
    let nextChapter = this._content.CurrentSlide[0] + progress;
    if(nextChapter < this._content.getPresentation().content.length && nextChapter >= 0){
      this._content.CurrentSlide = [nextChapter, this._content.CurrentSlide[1]];
      this._router.navigate([this._content.CurrentSlide[0], this._content.CurrentSlide[1], this.viewer]);
      this._templateBase.updateSlideNumber(this._content.CurrentSlide[0], this._content.CurrentSlide[1]);
    }
  }

  sumSlides(progress:number) {
    let nextSlide = this._content.CurrentSlide[1] + progress;
    //let nextSlideByChapter = this._content.CurrentSlides[]
    if(nextSlide < this._content.getPresentation().content[this._content.CurrentSlide[0]].slides.length && nextSlide >= 0){
      this._content.CurrentSlide = [this._content.CurrentSlide[0], nextSlide];
      console.log(this._content.getPresentation().content[this._content.CurrentSlide[0]].slides[nextSlide].title);
      this._router.navigate([this._content.CurrentSlide[0], this._content.CurrentSlide[1], this.viewer]);
      this._templateBase.updateSlideNumber(this._content.CurrentSlide[0], this._content.CurrentSlide[1]);
    }
  }

}
