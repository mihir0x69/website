type Place = {
    label: string
    images: Array<string>
}

const places: Array<Place> = [
    {
        label: 'Nimdari, Pune - November 2019',
        images: [
            require('./photos/nimdari2019/1.jpg').default,
            require('./photos/nimdari2019/2.jpg').default,
        ],
    },
    {
        label: 'Delhi - August 2019',
        images: [
            require('./photos/delhi2019/1.jpg').default,
            require('./photos/delhi2019/2.jpg').default,
        ],
    },
    {
        label: 'Customer Visit - May 2019',
        images: [
            require('./photos/outing2019/1.jpg').default,
            require('./photos/outing2019/2.jpg').default,
        ],
    },
    {
        label: 'Singapore - May 2019',
        images: [
            require('./photos/singapore2019/1.jpg').default,
            require('./photos/singapore2019/2.jpg').default,
        ],
    },
]

export default places
