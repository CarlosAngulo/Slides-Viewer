import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../../content/content.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  @Input() slide: Slide;

  constructor() { }

  ngOnInit() { }

}
