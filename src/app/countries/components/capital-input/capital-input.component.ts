import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-capital-input',
  templateUrl: './capital-input.component.html',
})
export class CapitalInputComponent implements OnInit {
  constructor() {}
  term: string = '';
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debounce: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(3000)).subscribe((value) => {
      console.log('value', value);
    });
  }

  search() {
    this.onEnter.emit(this.term);
  }

  keyPress() {
    this.debounce.next(this.term);
  }
}
