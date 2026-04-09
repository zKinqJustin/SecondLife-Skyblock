ServerEvents.recipes(secondlife => {
    secondlife.remove({id: 'projecte:philosophers_stone'})
    secondlife.remove({id: 'projecte:philosophers_stone_alt'})
    secondlife.shaped( 'projecte:philosophers_stone',
        [
            'ETE',
            'TAT',
            'ETE'
        ],
        {
            E: 'justdirethings:eclipsealloy_ingot',
            T: 'justdirethings:time_crystal',
            A: 'mekanism:pellet_antimatter',
        }
    )
}

)