export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6358d92e91da9756c87ffab7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-emcicjt3',
                  apiId: 'c716f299-7b33-4e75-a8b4-69fa75755732'
                },
                {
                  buildHookId: '6358d92e4f1f4860d24e8409',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o5z6nfim',
                  apiId: '1bb77974-9d50-4bdd-ae66-d84c0c45d14a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/effinrich/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o5z6nfim.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
