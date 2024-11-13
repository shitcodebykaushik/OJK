import { Observable, Frame } from '@nativescript/core';

export class SignUpViewModel extends Observable {
    fullName: string = '';
    email: string = '';
    password: string = '';

    onSignUpTap() {
        if (!this.fullName || !this.email || !this.password) {
            alert('Please fill in all fields');
            return;
        }

        // Navigate to home page after successful signup
        Frame.topmost().navigate({
            moduleName: 'views/home/home-page',
            clearHistory: true
        });
    }
}