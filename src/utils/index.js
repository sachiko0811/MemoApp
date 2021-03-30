import { format } from 'date-fns';

export function dateToString(date) {
    if(!date) { return ''; }
    return format(date, 'yyyy MMM d HH:mm');
}

export function translateErrors(code) {
    const error = {title: 'Error', decription: 'Please try again later' };
    switch (code) {
        case 'auth/invalid-email':
            error.description = 'Email Address is invalid';
            break;

        case 'auth/user-disabled':
            error.description = 'Account is invalid';
            break;
        
        case 'auth/user-not-found':
            error.description = "Couldn't find the user";
            break;

        case 'auth/wrong-password':
            error.description = 'Incorrect password';
            break;

        case 'auth/email-already-in-use':
            error.description = 'Email Address is already used';
            break;

        case 'auth/invalid-email':
            error.description = 'Email Address is invalid';
            break;
        
        case 'auth/operation-not-allowed':
            error.description = "Contact to me!";
            break;

        case 'auth/weak-password':
            error.description = '';
            break;
          default:
    }
    return error;
}