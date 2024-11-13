import { NavigatedData, Page } from '@nativescript/core';
import { BookingViewModel } from './booking-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BookingViewModel();
}