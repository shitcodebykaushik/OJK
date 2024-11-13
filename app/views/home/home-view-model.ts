import { Observable, Frame } from '@nativescript/core';

export class HomeViewModel extends Observable {
    onBookingTap() {
        Frame.topmost().navigate('views/booking/booking-page');
    }

    onLogoutTap() {
        Frame.topmost().navigate({
            moduleName: 'views/login/login-page',
            clearHistory: true
        });
    }
}