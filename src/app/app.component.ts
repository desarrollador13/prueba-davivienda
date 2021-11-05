import { Component,OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba-davi';

  constructor(
    private renderer: Renderer2) {

  }

  ngOnInit() {}

}
