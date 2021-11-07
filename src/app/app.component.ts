import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public onomatopoeias: string[] = [];
  title = 'outputQuest';

  onReceiveNewOnomatopia(onomatopeia: string) {
    this.onomatopoeias.push(onomatopeia);
  }
}