import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css'],
})
export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia: string | undefined;

  @Output() public sendOnomatopiaToDaddy: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  createOnomatopia(): void {
    this.sendOnomatopiaToDaddy.emit(this.newOnomatopia);
  }
  
}
