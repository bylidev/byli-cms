import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from 'src/service/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menu: Observable<Map<string, string>>;
  title = 'Byli.dev!';
  router: Router;

  constructor(menuService: MenuService, router: Router) {
    this.menu = menuService.getMenu();
    this.router = router;
  }
}
