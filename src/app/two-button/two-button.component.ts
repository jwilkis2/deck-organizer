import { Component, OnInit, Input } from '@angular/core';
import { GoogleAnalyticsEventsService } from '../services/google-analytics-events-service';

@Component({
  selector: 'app-two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent implements OnInit {
  @Input() leftButton: string;
  @Input() rightButton: string;
  @Input() leftEvent: string;
  @Input() rightEvent: string;
  constructor(private googleAnalyticsEventService: GoogleAnalyticsEventsService) {  }

  ngOnInit() {
  }

  leftClick() {
    this.googleAnalyticsEventService.emitEvent('csc436', 'login', 'authorized', 1);
    console.log('Left click');
  }

}
