import { Component, Input } from '@angular/core';


@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {

  @Input('message') messageBody;
  // possible types: .info, .success, .warning, .error
  @Input('type') type;

  constructor() { }
}
