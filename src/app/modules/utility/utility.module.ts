import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripUnderscorePipe } from './pipes/strip-underscore.pipe';

@NgModule({
    declarations: [StripUnderscorePipe],
    imports: [CommonModule],
    exports: [StripUnderscorePipe],
})
export class UtilityModule {}
