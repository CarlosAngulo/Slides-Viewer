import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  private currentSlide = [0, 0]
  private currentSlides = [];

  private presentation:Presentation = {
    config: {
      imgUrl: '',
      backgroundImage: ''
    },
    content: [
      {
        chapter: 0,
        slides: [
          {
            type: 'cover',
            title: 'Título',
            img: 'imagen01.jpg',
            text: 'Lorem Ipsum'
          },
          {
            type: 'title-content',
            title: 'Título 2',
            img: 'imagen02.jpg',
            text: 'Lorem Ipsum 2'
          }
        ]
      },
      {
        chapter: 1,
        slides: [
          {
            type: 'title',
            title: 'Título',
            img: 'imagen01.jpg',
            text: 'Lorem Ipsum'
          },
          {
            type: 'title-image',
            title: 'Título 2',
            img: 'imagen02.jpg',
            text: 'Lorem Ipsum 2'
          }
        ]
      },
    ]
  };

  constructor() {
    for (let i = 0; i<this.presentation.content.length; i++) {
      this.currentSlides[i] = [0, 0];
    }
  }

  getPresentation(): Presentation {
    return this.presentation;
  }

  get CurrentSlide() {
    return this.currentSlide;
  }

  set CurrentSlide(currentSlide) {
    this.currentSlide = currentSlide;
  }

  get CurrentSlides() {
    return this.currentSlides;
  }

  set CurrentSlides(currentSlides) {
    this.currentSlides = currentSlides;
  }

}

export interface Presentation {
  config: any,
  content: [
    {
      chapter: number;
      slides: Slide[];
    }
  ]
}

export interface Slide {
  type: string;
  title: string;
  img: string;
  text: string;
}