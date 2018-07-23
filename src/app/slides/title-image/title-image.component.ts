import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../../content/content.service';

@Component({
  selector: 'app-title-image',
  templateUrl: './title-image.component.html',
  styleUrls: ['./title-image.component.scss']
})
export class TitleImageComponent implements OnInit {
  
  @Input() slide: Slide;

  constructor() { }

  ngOnInit() {
  }

}
