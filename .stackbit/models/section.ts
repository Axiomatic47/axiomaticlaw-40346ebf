export const Section = {
    name: 'section',
    type: 'object',
    label: 'Section',
    fields: [
        { name: 'id', type: 'string', required: true },
        { name: 'title', type: 'string', required: true },
        { name: 'content', type: 'string' }
    ]
};