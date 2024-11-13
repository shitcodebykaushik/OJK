import { Observable, Frame } from '@nativescript/core';

export class BookingViewModel extends Observable {
    date: string = '';
    time: string = '';
    people: string = '';

    onConfirmBooking() {
        if (!this.date || !this.time || !this.people) {
            alert('Please fill in all fields');
            return;
        }

        alert('Booking confirmed!');
        Frame.topmost().goBack();
    }
}