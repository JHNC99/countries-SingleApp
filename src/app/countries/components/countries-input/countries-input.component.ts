import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
})
export class CountriesInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  term: string = '';

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }
  search() {
    this.onEnter.emit(this.term);
  }
  keyPress() {
    this.debouncer.next(this.term);
  }
}
