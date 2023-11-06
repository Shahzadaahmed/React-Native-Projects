import Svg, {SvgWithCss} from "react-native-svg"
import {LATITUDE_DELTA, LONGITUDE_DELTA} from "../common/Constants"
import Images from "../common/Images"
import {Svgs} from "../utils"
import icons from '../../assets/icons'
export const notificationList = [
    {
        title: 'Today',
        data: [
            {
                id: '1',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
            {
                id: '2',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
            {
                id: '3',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
            {
                id: '4',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
            {
                id: '5',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
        ]
    },
    {
        title: 'Yesterday',
        data: [
            {
                id: '1',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
            {
                id: '2',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
            {
                id: '3',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
            {
                id: '4',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
            {
                id: '5',
                avatar: 'https://www.pexels.com/photo/1640777/download/',
                order: 'Order # 43525',
                status: 'Started assembling the order',
                duration: '25 min'
            },
        ]
    },
]

export const charityDetail =
{
    title: 'Charity',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.',
    askQuestion: 'Ask us a question',
    subscriptions: [
        {
            id: '0',
            title: 'Subscribe',
            description: 'Subscribe and get daily food discounts'
        },
        {
            id: '1',
            title: 'Subscribe',
            description: 'When ordering from $ 3.49 As a gift second course'
        },
        {
            id: '2',
            title: 'Subscribe',
            description: 'When ordering from $ 3.49 As a gift second course'
        }
    ],
    categories: [
        {
            id: '0',
            name: 'All'
        },
        {
            id: '1',
            name: 'Hospitals'
        },
        {
            id: '2',
            name: 'Refugees'
        },
        {
            id: '3',
            name: 'Mediterranean'
        }
    ],
    placesList: [
        {
            id: '0',
            type: 'all',
            icon: 'c1',
            title: 'Harley Street Clinic',
            description: '35 Weymouth Street,W1G 8BJ . 1.2 km'
        },
        {
            id: '1',
            type: 'all',
            icon: 'c2',
            title: 'Royal Bromton Clinic',
            description: 'Sydney Street, SW3 6NP . 1.2 km'
        },
        {
            id: '2',
            type: 'all',
            icon: 'c3',
            title: 'Wellington Hospital',
            description: 'Wellington Place, NW8 9LE . 1.2 km'
        },
        {
            id: '3',
            type: 'all',
            icon: 'c4',
            title: 'Portland Hospital',
            description: '209 Gr.Portland Street, W1W 5AH . 1.2 km'
        },
    ]
}

export const referFriendDetail =
{
    title: 'Excepteur sint occaecat',
    description: 'For each invited friend you will receive bonuses and discounts you can also get food for free for each invited friend you will receive bonuses and discounts you can also get food for free',
    copy: 'Copy GSVGH3',
    invite: 'Invite a friend',

}

export const banners =
    [
        {
            id: '0',
            image: Images.MainBanner
        },
        {
            id: '1',
            image: Images.MainBanner
        },
        {
            id: '2',
            image: Images.MainBanner
        },
        {
            id: '3',
            image: Images.MainBanner
        }
    ]

export const hangoutBanners =
    [
        {
            id: '0',
            image: Images.HangoutBanner
        },
        {
            id: '1',
            image: Images.HangoutBanner
        },
        {
            id: '2',
            image: Images.HangoutBanner
        },
        {
            id: '3',
            image: Images.HangoutBanner
        }
    ]

export const restaurantCategories =
    [
        {
            id: '0',
            name: 'All'
        },
        {
            id: '1',
            name: 'Turkish'
        },
        {
            id: '2',
            name: 'Italian'
        },
        {
            id: '3',
            name: 'Mediterranean'
        }
    ]

    export const restaurantOffers =
    [
        {
            id: '0',
            name: 'All'
        },
        {
            id: '1',
            name: 'Beakfast'
        },
        {
            id: '2',
            name: 'Dinner'
        },
        {
            id: '3',
            name: 'Launch'
        }
    ]

export const restaurantsList =
    [
        {
            id: '0',
            name: 'Divella Bistro Restaurant',
            rating: '4.9',
            type: 'Italian . Seafood',
            image: 'https://khappa.pk/wp-content/uploads/2018/10/ff1.jpg',
            distance: '1.2km',
            closing: '00:22:15'
        },
        {
            id: '1',
            name: 'Divella Bistro Restaurant',
            rating: '4.9',
            type: 'Healthy . Neapolitan',
            image: 'https://images.squarespace-cdn.com/content/v1/5b2cd12dee17596af71ba454/1539847233043-2Q7P3MH1RKEOP2OJTO4X/Pur-Restaurant-Paris.jpg?format=2500w',
            distance: '1.5km',
        },
        {
            id: '2',
            name: 'Nadia Magonagl',
            rating: '4.7',
            type: 'Italian . Seafood',
            image: 'https://images.onhealth.com/images/slideshow/10-foods-to-eat-when-you-have-the-flu-s2-photo-of-turkey-sandwich-with-cranberries.jpg',
            distance: '2.2km',
        },
    ]

export const markers =
    [
        {
            id: '1',
            coordinate:
            {
                latitude: 22.6293867,
                longitude: 88.4354486,
            },
            name: 'Good Morning Cafe',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/c3/8d/ambiance.jpg',
            rating: '4.7',
            timing: 'From 8 to 22',
            distance: '1.2 km',
            pricing: '$ 0.99'
        },
        {
            id: '2',
            coordinate:
            {
                latitude: 22.6345648,
                longitude: 88.4377279,
            },
            name: 'Good Morning Cafe',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/c3/8d/ambiance.jpg',
            rating: '4.7',
            timing: 'From 8 to 22',
            distance: '1.2 km',
            pricing: '$ 0.99'
        },
        {
            id: '3',
            coordinate:
            {
                latitude: 22.6281662,
                longitude: 88.4410113,
            },
            name: 'Good Morning Cafe',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/c3/8d/ambiance.jpg',
            rating: '4.7',
            timing: 'From 8 to 22',
            distance: '1.2 km',
            pricing: '$ 0.99'
        },
        {
            id: '4',
            coordinate:
            {
                latitude: 22.6341137,
                longitude: 88.4497463,
            },
            name: 'Good Morning Cafe',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/c3/8d/ambiance.jpg',
            rating: '4.7',
            timing: 'From 8 to 22',
            distance: '1.2 km',
            pricing: '$ 0.99'
        },
        {
            id: '5',
            coordinate:
            {
                latitude: 22.6292757,
                longitude: 88.444781,
            },
            name: 'Good Morning Cafe',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/c3/8d/ambiance.jpg',
            rating: '4.7',
            timing: 'From 8 to 22',
            distance: '1.2 km',
            pricing: '$ 0.99',
        }
    ]

export const moreItems = [
    {
        id: '1',
        name: 'Wallet',
        icon: Svgs.WalletIcon
    },
    {
        id: '2',
        name: 'Chats',
        icon: Svgs.ChatsIcon
    },
    {
        id: '3',
        name: 'Diet',
        icon: Svgs.DietIcon
    },
    {
        id: '4',
        name: 'Loyalty',
        icon: Svgs.LoyaltyIcon
    },
    {
        id: '5',
        name: 'Offers',
        icon: Svgs.OffersIcon
    },
    {
        id: '6',
        name: 'Subscribe',
        icon: Svgs.SubscribeIcon
    },
    {
        id: '7',
        name: 'Address',
        icon: Svgs.AddressIcon
    },
    {
        id: '8',
        name: 'Refer a Friend',
        icon: Svgs.ReferIcon
    },
    {
        id: '9',
        name: 'Contact us',
        icon: Svgs.inbox
    },
    {
        id: '10',
        name: 'Setting',
        icon: Svgs.SettingIcon
    }
]

export const AddressItems = [
    {
        id: '1',
        address: '13 Old Bailey EC4M 7BA',
        place_name:"Home",
        icon: Svgs.marker
    },
    {
        id: '2',
        address: '12 Old Bailey EC4M 7BA',
        place_name:"Office",
        icon: Svgs.marker
    },
    {
        id: '3',
        address: '199 Old Bailey EC4M TBA',
        place_name:"Home",
        icon: Svgs.marker
    },
    {
        id: '4',
        address: '13 Old Bailey EC4M 7BA',
        place_name:"Gergiy",
        icon: Svgs.marker
    },
    {
        id: '5',
        address: '13 Old Bailey EC4M 7BA',
        place_name:"Home",
        icon: Svgs.marker
    },
]

export const roles = [
    {
        id: '1',
        icon: Svgs.BecomeCook
    },
    {
        id: '2',
        icon: Svgs.BecomeDriver
    },
    {
        id: '3',
        icon: Svgs.BecomeDoctor
    },
    {
        id: '4',
        icon: Svgs.BecomeHost
    }
]


export const charityCategoryList =
    [
        {
            id: '0',
            name: 'Poke with salmon and avocado',
            image: 'https://khappa.pk/wp-content/uploads/2018/10/ff1.jpg',
            price: "15",
            weight: "34 g"
        },
        {
            id: '1',
            name: 'Fruit salad with bananas',
            image: 'https://images.squarespace-cdn.com/content/v1/5b2cd12dee17596af71ba454/1539847233043-2Q7P3MH1RKEOP2OJTO4X/Pur-Restaurant-Paris.jpg?format=2500w',
            price: "15",
            weight: "300 g"
        },
        {
            id: '3',
            name: 'Squaid and and pine nut salad',
            image: 'https://images.squarespace-cdn.com/content/v1/5b2cd12dee17596af71ba454/1539847233043-2Q7P3MH1RKEOP2OJTO4X/Pur-Restaurant-Paris.jpg?format=2500w',
            price: "15",
            weight: "342 g"
        },
        {
            id: '4',
            name: 'Squaid and and pine nut salad',
            image: 'https://images.squarespace-cdn.com/content/v1/5b2cd12dee17596af71ba454/1539847233043-2Q7P3MH1RKEOP2OJTO4X/Pur-Restaurant-Paris.jpg?format=2500w',
            price: "15",
            weight: "346 g"

        },

    ]

export const hangoutRestaurantsList =
    [
        {
            id: '0',
            name: 'Divella Bistro Restaurant',
            rating: '4.9',
            type: 'Italian . Seafood',
            image: 'https://khappa.pk/wp-content/uploads/2018/10/ff1.jpg',
            distance: '1.2km',
            timing: 'From 8 to 22',
            pricing: 0.99,
            foods:
                [
                    {
                        id: '0',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
                        weight: '244 g',
                        price: 4.29,
                    },
                    {
                        id: '1',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://images.squarespace-cdn.com/content/v1/5147678ce4b031aaae35cb81/1572171019828-B6JRYX1MWBUXU1DMCVNS/dylan+swart+toronto+food+photographer+fine+dining+beef.jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '2',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://s3.eu-west-1.amazonaws.com/images.prod.phoode.com/photos/project/5e7d18cc509cd.jpeg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '3',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://img.freepik.com/free-photo/penne-pasta-with-pesto-sauce-zucchini-green-peas-basil-italian-food-top-view-flat-lay_2829-19620.jpg?size=626&ext=jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '4',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://simplyhomecooked.com/wp-content/uploads/2020/02/Tuscan-chicken-pasta-n-scaled.jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '5',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN2Fgu-B0Zqk4h0LZZP_5fT-vmw_ZSUXkhA&usqp=CAU',
                        weight: '244 g',
                        price: 4.29
                    }
                ]

        },
        {
            id: '1',
            name: 'Divella Bistro Restaurant',
            rating: '4.9',
            type: 'Healthy . Neapolitan',
            image: 'https://images.squarespace-cdn.com/content/v1/5b2cd12dee17596af71ba454/1539847233043-2Q7P3MH1RKEOP2OJTO4X/Pur-Restaurant-Paris.jpg?format=2500w',
            distance: '1.5km',
            timing: 'From 8 to 22',
            pricing: 0.29,
            foods:
                [
                    {
                        id: '0',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '1',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://images.squarespace-cdn.com/content/v1/5147678ce4b031aaae35cb81/1572171019828-B6JRYX1MWBUXU1DMCVNS/dylan+swart+toronto+food+photographer+fine+dining+beef.jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '2',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://s3.eu-west-1.amazonaws.com/images.prod.phoode.com/photos/project/5e7d18cc509cd.jpeg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '3',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://img.freepik.com/free-photo/penne-pasta-with-pesto-sauce-zucchini-green-peas-basil-italian-food-top-view-flat-lay_2829-19620.jpg?size=626&ext=jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '4',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://simplyhomecooked.com/wp-content/uploads/2020/02/Tuscan-chicken-pasta-n-scaled.jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '5',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN2Fgu-B0Zqk4h0LZZP_5fT-vmw_ZSUXkhA&usqp=CAU',
                        weight: '244 g',
                        price: 4.29
                    }
                ]
        },
        {
            id: '2',
            name: 'Nadia Magonagl',
            rating: '4.7',
            type: 'Italian . Seafood',
            image: 'https://images.onhealth.com/images/slideshow/10-foods-to-eat-when-you-have-the-flu-s2-photo-of-turkey-sandwich-with-cranberries.jpg',
            distance: '2.2km',
            timing: 'From 8 to 22',
            pricing: 0.99,
            foods:
                [
                    {
                        id: '0',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '1',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://images.squarespace-cdn.com/content/v1/5147678ce4b031aaae35cb81/1572171019828-B6JRYX1MWBUXU1DMCVNS/dylan+swart+toronto+food+photographer+fine+dining+beef.jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '2',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://s3.eu-west-1.amazonaws.com/images.prod.phoode.com/photos/project/5e7d18cc509cd.jpeg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '3',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://img.freepik.com/free-photo/penne-pasta-with-pesto-sauce-zucchini-green-peas-basil-italian-food-top-view-flat-lay_2829-19620.jpg?size=626&ext=jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '4',
                        name: 'Pasta with shrimps in sause',
                        image: 'https://simplyhomecooked.com/wp-content/uploads/2020/02/Tuscan-chicken-pasta-n-scaled.jpg',
                        weight: '244 g',
                        price: 4.29
                    },
                    {
                        id: '5',
                        name: 'Pasta with basal and tomatoes',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN2Fgu-B0Zqk4h0LZZP_5fT-vmw_ZSUXkhA&usqp=CAU',
                        weight: '244 g',
                        price: 4.29
                    }
                ]
        },
    ]

export const foodDetail = {
    title: 'Pasta with basal and tomatoes',
    description: 'Two 100% beef steaks on a special Big Mac bun, dressed with onions and two cucumber slices, a slice of cheese, salad.',
    price: 4.49,
    weight: '203 g',
    stats: [
        {
            id: 'nutrional',
            text: 'Nutrional Value',
        },
        {
            id: 'time',
            text: '10 min'
        },
        {
            id: 'approved',
            text: 'Approved'
        }
    ],
    ingredients: ['Sucrose (sugar)', 'glucose', 'fructose', 'sorbitol', 'mannitol', 'corn syrup', 'high fructose corn syrup', 'saccharin', 'aspartame', 'sucralose', 'acesulfame potassium (acesulfame-K)', 'neotame'],
    hostDetail: 
    {
        title: 'Good Morning Cafe',
        address: '14 Brewer St, London W1F 0SG',
    },
    weightOptions: ['250 g', '450 g'],
    sideDishes: [
        {
            id: '0',
            name: 'Grilled Vegetables',
            weight: '346 g',
            price: 0,
            image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/vegetable-kabobs.jpg'
        },
        {
            id: '1',
            name: 'Baked Potatoes',
            weight: '346 g',
            price: 0,
            image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/01/baked-potato.jpg'
        }
    ],
    extras: [
        {
            id: '1',
            name: 'Onion',
            icon: Svgs.Onion,
            price: 0.99,
            selected: false
        },
        {
            id: '2',
            name: 'Pepper',
            icon: Svgs.Pepper,
            price: 0.99,
            selected: false
        },
        {
            id: '3',
            name: 'Tomato',
            icon: Svgs.Tomato,
            price: 0.99,
            selected: false
        },
        {
            id: '4',
            name: 'Cheese',
            icon: Svgs.Cheese,
            price: 0.99,
            selected: false
        }
    ]
}
export const dataImage = 
[ 
    Images.imgMedia1,
    Images.imgMedia2,
    Images.imgMedia3,
    Images.imgMedia4,
    Images.imgMedia1,
    Images.imgMedia2,
    Images.imgMedia3,
    Images.imgMedia4,
    Images.imgMedia1,
    Images.imgMedia2,
    Images.imgMedia3,
    Images.imgMedia4,
    Images.imgMedia1,
    Images.imgMedia2,
    Images.imgMedia3,
    Images.imgMedia4,
    Images.imgMedia1,
    Images.imgMedia2,
    Images.imgMedia3,
    Images.imgMedia4,
    Images.imgMedia3,
    Images.imgMedia4,
]

export const stats = [
    {
        id: '0',
        text: 'Noted Delicious Food',
        percentage: '87%'
    },
    {
        id: '1',
        text: 'Satisfied With Order',
        percentage: '65%'
    },
    {
        id: '2',
        text: 'Satisfied With Order',
        percentage: '87%'
    }
]

export const userReviews = [
    {
        id: '0',
        name: 'Markus Rashford',
        rating: 5,
        description: 'Today I tried Chicken Ranch pizza, which was praised by many. It is really delicious) cooked quickly. A lot of cheese and I...more',
        image: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
        time: '1 month'
    },
    {
        id: '1',
        name: 'Steven Gerrard',
        rating: 4,
        description: 'Today I tried Chicken Ranch pizza, which was praised by many. It is really delicious) cooked quickly. A lot of cheese and I...more',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgd9U0HhlVMeyVda7mCmB_mVlVnWnfoSv5VP7sjCVxXEJq1YvVYvsk48BDLcmUVdaC74&usqp=CAU',
        time: '1 month'
    }
]

export const expertReview = [
    {
        id: '0',
        name: 'Divella Bistro Restaurant - Restaurant Review',
        video: 'https://st2.depositphotos.com/1158045/7470/i/600/depositphotos_74708117-stock-photo-smiling-chef-in-his-kitchen.jpg',
        videoDuration: '01:35',
        time: '1 month',
        rating: 5
    },
    {
        id: '1',
        name: 'Divella Bistro Restaurant - Restaurant Review',
        video: 'https://st2.depositphotos.com/1158045/7470/i/600/depositphotos_74708117-stock-photo-smiling-chef-in-his-kitchen.jpg',
        videoDuration: '01:35',
        time: '1 month',
        rating: 4
    }
]
export const offerItems = [
    {
        id:0,
        title:"Good Moring Safe",
        discount:"-20%",
        icon:icons.imgOffer1
        
    },
    {
        id:1,
        title:"Divella Bistro Restaurant",
        discount:"-20%",
        icon:icons.imgOffer2
    },
    {
        id:2,
        title:"Divella Bistro Restaurant",
        discount:"-20%",
        icon:icons.imgOffer3
    }
]

export const faqCategory =
    [
        {
            id: '0',
            name: 'All'
        },
        {
            id: '1',
            name: 'Billing'
        },
        {
            id: '2',
            name: 'Delivery'
        },
        {
            id: '3',
            name: 'Charity'
        },
        
    ]
    export const faqQuestion =
    [
        {
            id: '0',
            question: 'How to order food?',
            description:"You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos"
        },
        {
            id: '1',
            question: 'How to find a place to eat?',
            description:"You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos"
        },
        {
            id: '2',
            question: 'How to add to favorites?',
            description:"You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos"
        },
        {
            id: '3',
            question: 'How to take courses?',
            description:"You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos"
        },
        {
            id: '4',
            question:"How to change something there?",
            description:"You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos",
        },
        {
            id: '5',
            question:"How to choose restaurants?",
            description:"You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos",

        },
        {
            id:"6",
            question:"Privacy Policy",
            description:"You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos",
        }
        
    ]

export const suggestedVendors = [
    {
        id: '0',
        image: 'https://yt3.ggpht.com/ytc/AKedOLR0A09Feocwe3br4HMugzilsgWtOmchQOSBp2xg=s900-c-k-c0x00ffffff-no-rj',
        name: 'Divella Bistro Restaurant',
        rating: '4.9',
        type: 'Italian . Seafood',
        distance: '1.2 km'
    },
    {
        id: '1',
        image: 'https://static.wixstatic.com/media/6cb404_33e8a40a5b9f47dd9f1036eb02ee7178~mv2_d_4800_3600_s_4_2.jpg/v1/fill/w_640,h_560,al_c,q_80,usm_0.66_1.00_0.01/6cb404_33e8a40a5b9f47dd9f1036eb02ee7178~mv2_d_4800_3600_s_4_2.webp',
        name: 'Buttermilk',
        rating: '4.9',
        type: 'Healthy . Vegans',
        distance: '1.2 km'
    },
    {
        id: '2',
        image: 'https://images.squaremeal.co.uk/cloud/restaurants/10701/orangeelephant201512webfood.jpg?w=928&h=522&fit=crop',
        name: 'Eat Meat Restauraunt',
        rating: '4.7',
        type: 'Healthy . Vegans',
        distance: '1.2 km'
    }
]

export const suggestedDishes = [
    {
        id: '0',
        image: 'https://www.eitfood.eu/media/hero/veggy_resized.jpg',
        name: 'Poke with salmon and avoca...',
        price: '$12',
        type: 'Italian . Seafood',
    },
    {
        id: '1',
        image: 'https://images.squaremeal.co.uk/cloud/restaurants/10701/orangeelephant201512webfood.jpg?w=928&h=522&fit=crop',
        name: 'Squid and pine nut salad',
        price: '$12',
        type: 'Healthy . Vegans',
    }
]

export const savedAddress = [
    {
        id: '0',
        name: 'Home',
        icon: 'star'
    },
    {
        id: '1',
        name: 'Office',
        icon: 'location-sharp'
    },
    {
        id: '2',
        name: 'Gregor',
        icon: 'location-sharp'
    }
]

export const vendorsList = [
    {
        id: '0',
        logo: 'https://images-platform.99static.com//1YgA3p-s_Nw9c0oHmAoA3k1THIY=/0x0:2001x2001/fit-in/500x500/99designs-contests-attachments/70/70914/attachment_70914854',
        title: 'Buttermilk',
        address: 'Old Bailey, EC4M 7BA',
        rating: 4.9,
        price: 5.49,
        distance: '1.2 km'
    },
    {
        id: '1',
        logo: 'https://media.istockphoto.com/vectors/the-vegan-cafe-logo-template-with-green-leaves-isolated-organic-food-vector-id1208194747?k=20&m=1208194747&s=612x612&w=0&h=JR6JNhkPGSbYV5W4dAVK4NF_uDfTrAyU5E_85TcCc8Y=',
        title: 'Vegan Cafe',
        address: 'Old Bailey, EC4M 7BA',
        rating: 4.9,
        price: 4.49,
        distance: '2.2 km'
    },
    {
        id: '3',
        logo: 'https://media.istockphoto.com/vectors/steak-house-fire-black-vector-id908668088?k=20&m=908668088&s=612x612&w=0&h=52CrXuQ_RkkExLmieZGgWsm078r5HcXV2BSBjl2t4Bk=',
        title: 'Beef and Grill',
        address: 'Old Bailey, EC4M 7BA',
        rating: 4.9,
        price: 5.19,
        distance: '3.2 km'
    }
]

export const areasList = [
    'Uskudar',
    'Fainth',
    'Shishi',
    'Eminenu',
    'Edenyurt'
]

export const ingredientsList = [
    {
        id: '0',
        name: 'Whole Grain Spaghetti',
        weight: '200 g'
    },
    {
        id: '1',
        name: 'Fresh Spinach',
        weight: '300 g'
    },
    {
        id: '2',
        name: '1 Garlic Cloves',
        weight: '3 g'
    },
    {
        id: '3',
        name: 'Pine Seeds',
        weight: '10 g'
    },
    {
        id: '4',
        name: 'Olive Oil',
        weight: '14 ml'
    },
    {
        id: '5',
        name: 'Salt and Pepper',
        weight: 'to taste'
    },
    {
        id: '6',
        name: 'Italian Herbs',
        weight: '5 g'
    },
    {
        id: '7',
        name: 'Feta',
        weight: '50 g'
    },
    {
        id: '8',
        name: 'Shrimp, cooked',
        weight: '100 g'
    }
]

export const nutritionValues = [
    {
        id: '0',
        value: '250',
        unit: 'gram'
    },
    {
        id: '1',
        value: '332',
        unit: 'kcall'
    },
    {
        id: '2',
        value: '28',
        unit: 'protien'
    },
    {
        id: '3',
        value: '45',
        unit: 'fat'
    },
    {
        id: '4',
        value: '124',
        unit: 'carb'
    }
]

export const badges = [
    {
        id: '0',
        icon: Svgs.hyegne_icon,
        text: 'Hygiene Course',
    },
    {
        id: '1',
        icon: Svgs.off_apple,
        text: 'Ingredients Selection Course '
    },
    {
        id: '2',
        icon: Svgs.privacy_icon,
        text: 'Safety Course '
    },
    {
        id: '3',
        icon: Svgs.CameraIcon,
        text: 'Food photography course'
    },
    {
        id: '4',
        icon: Svgs.MailIcon,
        text: 'Packaging course'
    }
]

export const weekplan = [
    {
        id: '0',
        uri: 'https://images.squaremeal.co.uk/cloud/restaurants/10701/orangeelephant201512webfood.jpg?w=928&h=522&fit=crop',
    },
]

export const foods =
[
    {
        id: '0',
        name: 'Pasta with shrimps in sause',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        weight: '244 g',
        price: 4.29
    },
    {
        id: '1',
        name: 'Pasta with basal and tomatoes',
        image: 'https://images.squarespace-cdn.com/content/v1/5147678ce4b031aaae35cb81/1572171019828-B6JRYX1MWBUXU1DMCVNS/dylan+swart+toronto+food+photographer+fine+dining+beef.jpg',
        weight: '244 g',
        price: 4.29
    },
    {
        id: '2',
        name: 'Pasta with shrimps in sause',
        image: 'https://s3.eu-west-1.amazonaws.com/images.prod.phoode.com/photos/project/5e7d18cc509cd.jpeg',
        weight: '244 g',
        price: 4.29
    },
    {
        id: '3',
        name: 'Pasta with basal and tomatoes',
        image: 'https://img.freepik.com/free-photo/penne-pasta-with-pesto-sauce-zucchini-green-peas-basil-italian-food-top-view-flat-lay_2829-19620.jpg?size=626&ext=jpg',
        weight: '244 g',
        price: 4.29
    },
    {
        id: '4',
        name: 'Pasta with shrimps in sause',
        image: 'https://simplyhomecooked.com/wp-content/uploads/2020/02/Tuscan-chicken-pasta-n-scaled.jpg',
        weight: '244 g',
        price: 4.29
    },
    {
        id: '5',
        name: 'Pasta with basal and tomatoes',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN2Fgu-B0Zqk4h0LZZP_5fT-vmw_ZSUXkhA&usqp=CAU',
        weight: '244 g',
        price: 4.29
    }
]