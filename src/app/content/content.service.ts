import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

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
            img: 'assets/cover_image.png',
            text: 'Lorem Ipsum'
          },
          {
            type: 'title-content',
            title: 'Título 2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error laborum autem dolore quas, hic neque facilis explicabo! Facere iure porro veniam fugiat, ex delectus dolorem magnam accusamus voluptates maxime!Totam corrupti ipsam hic id fugit libero dignissimos aliquam dolore alias maiores nobis blanditiis voluptatem obcaecati neque sunt, dolorem itaque, non vitae! Tenetur, atque unde? Ea dolore vitae odio tempora.'
          }
        ]
      },
      {
        chapter: 1,
        slides: [
          {
            type: 'title',
            title: 'Título 3',
          },
          {
            type: 'title-image',
            title: 'Título 4',
            img: 'assets/excited-baby.gif',
          }
        ]
      },
    ]
  };

  constructor() {
    for (let i = 0; i<this.presentation.content.length; i++) {
      this.currentSlides[i] = 0;
    }
    console.log(this.currentSlides)
  }

  getPresentation(): Presentation {
    return this.presentation;
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
  title?: string;
  img?: string;
  text?: string;
}