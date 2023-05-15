const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/'
    },
    {
        id: 2,
        name: 'Roadmap',
        links: '/roadmap'
    },
    {
        id: 3,
        name: "Dapp  ",
        links: "#",
        namesub: [
            {
                id: 1,
                sub: 'Mint',
                links: '/minting'
            },
            {
                id: 2,
                sub: 'Staking',
                links: '/staking'
            },
            {
                id: 3,
                sub: 'Swap',
                links: '/swapping'
            },
            {
                id: 4,
                sub: 'Treasury',
                links: '/treasury'
            },
            {
                id: 5,
                sub: 'Presale',
                links: '/presale'
            },
            {
                id: 6,
                sub: 'Pools',
                links: '/pools'
            }
        ]
    },
    
]

export default menus;