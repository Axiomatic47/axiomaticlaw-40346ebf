export const Discipline = {
    name: 'discipline',
    type: 'data',
    label: 'Discipline',
    fields: [
        { name: 'id', type: 'string', required: true },
        { name: 'title', type: 'string', required: true },
        { name: 'description', type: 'string' },
        {
            name: 'compositions',
            type: 'list',
            items: {
                type: 'model',
                models: ['composition']
            }
        }
    ]
};