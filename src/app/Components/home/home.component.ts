import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  counterSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const numbers = interval(400);
    this.counterSubscription = numbers.subscribe(
      (a) => { console.log(a)},
      (e) => { console.log('salam')},
      () => {'finish'}
    );
    
    const customObser = Observable.create(
      (observer:Observer<string>) =>  {
        setTimeout(() => {
          observer.next('first Package')
        }, 3000);

        setTimeout(() => {
          observer.next('Second Package')
        }, 5000);

        setTimeout(() => {
          observer.error('error message default')
        }, 8000);

        setTimeout(() => {
          observer.complete()
        }, 7000);
        
      }
    );
    this.customSubscription = customObser.subscribe(
      (data:string ) => { console.log(data)},
      // اگر اررو رو داخل لوگ ننویسیم ارور و یک متن مینیوسیم این متن را نشان میدهد
      (error:string ) => { console.log(error)},
      () => { console.log('complete')}
    )
  }
      ngOnDestroy(): void {
        this.counterSubscription.unsubscribe();
        this.customSubscription.unsubscribe();
      }
}
