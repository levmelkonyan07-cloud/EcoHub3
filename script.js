const destinations = [

    {
        id: 1,
        name: "Green Village Bali",
        country: "Indonesia",
        city: "Bali",
        type: "ecovillage",
        price: 42,
        rating: 4.9,
        wifi: "250 Mbps",
        energy: "Solar",
        members: "120+",
        description:
            "A tropical sustainable community surrounded by jungle, rivers and beautiful architecture.",
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/a9/89/17/bird-eye-pov.jpg?w=1200&h=1200&s=1"
    },

    {
        id: 2,
        name: "Selina Cowork",
        country: "Portugal",
        city: "Lisbon",
        type: "workspace",
        price: 28,
        rating: 4.8,
        wifi: "500 Mbps",
        energy: "Green Grid",
        members: "350+",
        description:
            "Modern coworking environment for entrepreneurs, developers and digital nomads.",
        image:
            "https://assets.pluria.co/images/workspaces/55d724b6-c77e-4e3f-8ebb-66f95aaf23fa"
    },

    {
        id: 3,
        name: "Eco Mountain Base",
        country: "Georgia",
        city: "Tbilisi",
        type: "ecovillage",
        price: 35,
        rating: 4.7,
        wifi: "150 Mbps",
        energy: "Solar",
        members: "80+",
        description:
            "A peaceful mountain-inspired community combining nature, work and local culture.",
        image:
            "https://i.redd.it/2p6llfthg3871.jpg"
    },

    {
        id: 4,
        name: "The Hive Workspace",
        country: "Thailand",
        city: "Chiang Mai",
        type: "workspace",
        price: 18,
        rating: 4.8,
        wifi: "300 Mbps",
        energy: "Green Grid",
        members: "500+",
        description:
            "Affordable professional coworking space in the heart of Chiang Mai.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJgclTkmX1H318GeTscTHj9YGI1SUmPmv3QZet1sFENzmyGcZKP2UqJwB&s=10"
    },

    {
        id: 5,
        name: "Forest Commune",
        country: "Estonia",
        city: "Tallinn",
        type: "ecovillage",
        price: 31,
        rating: 4.6,
        wifi: "200 Mbps",
        energy: "Wind",
        members: "65+",
        description:
            "Forest living, renewable energy and a small creative community.",
        image:
            "https://storage.ghost.io/c/51/f8/51f871d8-b6be-4a73-b958-0ca4fff0110a/content/images/hyperallergic-newspack-s3-amazonaws-com/uploads/2015/09/estoniaforest01.jpg"
    },

    {
        id: 6,
        name: "Nomad House",
        country: "Spain",
        city: "Barcelona",
        type: "workspace",
        price: 32,
        rating: 4.9,
        wifi: "600 Mbps",
        energy: "Green Grid",
        members: "420+",
        description:
            "A social workspace for remote professionals near the center of Barcelona.",
        image:
            "https://zrobim.by/assets/cache/images/urban-project/nomad_houses/new/camp_b_ap_24_01-1100x-cbf.jpg"
    },

    {
        id: 7,
        name: "Armenian Highlands Hub",
        country: "Armenia",
        city: "Yerevan",
        type: "workspace",
        price: 15,
        rating: 4.9,
        wifi: "300 Mbps",
        energy: "Green Grid",
        members: "180+",
        description:
            "A modern remote-work hub connecting local creatives, developers and international nomads.",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Armenian_plateau_near_Mount_Masis.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
    },

    {
        id: 8,
        name: "Cappadocia Eco Stay",
        country: "Turkey",
        city: "Cappadocia",
        type: "ecovillage",
        price: 38,
        rating: 4.8,
        wifi: "120 Mbps",
        energy: "Solar",
        members: "90+",
        description:
            "Unique sustainable accommodation surrounded by Cappadocia's landscapes.",
        image:
            "https://sb.ecobnb.net/app/uploads/sites/3/2025/10/cappadogia-hotels.jpg"
    },

    {
        id: 9,
        name: "Nomad Factory",
        country: "Mexico",
        city: "Tulum",
        type: "workspace",
        price: 25,
        rating: 4.7,
        wifi: "250 Mbps",
        energy: "Solar",
        members: "270+",
        description:
            "A tropical coworking space with fast internet and a relaxed atmosphere.",
        image:
            "https://framerusercontent.com/images/bzyzeq4Hj3BAHy2ylvbmKfwow.webp?width=400&height=300"
    },

    {
        id: 10,
        name: "Wild Coast Village",
        country: "South Africa",
        city: "Cape Town",
        type: "ecovillage",
        price: 45,
        rating: 4.9,
        wifi: "180 Mbps",
        energy: "Solar",
        members: "100+",
        description:
            "Ocean views, renewable energy and a creative community near Cape Town.",
        image:
            "https://visiteasterncape.co.za/wp-content/uploads/2019/11/Regions_WildCoast_Green-strip_4_Hluleka-768x511.jpg"
    },

    {
        id: 11,
        name: "Alpine Remote Hub",
        country: "Switzerland",
        city: "Zurich",
        type: "workspace",
        price: 65,
        rating: 4.9,
        wifi: "1000 Mbps",
        energy: "Hydro",
        members: "300+",
        description:
            "Premium workspace with outstanding infrastructure and mountain access.",
        image:
            "https://www.switzerland-innovation.com/fileadmin/_processed_/6/3/csm_Virtually_explore_the_Greater_Zurich_Area_2304f17520.png"
    },

    {
        id: 12,
        name: "Nordic Forest Living",
        country: "Finland",
        city: "Helsinki",
        type: "ecovillage",
        price: 49,
        rating: 4.8,
        wifi: "250 Mbps",
        energy: "Wind",
        members: "70+",
        description:
            "Minimalist Nordic living surrounded by forests and clean natural air.",
        image:
            "https://i0.wp.com/all-things-nordic.com/wp-content/uploads/2026/02/17721744794907473590636232538143.png?resize=616%2C336&ssl=1"
    },

    {
        id: 13,
        name: "Digital Garden",
        country: "Greece",
        city: "Athens",
        type: "workspace",
        price: 21,
        rating: 4.6,
        wifi: "400 Mbps",
        energy: "Green Grid",
        members: "230+",
        description:
            "A bright creative coworking environment for remote workers.",
        image:
            "https://b2846093.assetcdn.net/2.0/2846093/wp-content/uploads/2022/01/Athens-digital-nomad-guide.jpg?lossy=2&strip=1&webp=1"
    },

    {
        id: 14,
        name: "Costa Verde Village",
        country: "Costa Rica",
        city: "San José",
        type: "ecovillage",
        price: 37,
        rating: 4.9,
        wifi: "160 Mbps",
        energy: "Solar",
        members: "110+",
        description:
            "Rainforest living with community gardens and renewable energy.",
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/4e/86/40/hotel-costa-verde.jpg?w=900&h=500&s=1"
    },

    {
        id: 15,
        name: "Tokyo Remote Lab",
        country: "Japan",
        city: "Tokyo",
        type: "workspace",
        price: 55,
        rating: 4.9,
        wifi: "1000 Mbps",
        energy: "Green Grid",
        members: "700+",
        description:
            "High-tech coworking for developers, founders and digital creators.",
        image:
            "https://teamlab-site.imagewave.pictures/b5EBo9Uo-OK6SM09ZTkEZQ/Yt5eET5oZzm6FBicauQUSY/width=3840,quality=80"
    },

    {
        id: 16,
        name: "Carpathian Village",
        country: "Romania",
        city: "Brașov",
        type: "ecovillage",
        price: 27,
        rating: 4.7,
        wifi: "100 Mbps",
        energy: "Solar",
        members: "55+",
        description:
            "Quiet village life with beautiful mountain scenery.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9h2ABkgsmPhUHazoOqUJ21Tvtz3azbZhZwtC_HhjKwdVSClTTwuHufPz8&s=10"
    },

    {
        id: 17,
        name: "Berlin Creative Hub",
        country: "Germany",
        city: "Berlin",
        type: "workspace",
        price: 42,
        rating: 4.8,
        wifi: "700 Mbps",
        energy: "Green Grid",
        members: "600+",
        description:
            "Creative coworking space in the center of Berlin.",
        image:
            "https://cd.csiid.ac.cn/wp-content/uploads/2025/08/berlin-design-innovation-1.jpg"
    },

    {
        id: 18,
        name: "Azores Green Retreat",
        country: "Portugal",
        city: "Azores",
        type: "ecovillage",
        price: 44,
        rating: 4.9,
        wifi: "150 Mbps",
        energy: "Geothermal",
        members: "75+",
        description:
            "Island living with volcanic landscapes and sustainable systems.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoncT8YIUNe2cl0GFch1LEL5lE_mmvJHOG6tbVh7PXfBEYR5ceFHfIqLA&s=10"
    },

    {
        id: 19,
        name: "Prague Work Loft",
        country: "Czechia",
        city: "Prague",
        type: "workspace",
        price: 24,
        rating: 4.7,
        wifi: "500 Mbps",
        energy: "Green Grid",
        members: "290+",
        description:
            "Central European workspace with excellent connectivity.",
        image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/820655478.jpg?k=34e766d41dff15b795fb6b82e7cff8d03db9e80d897b9ceb949c409b37f0d58f&o="
    },

    {
        id: 20,
        name: "Andes Eco Community",
        country: "Colombia",
        city: "Medellín",
        type: "ecovillage",
        price: 29,
        rating: 4.8,
        wifi: "180 Mbps",
        energy: "Solar",
        members: "95+",
        description:
            "Mountain community with a focus on nature and collaborative living.",
        image:
            "https://media.cntraveler.com/photos/5fa59e1ae346407c451b29dc/16:9/w_2560%2Cc_limit/MedellinColombia-2020-GettyImages-881736772.jpg"
    },

    {
        id: 21,
        name: "Sydney Ocean Office",
        country: "Australia",
        city: "Sydney",
        type: "workspace",
        price: 58,
        rating: 4.8,
        wifi: "800 Mbps",
        energy: "Green Grid",
        members: "500+",
        description:
            "Ocean-side workspace with premium remote-work facilities.",
        image:
            "https://assets.executivecentre.com/assets/Sydney-SYP-Gallery-PrivateOffice.jpg"
    },

    {
        id: 22,
        name: "Patagonia Eco Base",
        country: "Argentina",
        city: "Bariloche",
        type: "ecovillage",
        price: 39,
        rating: 4.9,
        wifi: "120 Mbps",
        energy: "Hydro",
        members: "60+",
        description:
            "Remote sustainable living surrounded by dramatic Patagonian scenery.",
        image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/315597022.jpg?k=799ce0f6e760024420f063ab4b04931444ace95dff16cedde40cfa59ded2f43e&o="
    },

    {
        id: 23,
        name: "Seoul Startup Space",
        country: "South Korea",
        city: "Seoul",
        type: "workspace",
        price: 47,
        rating: 4.9,
        wifi: "1000 Mbps",
        energy: "Green Grid",
        members: "800+",
        description:
            "Fast-paced coworking space designed for startups and technology teams.",
        image:
            "https://www.kedglobal.com/data/ked/image/2023/06/21/ked202306210043.700x.9.jpg"
    },

    {
        id: 24,
        name: "Moroccan Desert Eco Camp",
        country: "Morocco",
        city: "Marrakech",
        type: "ecovillage",
        price: 33,
        rating: 4.6,
        wifi: "80 Mbps",
        energy: "Solar",
        members: "45+",
        description:
            "Unique desert experience powered primarily by solar energy.",
        image:
            "https://www.tiziricamp.com/wp-content/uploads/2019/01/DX26014-Pano.jpg"
    },

    {
        id: 25,
        name: "Amsterdam Work Garden",
        country: "Netherlands",
        city: "Amsterdam",
        type: "workspace",
        price: 45,
        rating: 4.8,
        wifi: "800 Mbps",
        energy: "Wind",
        members: "400+",
        description:
            "Sustainable coworking surrounded by greenery.",
        image:
            "https://amsterdamian.com/wp-content/uploads/2021/07/Rijksmuseum-garden.jpg"
    },

    {
        id: 26,
        name: "Slovenian Forest Village",
        country: "Slovenia",
        city: "Ljubljana",
        type: "ecovillage",
        price: 30,
        rating: 4.8,
        wifi: "140 Mbps",
        energy: "Hydro",
        members: "50+",
        description:
            "A small forest community close to Ljubljana.",
        image:
            "https://cdn.world-discovery.com/42275/imgi_116_glamping-vipava-1-1024x683.webp"
    },

    {
        id: 27,
        name: "New York Remote Club",
        country: "USA",
        city: "New York",
        type: "workspace",
        price: 72,
        rating: 4.7,
        wifi: "1000 Mbps",
        energy: "Green Grid",
        members: "1000+",
        description:
            "Premium workspace in Manhattan for remote professionals.",
        image:
            "https://b2128690.assetcdn.net/2.0/2128690/wp-content/uploads/2023/04/farm-soho-best-co-working-new-york-city-1.jpg?lossy=2&strip=1&webp=1"
    },

    {
        id: 28,
        name: "Himalayan Eco Village",
        country: "Nepal",
        city: "Pokhara",
        type: "ecovillage",
        price: 23,
        rating: 4.9,
        wifi: "90 Mbps",
        energy: "Solar",
        members: "85+",
        description:
            "Mountain community with spectacular Himalayan views.",
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d4/79/c8/carnoustie-himalayan.jpg?w=900&h=500&s=1"
    },

    {
        id: 29,
        name: "Copenhagen Green Office",
        country: "Denmark",
        city: "Copenhagen",
        type: "workspace",
        price: 52,
        rating: 4.8,
        wifi: "900 Mbps",
        energy: "Wind",
        members: "370+",
        description:
            "Modern Nordic coworking with a strong sustainability focus.",
        image:
            "https://cdn.copcap.com/hubfs/_copenhagen-capacity/.com%20website/images/Copenhagen%20Capacity%20Workspace_Ty%20Stange%20at%20Bloxhub.jpg"
    },

    {
        id: 30,
        name: "Canary Eco Village",
        country: "Spain",
        city: "Tenerife",
        type: "ecovillage",
        price: 36,
        rating: 4.8,
        wifi: "180 Mbps",
        energy: "Solar",
        members: "90+",
        description:
            "Island community with ocean views and renewable energy.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PWamvh3JArJbYViGBwzrUYFJ6cCeNd2Z3jeU2vs8_G0z4DUu8yakV23Z&s=10"
    },

    {
        id: 31,
        name: "Lisbon Digital House",
        country: "Portugal",
        city: "Lisbon",
        type: "workspace",
        price: 30,
        rating: 4.8,
        wifi: "600 Mbps",
        energy: "Green Grid",
        members: "480+",
        description:
            "Bright and social coworking for international professionals.",
        image:
            "https://www.stay-in-lisbon.com//storage/1005044/conversions/lisbon-portugal-digital-nomad-guide-how-to-choose-the-right-hotel-full.webp"
    },

    {
        id: 32,
        name: "Lake Bled Eco Stay",
        country: "Slovenia",
        city: "Bled",
        type: "ecovillage",
        price: 41,
        rating: 4.9,
        wifi: "160 Mbps",
        energy: "Hydro",
        members: "70+",
        description:
            "Quiet sustainable accommodation beside Lake Bled.",
        image:
            "https://www.bohinj-eco-hotel.si/pic/product/g/activity-bled.2.jpg"
    },

    {
        id: 33,
        name: "Dubai Future Hub",
        country: "UAE",
        city: "Dubai",
        type: "workspace",
        price: 60,
        rating: 4.7,
        wifi: "1000 Mbps",
        energy: "Solar",
        members: "900+",
        description:
            "Technology-focused workspace in a futuristic environment.",
        image:
            "https://www.dubaifuture.ae/wp-content/uploads/2026/01/forum2026.jpg"
    },

    {
        id: 34,
        name: "Madeira Nature Village",
        country: "Portugal",
        city: "Madeira",
        type: "ecovillage",
        price: 40,
        rating: 4.9,
        wifi: "200 Mbps",
        energy: "Hydro",
        members: "100+",
        description:
            "Nature-focused island living with reliable remote-work infrastructure.",
        image:
            "https://www.islands.com/img/gallery/portugals-unbelievably-vibrant-village-on-the-renowned-madeira-island-has-coastal-charm-and-colorful-homes/l-intro-1749063698.jpg"
    },

    {
        id: 35,
        name: "Vienna Work Loft",
        country: "Austria",
        city: "Vienna",
        type: "workspace",
        price: 44,
        rating: 4.8,
        wifi: "700 Mbps",
        energy: "Green Grid",
        members: "330+",
        description:
            "Elegant European workspace with fast internet.",
        image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/914501004.jpg?k=b559d5634e6645efa38ef7446fbf0b48d3ba4b93dfa9835d60719f264e519196&o="
    },

    {
        id: 36,
        name: "Black Sea Eco Camp",
        country: "Georgia",
        city: "Batumi",
        type: "ecovillage",
        price: 26,
        rating: 4.7,
        wifi: "130 Mbps",
        energy: "Solar",
        members: "75+",
        description:
            "Green community close to the Black Sea.",
        image:
            "https://chernomorets.eu/images/working/Chernomorets-86.jpg"
    },

    {
        id: 37,
        name: "Paris Creative Desk",
        country: "France",
        city: "Paris",
        type: "workspace",
        price: 55,
        rating: 4.8,
        wifi: "800 Mbps",
        energy: "Green Grid",
        members: "500+",
        description:
            "Stylish coworking for creators and remote professionals.",
        image:
            "https://images.ctfassets.net/o1znirz7lzo4/2jsUTWKI5mPgik40RXm5xu/d3705c327816bbc689dc2ddb116499eb/Snap__RueDAguesseau__0525-09_F.jpg?fm=webp&q=40&h=800"
    },

    {
        id: 38,
        name: "Tropical Eco Haven",
        country: "Philippines",
        city: "Palawan",
        type: "ecovillage",
        price: 28,
        rating: 4.8,
        wifi: "100 Mbps",
        energy: "Solar",
        members: "55+",
        description:
            "A tropical sustainable community near pristine beaches.",
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/7a/37/7f/caption.jpg?w=900&h=-1&s=1"
    },

    {
        id: 39,
        name: "Helsinki Work Club",
        country: "Finland",
        city: "Helsinki",
        type: "workspace",
        price: 48,
        rating: 4.9,
        wifi: "1000 Mbps",
        energy: "Wind",
        members: "410+",
        description:
            "Minimal Nordic workspace with outstanding internet.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCH67rqQyk822AJX2vYpisTyCGUw1NNZ-jrk7kdl9Z3Q&s=10"
    },

    {
        id: 40,
        name: "Peruvian Mountain Village",
        country: "Peru",
        city: "Cusco",
        type: "ecovillage",
        price: 24,
        rating: 4.8,
        wifi: "90 Mbps",
        energy: "Solar",
        members: "65+",
        description:
            "Sustainable mountain living close to ancient landscapes.",
        image:
            "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/1280px-Machu_Picchu%2C_2023_%28012%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
    },

    {
        id: 41,
        name: "Toronto Remote Hub",
        country: "Canada",
        city: "Toronto",
        type: "workspace",
        price: 57,
        rating: 4.7,
        wifi: "900 Mbps",
        energy: "Hydro",
        members: "620+",
        description:
            "Modern workspace with a strong international community.",
        image:
            "https://calgaryhomes.ca/uploads/agent-1/toronto-home-office.jpg"
    },

    {
        id: 42,
        name: "Kyoto Forest Retreat",
        country: "Japan",
        city: "Kyoto",
        type: "ecovillage",
        price: 52,
        rating: 4.9,
        wifi: "200 Mbps",
        energy: "Solar",
        members: "80+",
        description:
            "Peaceful forest living inspired by traditional Japanese design.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF98Zii1cuG68dJJaoSlvbMWutP_CD_Mw1I60O-KtonQmx2SX0gtGcb7zz&s=10"
    },

    {
        id: 43,
        name: "Milan Design Workspace",
        country: "Italy",
        city: "Milan",
        type: "workspace",
        price: 43,
        rating: 4.8,
        wifi: "700 Mbps",
        energy: "Green Grid",
        members: "390+",
        description:
            "Design-oriented coworking space in Milan.",
        image:
            "https://hips.hearstapps.com/hmg-prod/images/02-the-hub-1553515428.jpg?resize=640:*"
    },

    {
        id: 44,
        name: "Tasmania Eco Base",
        country: "Australia",
        city: "Hobart",
        type: "ecovillage",
        price: 46,
        rating: 4.9,
        wifi: "140 Mbps",
        energy: "Hydro",
        members: "50+",
        description:
            "Remote eco living surrounded by wild landscapes.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR87tIrbtUL2XCDc62m_n-MhPczUauFqwNG6EQTGwCGybXATRESc3W3WeI&s=10"
    },

    {
        id: 45,
        name: "Brussels Work Garden",
        country: "Belgium",
        city: "Brussels",
        type: "workspace",
        price: 39,
        rating: 4.7,
        wifi: "600 Mbps",
        energy: "Green Grid",
        members: "280+",
        description:
            "Calm coworking space designed around plants and natural light.",
        image:
            "https://www.brussels.be/sites/default/files/collectif_1.jpg"
    },

    {
        id: 46,
        name: "Greek Island Village",
        country: "Greece",
        city: "Crete",
        type: "ecovillage",
        price: 34,
        rating: 4.8,
        wifi: "120 Mbps",
        energy: "Solar",
        members: "100+",
        description:
            "Mediterranean eco-living with sea views and local food.",
        image:
            "https://www.greeka.com/photos/greece/villages/general/santorini-oia-480.jpg"
    },

    {
        id: 47,
        name: "Stockholm Remote Lab",
        country: "Sweden",
        city: "Stockholm",
        type: "workspace",
        price: 54,
        rating: 4.9,
        wifi: "1000 Mbps",
        energy: "Wind",
        members: "450+",
        description:
            "Premium Nordic coworking environment.",
        image:
            "https://www.scilifelab.se/wp-content/uploads/2022/09/Fasad-SciLifeLab-Solna-2022-2-1-scaled.jpeg"
    },

    {
        id: 48,
        name: "Andalusia Eco Farm",
        country: "Spain",
        city: "Granada",
        type: "ecovillage",
        price: 29,
        rating: 4.7,
        wifi: "100 Mbps",
        energy: "Solar",
        members: "45+",
        description:
            "Eco-farm living surrounded by Andalusian countryside.",
        image:
            "https://sb.ecobnb.net/app/uploads/sites/3/2025/06/Eco-Andalucia-Cover-Image-Casa-Belmonte--1170x490.jpg"
    },

    {
        id: 49,
        name: "Singapore Digital Hub",
        country: "Singapore",
        city: "Singapore",
        type: "workspace",
        price: 68,
        rating: 4.9,
        wifi: "1000 Mbps",
        energy: "Green Grid",
        members: "950+",
        description:
            "High-tech workspace in one of Asia's strongest digital cities.",
        image:
            "https://scwcontent.affino.com/AcuCustom/Sitename/DAM/023/Marina_Bay_digital_Singapore_1.jpg"
    },

    {
        id: 50,
        name: "Namibian Solar Village",
        country: "Namibia",
        city: "Windhoek",
        type: "ecovillage",
        price: 27,
        rating: 4.6,
        wifi: "70 Mbps",
        energy: "Solar",
        members: "40+",
        description:
            "Off-grid community powered by abundant solar energy.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_84LjgOv2fxQ5MLcV7ytp_E67YpTKEJG2o4vp4vZ6LfBXGX2Bfe4EIB3c&s=10"
    },

    {
        id: 51,
        name: "Dublin Startup House",
        country: "Ireland",
        city: "Dublin",
        type: "workspace",
        price: 50,
        rating: 4.8,
        wifi: "800 Mbps",
        energy: "Green Grid",
        members: "350+",
        description:
            "Startup-focused workspace with an international community.",
        image:
            "https://www.thinkbusiness.ie/app/uploads/2025/02/nova-ucd-1.jpg"
    },

    {
        id: 52,
        name: "Scottish Highlands Eco",
        country: "Scotland",
        city: "Inverness",
        type: "ecovillage",
        price: 43,
        rating: 4.8,
        wifi: "110 Mbps",
        energy: "Wind",
        members: "55+",
        description:
            "Remote eco-living in the Scottish Highlands.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IihI07zK-MBeVoVGlzyd7NimL4mJHF1pb7ta-jr2s7vIv41y1ehtAK8&s=10"
    },

    {
        id: 53,
        name: "Warsaw Work Station",
        country: "Poland",
        city: "Warsaw",
        type: "workspace",
        price: 22,
        rating: 4.7,
        wifi: "600 Mbps",
        energy: "Green Grid",
        members: "430+",
        description:
            "Affordable professional coworking in Warsaw.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DAC8aMj3NnAveOYUFMw0cTyGiDouCEu7IIxC7UtN_J07Plc2JEbjj1cF&s=10"
    },

    {
        id: 54,
        name: "Balkan Green Village",
        country: "Montenegro",
        city: "Kotor",
        type: "ecovillage",
        price: 32,
        rating: 4.9,
        wifi: "130 Mbps",
        energy: "Solar",
        members: "70+",
        description:
            "Sustainable living between mountains and the Adriatic Sea.",
        image:
            "https://thumbs.dreamstime.com/b/picture-was-taken-montenegro-small-village-buildings-green-balkan-mountains-montenegro-139108032.jpg"
    },

    {
        id: 55,
        name: "Reykjavik Creative Hub",
        country: "Iceland",
        city: "Reykjavik",
        type: "workspace",
        price: 59,
        rating: 4.9,
        wifi: "900 Mbps",
        energy: "Geothermal",
        members: "250+",
        description:
            "Creative workspace powered by Iceland's clean energy.",
        image:
            "https://gti.images.tshiftcdn.com/10429184/x/0/harpa-reykjavik-concert-hall-and-conference-centre-3.jpg?ixlib=php-3.3.0&w=883"
    },

    {
        id: 56,
        name: "Sicilian Eco Farm",
        country: "Italy",
        city: "Sicily",
        type: "ecovillage",
        price: 30,
        rating: 4.7,
        wifi: "100 Mbps",
        energy: "Solar",
        members: "60+",
        description:
            "Slow living, organic food and Mediterranean landscapes.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCnvX4sZ74m2Eqdg18WEpwa9L70J6VOXKNqBXYYEVVd2l_kSWepVty48&s=10"
    },

    {
        id: 57,
        name: "Austin Creator Space",
        country: "USA",
        city: "Austin",
        type: "workspace",
        price: 40,
        rating: 4.8,
        wifi: "900 Mbps",
        energy: "Green Grid",
        members: "520+",
        description:
            "A creative coworking community for makers and entrepreneurs.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SvMG2vF-aSL-ApX8gzA2kw_YVhE7DoAXGj3iHuWjb0yi7EGZsCRyeXyC&s=10"
    },

    {
        id: 58,
        name: "New Zealand Eco Retreat",
        country: "New Zealand",
        city: "Queenstown",
        type: "ecovillage",
        price: 48,
        rating: 4.9,
        wifi: "150 Mbps",
        energy: "Hydro",
        members: "65+",
        description:
            "Mountain eco-retreat for nature lovers and remote workers.",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 59,
        name: "Buenos Aires Work Club",
        country: "Argentina",
        city: "Buenos Aires",
        type: "workspace",
        price: 20,
        rating: 4.7,
        wifi: "500 Mbps",
        energy: "Green Grid",
        members: "370+",
        description:
            "Social and affordable coworking in Buenos Aires.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmq-49ttGyk8dNaVFvRh277l_pBilz2bitAMclE4iNqEAk7AXidy8_jJS&s=10"
    },

    {
        id: 60,
        name: "Arctic Green Village",
        country: "Norway",
        city: "Tromsø",
        type: "ecovillage",
        price: 53,
        rating: 4.9,
        wifi: "180 Mbps",
        energy: "Hydro",
        members: "45+",
        description:
            "A remote northern community surrounded by spectacular Arctic nature.",
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/5c/f5/b5/juoksenki-arctic-circle.jpg?w=900&h=500&s=1"
    }

];


let currentFilter = "all";
let currentPage = 1;

const itemsPerPage = 12;

let favorites =
    JSON.parse(localStorage.getItem("nomadFavorites")) || [];




const cardsContainer =
    document.getElementById("cardsContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortSelect =
    document.getElementById("sortSelect");

const resultsCount =
    document.getElementById("resultsCount");

const pagination =
    document.getElementById("pagination");

const emptyState =
    document.getElementById("emptyState");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const modal =
    document.getElementById("spaceModal");

const modalBody =
    document.getElementById("modalBody");

const bookingModal =
    document.getElementById("bookingModal");

const bookingPlace =
    document.getElementById("bookingPlace");




document.addEventListener("DOMContentLoaded", () => {

    updateFavoriteCount();

    renderDestinations();

    setupCounters();

    setupNavigation();

    setupEvents();

    loadTheme();

    setMinimumDates();

});




function getFilteredDestinations() {

    let result = [...destinations];

    const search =
        searchInput.value
            .trim()
            .toLowerCase();




    if (search) {

        result = result.filter(item => {

            return (

                item.name.toLowerCase().includes(search) ||

                item.country.toLowerCase().includes(search) ||

                item.city.toLowerCase().includes(search) ||

                item.description.toLowerCase().includes(search)

            );

        });

    }




    if (
        currentFilter !== "all" &&
        currentFilter !== "favorites"
    ) {

        result = result.filter(
            item => item.type === currentFilter
        );

    }




    if (currentFilter === "favorites") {

        result = result.filter(
            item => favorites.includes(item.id)
        );

    }




    const selectedCategory =
        categoryFilter.value;

    if (selectedCategory !== "all") {

        result = result.filter(
            item => item.type === selectedCategory
        );

    }




    switch (sortSelect.value) {

        case "rating":

            result.sort(
                (a, b) => b.rating - a.rating
            );

            break;


        case "price-low":

            result.sort(
                (a, b) => a.price - b.price
            );

            break;


        case "price-high":

            result.sort(
                (a, b) => b.price - a.price
            );

            break;

    }


    return result;
}


function renderDestinations() {

    const result =
        getFilteredDestinations();


    resultsCount.textContent =
        result.length;


    if (result.length === 0) {

        cardsContainer.innerHTML = "";

        emptyState.classList.add("show");

        pagination.innerHTML = "";

        return;

    }


    emptyState.classList.remove("show");


    const totalPages =
        Math.ceil(result.length / itemsPerPage);


    if (currentPage > totalPages) {
        currentPage = totalPages;
    }


    const start =
        (currentPage - 1) * itemsPerPage;


    const visible =
        result.slice(
            start,
            start + itemsPerPage
        );


    cardsContainer.innerHTML =
        visible.map(createCard).join("");


    renderPagination(totalPages);

}



function createCard(item) {

    const isFavorite =
        favorites.includes(item.id);


    const typeLabel =
        item.type === "workspace"
            ? "Workspace"
            : "Eco-village";


    return `

        <article class="destination-card">

            <div class="card-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

                <div class="card-gradient"></div>

                <span class="
                    card-category
                    ${item.type === "ecovillage" ? "eco" : ""}
                ">
                    ${typeLabel}
                </span>


                <button
                    class="
                        favorite-btn
                        ${isFavorite ? "active" : ""}
                    "
                    data-favorite="${item.id}"
                    aria-label="Favorite"
                >
                    <i class="
                        ${isFavorite
            ? "fa-solid"
            : "fa-regular"}
                        fa-heart
                    "></i>
                </button>


                <div class="card-rating">

                    <i class="fa-solid fa-star"></i>

                    ${item.rating}

                </div>

            </div>


            <div class="card-body">

                <div class="card-location">

                    <i class="fa-solid fa-location-dot"></i>

                    ${item.city}, ${item.country}

                </div>


                <h3 class="card-title">
                    ${item.name}
                </h3>


                <p class="card-description">
                    ${item.description}
                </p>


                <div class="card-meta">

                    <div class="meta-item">

                        <i class="fa-solid fa-wifi"></i>

                        ${item.wifi}

                    </div>


                    <div class="meta-item">

                        <i class="fa-solid fa-bolt"></i>

                        ${item.energy}

                    </div>


                    <div class="meta-item">

                        <i class="fa-solid fa-users"></i>

                        ${item.members}

                    </div>

                </div>


                <div class="card-footer">

                    <div class="card-price">

                        <strong>
                            $${item.price}
                        </strong>

                        <span>/ day</span>

                    </div>


                    <button
                        class="details-btn"
                        data-details="${item.id}"
                    >
                        View details
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>

        </article>

    `;
}



function renderPagination(totalPages) {

    pagination.innerHTML = "";

    if (totalPages <= 1) {
        return;
    }


    const previous =
        document.createElement("button");

    previous.className = "page-btn";

    previous.innerHTML =
        `<i class="fa-solid fa-chevron-left"></i>`;

    previous.disabled =
        currentPage === 1;

    previous.onclick = () => {

        if (currentPage > 1) {

            currentPage--;

            renderDestinations();

            scrollToDirectory();

        }

    };

    pagination.appendChild(previous);


    for (let i = 1; i <= totalPages; i++) {

        const button =
            document.createElement("button");

        button.className =
            `page-btn ${i === currentPage
                ? "active"
                : ""
            }`;

        button.textContent = i;

        button.onclick = () => {

            currentPage = i;

            renderDestinations();

            scrollToDirectory();

        };

        pagination.appendChild(button);

    }


    const next =
        document.createElement("button");

    next.className = "page-btn";

    next.innerHTML =
        `<i class="fa-solid fa-chevron-right"></i>`;

    next.disabled =
        currentPage === totalPages;

    next.onclick = () => {

        if (currentPage < totalPages) {

            currentPage++;

            renderDestinations();

            scrollToDirectory();

        }

    };

    pagination.appendChild(next);

}



function setupEvents() {



    searchInput.addEventListener(
        "input",
        debounce(() => {

            currentPage = 1;

            renderDestinations();

        }, 250)
    );


    document.getElementById("searchBtn")
        .addEventListener("click", () => {

            currentPage = 1;

            renderDestinations();

            document
                .getElementById("directory")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });




    categoryFilter.addEventListener(
        "change",
        () => {

            currentPage = 1;

            renderDestinations();

        }
    );




    sortSelect.addEventListener(
        "change",
        () => {

            currentPage = 1;

            renderDestinations();

        }
    );




    document.querySelectorAll(".filter-tab")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".filter-tab")
                        .forEach(btn =>
                            btn.classList.remove("active")
                        );

                    button.classList.add("active");

                    currentFilter =
                        button.dataset.filter;

                    currentPage = 1;

                    categoryFilter.value = "all";

                    renderDestinations();

                }
            );

        });




    cardsContainer.addEventListener(
        "click",
        event => {

            const favorite =
                event.target.closest(
                    "[data-favorite]"
                );

            const details =
                event.target.closest(
                    "[data-details]"
                );


            if (favorite) {

                toggleFavorite(
                    Number(
                        favorite.dataset.favorite
                    )
                );

            }


            if (details) {

                openDetails(
                    Number(
                        details.dataset.details
                    )
                );

            }

        }
    );



    document
        .getElementById("closeModal")
        .addEventListener(
            "click",
            closeDetails
        );


    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {
                closeDetails();
            }

        }
    );




    document
        .getElementById("closeBooking")
        .addEventListener(
            "click",
            closeBooking
        );


    bookingModal.addEventListener(
        "click",
        event => {

            if (event.target === bookingModal) {
                closeBooking();
            }

        }
    );


    document
        .getElementById("bookingForm")
        .addEventListener(
            "submit",
            submitBooking
        );



    document
        .getElementById("newsletterForm")
        .addEventListener(
            "submit",
            submitNewsletter
        );




    document
        .getElementById("clearFilters")
        .addEventListener(
            "click",
            resetFilters
        );


    document
        .getElementById("emptyReset")
        .addEventListener(
            "click",
            resetFilters
        );




    document
        .getElementById("gridView")
        .addEventListener(
            "click",
            () => {

                cardsContainer.classList.remove(
                    "list-view"
                );

                document
                    .getElementById("gridView")
                    .classList.add("active");

                document
                    .getElementById("listView")
                    .classList.remove("active");

            }
        );


    document
        .getElementById("listView")
        .addEventListener(
            "click",
            () => {

                cardsContainer.classList.add(
                    "list-view"
                );

                document
                    .getElementById("listView")
                    .classList.add("active");

                document
                    .getElementById("gridView")
                    .classList.remove("active");

            }
        );




    document
        .getElementById("favoritesButton")
        .addEventListener(
            "click",
            () => {

                currentFilter = "favorites";

                currentPage = 1;

                document
                    .querySelectorAll(".filter-tab")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                document
                    .querySelector(
                        '[data-filter="favorites"]'
                    )
                    .classList.add("active");

                renderDestinations();

                scrollToDirectory();

            }
        );




    document
        .getElementById("communityBtn")
        .addEventListener(
            "click",
            () => {

                showToast(
                    "Welcome to the NomadEcoHub community 🌱"
                );

            }
        );

}


function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast("Removed from favorites");

    } else {

        favorites.push(id);

        showToast("Added to favorites ❤️");

    }


    localStorage.setItem(
        "nomadFavorites",
        JSON.stringify(favorites)
    );


    updateFavoriteCount();

    renderDestinations();

}


function updateFavoriteCount() {

    document.getElementById(
        "favoriteCount"
    ).textContent = favorites.length;

}




function openDetails(id) {

    const item =
        destinations.find(
            destination =>
                destination.id === id
        );

    if (!item) return;


    modalBody.innerHTML = `

        <div class="modal-image">

            <img
                src="${item.image}"
                alt="${item.name}"
            >

        </div>


        <div class="modal-info">

            <span class="modal-location">

                <i class="fa-solid fa-location-dot"></i>

                ${item.city}, ${item.country}

            </span>


            <h2 class="modal-title">
                ${item.name}
            </h2>


            <p class="modal-description">
                ${item.description}
                This destination has been selected
                for remote workers looking for a balance
                between productivity, community and nature.
            </p>


            <div class="modal-features">

                <div class="modal-feature">

                    <i class="fa-solid fa-wifi"></i>

                    <strong>${item.wifi}</strong>

                    <span>Internet</span>

                </div>


                <div class="modal-feature">

                    <i class="fa-solid fa-bolt"></i>

                    <strong>${item.energy}</strong>

                    <span>Energy</span>

                </div>


                <div class="modal-feature">

                    <i class="fa-solid fa-users"></i>

                    <strong>${item.members}</strong>

                    <span>Community</span>

                </div>

            </div>


            <div class="modal-bottom">

                <div class="modal-price">

                    <strong>
                        $${item.price}
                    </strong>

                    <span>
                        / day
                    </span>

                </div>


                <button
                    class="btn btn-primary"
                    id="modalBookButton"
                >
                    Request a stay

                    <i class="fa-solid fa-calendar-check"></i>

                </button>

            </div>

        </div>

    `;


    modal.classList.add("show");

    document.body.style.overflow = "hidden";


    document
        .getElementById("modalBookButton")
        .addEventListener(
            "click",
            () => {

                closeDetails();

                openBooking(item);

            }
        );

}


function closeDetails() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}



let selectedDestination = null;


function openBooking(item) {

    selectedDestination = item;

    bookingPlace.textContent =
        `${item.name} · ${item.city}, ${item.country}`;

    bookingModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeBooking() {

    bookingModal.classList.remove("show");

    document.body.style.overflow = "";

}


function submitBooking(event) {

    event.preventDefault();


    const firstName =
        document.getElementById("firstName").value.trim();

    const lastName =
        document.getElementById("lastName").value.trim();


    showToast(
        `Thank you ${firstName}! Your request has been received.`
    );


    console.log(
        "Booking request:",
        {
            destination: selectedDestination,
            firstName,
            lastName,
            email:
                document.getElementById(
                    "bookingEmail"
                ).value,

            checkIn:
                document.getElementById(
                    "checkIn"
                ).value,

            checkOut:
                document.getElementById(
                    "checkOut"
                ).value,

            guests:
                document.getElementById(
                    "guests"
                ).value
        }
    );


    event.target.reset();

    closeBooking();

}




function submitNewsletter(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "newsletterEmail"
        ).value;


    showToast(
        `Subscribed successfully: ${email}`
    );


    event.target.reset();

}


/* =========================================
   RESET
========================================= */

function resetFilters() {

    searchInput.value = "";

    categoryFilter.value = "all";

    sortSelect.value = "featured";

    currentFilter = "all";

    currentPage = 1;


    document
        .querySelectorAll(".filter-tab")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    document
        .querySelector(
            '[data-filter="all"]'
        )
        .classList.add("active");


    renderDestinations();

}




function loadTheme() {

    const saved =
        localStorage.getItem(
            "nomadTheme"
        );


    if (saved === "dark") {

        document.body.classList.add("dark");

        updateThemeIcon();

    }

}


document
    .getElementById("themeToggle")
    .addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );


            const dark =
                document.body.classList.contains(
                    "dark"
                );


            localStorage.setItem(
                "nomadTheme",
                dark ? "dark" : "light"
            );


            updateThemeIcon();

        }
    );


function updateThemeIcon() {

    const icon =
        document.querySelector(
            "#themeToggle i"
        );


    const dark =
        document.body.classList.contains(
            "dark"
        );


    icon.className =
        dark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

}




function setupNavigation() {

    const header =
        document.getElementById("header");

    const mobileMenu =
        document.getElementById("mobileMenuBtn");

    const navMenu =
        document.getElementById("navMenu");


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 20) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }


            const backTop =
                document.getElementById(
                    "backTop"
                );


            if (window.scrollY > 500) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }


            updateActiveNav();

        }
    );


    mobileMenu.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "show"
            );


            const icon =
                mobileMenu.querySelector("i");


            icon.className =
                navMenu.classList.contains("show")
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";

        }
    );


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "show"
                    );

                    mobileMenu
                        .querySelector("i")
                        .className =
                        "fa-solid fa-bars";

                }
            );

        });


    document
        .getElementById("backTop")
        .addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

}


function updateActiveNav() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const links =
        document.querySelectorAll(
            ".nav-link"
        );


    let current = "";


    sections.forEach(section => {

        const top =
            section.offsetTop - 150;


        if (
            window.scrollY >= top
        ) {

            current =
                section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}




function setupCounters() {

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        !entry.target.dataset.done
                    ) {

                        animateCounter(
                            entry.target
                        );

                        entry.target.dataset.done =
                            "true";

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter =>
        observer.observe(counter)
    );

}


function animateCounter(element) {

    const target =
        Number(
            element.dataset.target
        );


    let current = 0;

    const duration = 1500;

    const start =
        performance.now();


    function update(time) {

        const progress =
            Math.min(
                (time - start) / duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        current =
            Math.floor(
                target * eased
            );


        element.textContent =
            current.toLocaleString();


        if (progress < 1) {

            requestAnimationFrame(
                update
            );

        } else {

            element.textContent =
                target.toLocaleString();

        }

    }


    requestAnimationFrame(update);

}




let toastTimer;


function showToast(message) {

    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3000);

}




function debounce(callback, delay) {

    let timer;


    return (...args) => {

        clearTimeout(timer);


        timer =
            setTimeout(
                () => callback(...args),
                delay
            );

    };

}


function scrollToDirectory() {

    document
        .getElementById("directory")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}




document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeDetails();

            closeBooking();

        }

    }
);


function setMinimumDates() {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    document
        .getElementById("checkIn")
        .min = today;


    document
        .getElementById("checkOut")
        .min = today;


    document
        .getElementById("checkIn")
        .addEventListener(
            "change",
            event => {

                document
                    .getElementById(
                        "checkOut"
                    )
                    .min =
                    event.target.value;

            }
        );

}



window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            document
                .getElementById("loader")
                .classList.add("hidden");

        }, 700);

    }
);