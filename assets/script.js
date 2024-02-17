const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
#slideshow {
            position: relative;
            width: 100%;
            max-width: 600px; /* Adjust the maximum width as needed */
            margin: auto;
        }

        .slide {
            display: none;
        }

        .slide img {
            width: 100%;
            height: auto;
        }

        .tagline {
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: white;
            font-size: 18px;
        }
    </style>
