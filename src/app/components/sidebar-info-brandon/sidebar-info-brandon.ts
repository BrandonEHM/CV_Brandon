import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { LayoutHeader } from '../shared/layout-header/layout-header';

@Component({
  selector: 'app-sidebar-info-brandon',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LayoutHeader],
  templateUrl: './sidebar-info-brandon.html',
  styleUrl: './sidebar-info-brandon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarInfoBrandon {
  private router = inject(Router);
  protected readonly themeService = inject(ThemeService);

  protected isSidebarOpen = signal(false);

  toggleTheme(): void {
    this.themeService.toggleTheme();
    
  }

  toggleSidebar() {
    this.isSidebarOpen.update(open => !open);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }

  
}