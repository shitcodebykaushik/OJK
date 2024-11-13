import { Observable, Frame } from '@nativescript/core';

export class LoginViewModel extends Observable {
    email: string = '';
    password: string = '';

    onLoginTap() {
        // Basic validation
        if (!this.email || !this.password) {
            alert('Please fill in all fields');
            return;
        }

        // Navigate to home page
        Frame.topmost().navigate({
            moduleName: 'views/home/home-page',
            clearHistory: true
        });
    }

    onSignUpTap() {
        Frame.topmost().navigate('views/signup/signup-page');
    }
}