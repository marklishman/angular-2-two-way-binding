import { Component } from '@angular/core';

import { HelloWorldComponent } from "./hello-world.component";
import { TwoWayBindingComponent } from "./two-way-binding.component";


@Component({
    selector: 'app',
    template: `
        <hello-world *ngIf="showSection('hello-world')"></hello-world>
        <two-way-binding *ngIf="showSection('two-way-binding')"></two-way-binding>
        `,
    directives: [
        HelloWorldComponent,
        TwoWayBindingComponent
    ]
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}