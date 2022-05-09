const app = new Vue(
    {
        el: '#root',
        data: {
            cities: [
                {
                    name: 'Svezia',
                    image:  './img/01.jpg',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis, veritatis minus rerum expedita voluptatum id. Quas tenetur, a laborum facere aliquid rem quia, porro, sapiente aliquam voluptatum qui voluptatem!'
                },
                {
                    name: 'Svizzera', 
                    image: './img/02.jpg',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis, veritatis minus rerum expedita voluptatum id. Quas tenetur, a laborum facere aliquid rem quia, porro, sapiente aliquam voluptatum qui voluptatem!'
                },
                {
                    name: 'Gran Bretagna', 
                    image: './img/03.jpg',
                    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis, veritatis minus rerum expedita voluptatum id. Quas tenetur, a laborum facere aliquid rem quia, porro, sapiente aliquam voluptatum qui voluptatem!'
                },
                {
                    name: 'Germania', 
                    image: './img/04.jpg',
                    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis, veritatis minus rerum expedita voluptatum id. Quas tenetur, a laborum facere aliquid rem quia, porro, sapiente aliquam voluptatum qui voluptatem!'
                },
                {
                    name: 'Paradise', 
                    image: './img/05.jpg',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis, veritatis minus rerum expedita voluptatum id. Quas tenetur, a laborum facere aliquid rem quia, porro, sapiente aliquam voluptatum qui voluptatem!'
                }
            ],
            currentSlide: 0
        },

        methods: {

        };