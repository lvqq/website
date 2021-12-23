module.exports = {
  napiSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['introduction/getting-started', 'introduction/simple-package'],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/exports',
        'concepts/naming-conventions',
        'concepts/values',
        'concepts/class',
        'concepts/enum',
        'concepts/object',
        'concepts/function',
        'concepts/threadsafe-function',
        'concepts/async-task',
        'concepts/inject-env',
        'concepts/async-fn',
        'concepts/external',
        'concepts/await-promise',
        'concepts/types-overwrite',
      ],
    },
    {
      type: 'category',
      label: 'Compat mode',
      items: [
        {
          type: 'category',
          label: 'Concepts',
          items: [
            {
              type: 'autogenerated',
              dirName: 'compat-mode/concepts',
            },
          ],
        },
        {
          type: 'category',
          label: 'Recipes',
          items: [
            {
              type: 'autogenerated',
              dirName: 'compat-mode/recipes',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      items: ['cli/build', 'cli/napi-config'],
    },
    {
      type: 'category',
      label: 'Deep dive',
      items: [
        'deep-dive/native-module',
        'deep-dive/history',
        'deep-dive/release',
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      items: [
        {
          type: 'autogenerated',
          dirName: 'ecosystem',
        },
      ],
    },
    {
      type: 'category',
      label: 'More',
      items: ['faq', 'neon'],
    },
  ],
}
