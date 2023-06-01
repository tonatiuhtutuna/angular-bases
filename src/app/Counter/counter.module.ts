import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.componente';


@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class counterModule {}
