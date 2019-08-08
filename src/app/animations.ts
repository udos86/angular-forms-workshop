import { trigger, animate, transition, style, query } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [

  transition('* => *', [

    query(':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100vw',
          height: '100vh'
        })
      ],
      { optional: true }
    ),

    query(':enter',
      [
        style({
          opacity: 0
        })
      ],
      { optional: true }
    ),

    query(':leave',
      [
        style({
          opacity: 1
        }),
        animate('0.4s', style({ opacity: 0 }))
      ],
      { optional: true }
    ),

    query(':enter',
      [
        animate('0.4s', style({ opacity: 1 }))
      ],
      { optional: true }
    )
  ])
]);
