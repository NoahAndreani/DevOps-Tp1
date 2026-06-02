import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterStore {
  private nbTotalRequest: number = 0;

  addRequest() {
    this.nbTotalRequest += 1;
  }

  getValue() {
    return this.nbTotalRequest;
  }
}
