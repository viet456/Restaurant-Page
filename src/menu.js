export function renderMenu() {
    const content = document.getElementById('content');

    //food menu
    const food = document.createElement('div');
    menu.id = 'menu';

    //appetizers
    const starters = [
        {
            name: "Heirloom Tomato Carpacio",
            description: "Thinly sliced heirloom tomatoes, olive oil–poached burrata, basil espuma, micro-basil"
        }, 
        {
            name: "Octopus à la Plancha",
            description: "Charred octopus tentacle, blood orange gastrique, tapenade tuile, finger-lime pearls"
        },
        {
            name: "Wild Mushroom Consommé",
            description: "Clear porcini broth, fiddlehead ferns, shaved black truffle, chive pollen"
        }
    ];

    //entrees
    const entrees = [
        {
            name: "Herb-Crusted Lamb Loin",
            description: "Rosemary-thyme crust, smoked eggplant purée, confit garlic aioli, charred broccolini"
        },
        {
            name: "Saffron-Steamed Branzino",
            description: "Whole branzino, saffron-fennel broth, preserved lemon, pistachio gremolata"
        },
        {
            name: "Winter Squash Agnolotti",
            description: "Brown-butter ravioli, fried sage, roasted hazelnuts, aged pecorino"
        },
        {
            name: "Seared Duck Breast",
            description: "Cherry-port reduction, parsnip purée, roasted baby carrots, crispy shallots"
        }
    ];

    //desserts
    const dessert = [
        {
            name: "Lavender Honey Panna Cotta",
            description: "Culinary lavender panna cotta, wildflower honey, candied pistachios, violet petals"
        },
        {
            name: "Chocolate-Olive Oil Torte",
            description: "Flourless dark-chocolate cake, olive-oil gelato, sea-salt tuile"
        },
        {
            name: "Cheese & Fruit Trio",
            description: "Selection of three artisan cheeses, quince paste, spiced nuts, seasonal fruit"
        }
    ];

    //menu contents
    const start = document.createElement('div');
    start.id = 'start';
    const main = document.createElement('div');
    main.id = 'main';
    const end = document.createElement('end');
    end.id = 'end;'

    //render menu contents
    menu.append(start, main, end); 
    //turn menu into iterable array 
    Array.from(menu.children).forEach(section => {
        
    });
    

    content.append(menu);
}