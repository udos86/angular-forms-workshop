import { trigger, animate, transition, style, query, stagger } from '@angular/animations';

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

export const feedbackAnimations = trigger('feedbackAnimations', [

  transition(':enter', [

    query('div:enter',
      [
        style({
          opacity: 0,
          transform: 'translateY(-75%)'
        }),

        animate(
          '0.2s ease-out',
          style({
            opacity: 1,
            transform: 'none'
          })
        )
      ],
      { optional: true }
    ),
  ]),

  transition(':leave', [

    query('div:leave',
      [
        animate(
          '0.2s ease-out',
          style({
            opacity: 0
          })
        )
      ],
      { optional: true }
    )
  ])
]);


