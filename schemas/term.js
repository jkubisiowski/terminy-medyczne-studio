export default {
    name: 'term',
    title: 'Term',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'}
        },        
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }
    ],

    preview: {
        select: {
            title: 'name',
            author: 'author.name'            
        },
        prepare(selection) {
            const {author} = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            })
        }
    }
}
