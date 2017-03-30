import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import * as tool from './tools';

@Component({
    selector: 'modal',
    templateUrl: '/app/modal.component.html',
    styleUrls: ['/app/modal.component.css'],
})
export class ModalComponent {
    public visible = false;
    private visibleAnimate = false;

    public show(any: string): void {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true);
    }

    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 150);
    }
}
