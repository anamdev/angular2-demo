export class Contacts {
    id: number;
    name: string = '';
    mobileNumber: string = '';
    email: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
