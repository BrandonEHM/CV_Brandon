import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from './components/shared/toast/toast'; 
import { ThemeService } from './services/theme.service';
import { ToastService } from './services/toast/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-page');
  private readonly themeService = inject(ThemeService);
  protected readonly toast = inject(ToastService);
}