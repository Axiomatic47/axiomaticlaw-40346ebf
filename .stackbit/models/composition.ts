export const Composition = {
    name: 'composition',
    type: 'object',
    label: 'Composition',
    fields: [
        { name: 'id', type: 'string', required: true },
        { name: 'title', type: 'string', required: true },
        { name: 'description', type: 'string' },
        {
            name: 'sections',
            type: 'list',
            items: {
                type: 'model',
                models: ['section']
            }
        }
    ]
};