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
                  buildHookId: '5eca31332396fe93acc2367b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-b19s1rkb',
                  apiId: '6b37a848-d537-4e2b-9fd2-0105ddb4a1c7'
                },
                {
                  buildHookId: '5eca31339424d31d687fccac',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-neqozuhu',
                  apiId: '7892a309-b8c3-4be8-938d-3003736077c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SDupZ/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-neqozuhu.netlify.app', category: 'apps'}
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
