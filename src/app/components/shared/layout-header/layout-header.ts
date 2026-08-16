// src/app/components/layout-header/layout-header.ts
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.html',
})
export class LayoutHeader {
  protected readonly themeService = inject(ThemeService);
}