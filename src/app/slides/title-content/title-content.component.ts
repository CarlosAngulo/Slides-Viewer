import { Slide } from './../../content/content.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.scss']
})
export class TitleContentComponent implements OnInit {

  @Input() slide: Slide;

  constructor() { }

  ngOnInit() {
  }

}
