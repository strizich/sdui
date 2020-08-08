const navigationConfig = [
  {
    name: '',
    children: [
      {
        name: 'Home',
        route: '/',
        type: 'link'
      },
      {
        name: 'Article',
        route: 'article',
        type: 'link'
      },
      {
        name: 'About',
        route: 'about',
        type: 'link'
      }
    ]
  },
  {
    name: 'Components',
    children: [
      {
        name: 'Buttons',
        route: 'buttons',
        type: 'link'
      }, {
        name: 'Card',
        route: 'cards',
        type: 'link'
      }, {
        name: 'Chicklets',
        route: 'chicklets',
        type: 'link'
      }, {
        name: 'Forms',
        route: 'forms',
        type: 'link',
        children: [
          {
            name: 'Input',
            route: 'forms',
            type: 'link'
          }, {
            name: 'Radio',
            route: 'forms',
            type: 'link'
          }, {
            name: 'Checkbox',
            route: 'forms',
            type: 'link'
          }
        ]
      }, {
        name: 'Modals',
        route: 'modals',
        type: 'link'
      }, {
        name: 'Tooltips',
        route: 'tooltips',
        type: 'link'
      }
    ]
  }
]

export default navigationConfig
