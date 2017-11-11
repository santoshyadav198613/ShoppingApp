import { InjectionToken } from '@angular/core';
import { ApiEndpoint } from './Iapi';

export let EndPoint = new InjectionToken<ApiEndpoint>('api.value');

export let apiEndPoint: ApiEndpoint = {
    endPoint: 'https://jsonplaceholder.typicode.com/',
    token: 'dsgfjhgsdjhjhjafj235345',
    shoppingApiEndPoint : "http://localhost:3000"
}
