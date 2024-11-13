import { alert } from '@nativescript/core';

export class AlertHelper {
    static async showError(message: string): Promise<void> {
        return alert({
            title: "Error",
            message: message,
            okButtonText: "OK"
        });
    }

    static async showSuccess(message: string): Promise<void> {
        return alert({
            title: "Success",
            message: message,
            okButtonText: "OK"
        });
    }
}