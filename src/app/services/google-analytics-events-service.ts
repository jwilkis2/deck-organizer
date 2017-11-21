import { Injectable } from '@angular/core';
declare var gtag: any;

@Injectable()
export class GoogleAnalyticsEventsService {

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
    public emitEvent(eventCategory: string,
                     eventAction: string,
                     eventLabel: string = null,
                     eventValue: number = null) {
        gtag('send', {
            hitType: 'event',
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel,
            eventValue: eventValue
        });
    }
}
