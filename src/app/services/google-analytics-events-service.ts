import { Injectable } from '@angular/core';

@Injectable()
export class GoogleAnalyticsEventsService {

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
    public emitEvent(eventCategory: string,
                     eventAction: string,
                     eventLabel: string = null,
                     eventValue: number = null) {
        ga('send', {
            hitType: 'event',
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel,
            eventValue: eventValue
        });
    }
}
