import axios from "axios";
import React, { useState, useEffect } from "react";
import { Dog } from "../styles/pages/home"
import Image from "next/image"
import Shirt from '../assets/shirt.svg'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { getImagesData } from "../state/actions/dummyDataActions";

import Loader from "./loader";

// Add routing
import { useRouter } from "next/router";

const sectionOptions = [
    'No filter', 'hot', 'top', 'user'
];
const defaultSectionOptions = sectionOptions[0];

const BasicDetails: React.FC = () => {
    const [count, setCount] = useState(0);
    const [filterSectionValue, setFilterSectionValue]= useState('');

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        },1000)
    },[])

    const imagesData = useSelector((state: any) => state?.dummyData?.dummyData);

    const dispatch = useDispatch();

    const fetchImagesData= async () => {
        // await axios.get("https://api.imgur.com/3/account/me/images", {
        //     headers: {
        //         'Authorization': 'Bearer 49d97283508cdff3b5cbda4c1e6c4a716f50c9c8',
        //         'Host': 'https://www.getpostman.com/oauth2/callback',
        //     }
        // })
        // .then((res) => {
        //     console.log(res)
        //     dispatch(getFootballersData(res.data))
        // })
        var res = {
            "data": [
                {
                    "id": "VezEdYu",
                    "title": null,
                    "description": "A dog is the only thing on earth that loves you more than you love yourself.",
                    "datetime": 1669504500,
                    "type": "image/jpeg",
                    "animated": false,
                    "width": 800,
                    "height": 825,
                    "size": 54509,
                    "views": 147,
                    "bandwidth": 8012823,
                    "vote": null,
                    "favorite": false,
                    "nsfw": null,
                    "section": null,
                    "account_url": "henriquehcastro",
                    "account_id": 167025617,
                    "is_ad": false,
                    "in_most_viral": false,
                    "has_sound": false,
                    "tags": [],
                    "ad_type": 0,
                    "ad_url": "",
                    "edited": "0",
                    "in_gallery": false,
                    "deletehash": "lSkUIpexKVKvHJc",
                    "name": "dog1.jpeg",
                    "link": "https://i.imgur.com/VezEdYu.jpg"
                },
                {
                    "id": "sPHt2t0",
                    "title": null,
                    "description": "Animals have come to mean so much in our lives.",
                    "datetime": 1669504496,
                    "type": "image/jpeg",
                    "animated": false,
                    "width": 1000,
                    "height": 667,
                    "size": 253427,
                    "views": 50,
                    "bandwidth": 12671350,
                    "vote": null,
                    "favorite": false,
                    "nsfw": null,
                    "section": null,
                    "account_url": "henriquehcastro",
                    "account_id": 167025617,
                    "is_ad": false,
                    "in_most_viral": false,
                    "has_sound": false,
                    "tags": [],
                    "ad_type": 0,
                    "ad_url": "",
                    "edited": "0",
                    "in_gallery": false,
                    "deletehash": "2rqqyLcF0cP4agC",
                    "name": "dog2.jpeg",
                    "link": "https://i.imgur.com/sPHt2t0.jpg"
                },
                {
                    "id": "Ey5IbbR",
                    "title": null,
                    "description": "No matter how you're feeling, a little dog gonna love you.",
                    "datetime": 1669504488,
                    "type": "image/jpeg",
                    "animated": false,
                    "width": 1999,
                    "height": 1499,
                    "size": 229955,
                    "views": 67,
                    "bandwidth": 15406985,
                    "vote": null,
                    "favorite": false,
                    "nsfw": null,
                    "section": null,
                    "account_url": "henriquehcastro",
                    "account_id": 167025617,
                    "is_ad": false,
                    "in_most_viral": false,
                    "has_sound": false,
                    "tags": [],
                    "ad_type": 0,
                    "ad_url": "",
                    "edited": "0",
                    "in_gallery": false,
                    "deletehash": "TyKX0POKmlOY8pX",
                    "name": "dog3.jpeg",
                    "link": "https://i.imgur.com/Ey5IbbR.jpg"
                },
                {
                    "id": "a0Ei6kQ",
                    "title": null,
                    "description": "When the dog looks at you, the dog is not thinking what kind of a person you are.",
                    "datetime": 1669504478,
                    "type": "image/jpeg",
                    "animated": false,
                    "width": 1280,
                    "height": 720,
                    "size": 72971,
                    "views": 66,
                    "bandwidth": 4816086,
                    "vote": null,
                    "favorite": false,
                    "nsfw": null,
                    "section": "user",
                    "account_url": "henriquehcastro",
                    "account_id": 167025617,
                    "is_ad": false,
                    "in_most_viral": false,
                    "has_sound": false,
                    "tags": [],
                    "ad_type": 0,
                    "ad_url": "",
                    "edited": "0",
                    "in_gallery": false,
                    "deletehash": "62E8YAYJfMI4Ya3",
                    "name": "dog5.jpeg",
                    "link": "https://i.imgur.com/a0Ei6kQ.jpg"
                },
                {
                    "id": "uVtr0kq",
                    "title": null,
                    "description": "If you don’t own a dog, at least one, there is not necessarily anything wrong with you, but there may be something wrong with your life.",
                    "datetime": 1669504467,
                    "type": "image/jpeg",
                    "animated": false,
                    "width": 732,
                    "height": 549,
                    "size": 45602,
                    "views": 88,
                    "bandwidth": 4012976,
                    "vote": null,
                    "favorite": false,
                    "nsfw": null,
                    "section": "top",
                    "account_url": "henriquehcastro",
                    "account_id": 167025617,
                    "is_ad": false,
                    "in_most_viral": false,
                    "has_sound": false,
                    "tags": [],
                    "ad_type": 0,
                    "ad_url": "",
                    "edited": "0",
                    "in_gallery": false,
                    "deletehash": "WprlkZJ6xZjoPnO",
                    "name": "dog9.jpeg",
                    "link": "https://i.imgur.com/uVtr0kq.jpg"
                },
                {
                    "id": "MDe49nX",
                    "title": null,
                    "description": "All his life he tried to be a good person. Many times, however, he failed. For after all, he was only human. He wasn’t a dog.",
                    "datetime": 1669504453,
                    "type": "image/jpeg",
                    "animated": false,
                    "width": 632,
                    "height": 475,
                    "size": 94525,
                    "views": 264,
                    "bandwidth": 24954600,
                    "vote": null,
                    "favorite": false,
                    "nsfw": null,
                    "section": "hot",
                    "account_url": "henriquehcastro",
                    "account_id": 167025617,
                    "is_ad": false,
                    "in_most_viral": false,
                    "has_sound": false,
                    "tags": [],
                    "ad_type": 0,
                    "ad_url": "",
                    "edited": "0",
                    "in_gallery": false,
                    "deletehash": "nUwkyQBEszYIlS5",
                    "name": "dog11.jpeg",
                    "link": "https://i.imgur.com/MDe49nX.jpg"
                }
            ],
            "success": true,
            "status": 200
        };
        dispatch(getImagesData(res.data))
    }

    useEffect(() => {
        fetchImagesData()
    },[])

    return (
        <>
            <Dropdown options={sectionOptions} onChange={(e) => setFilterSectionValue(e.value)} value={defaultSectionOptions} />
            { 
                (!imagesData && imagesData == undefined) ? 
                    <Loader/>
                    :
                    imagesData.map((individualData: any) => {
                        if(individualData != null && (individualData.section != null && individualData.section == filterSectionValue) || filterSectionValue == "No filter") {
                            return (                       
                                <Dog>
                                    <Image src={Shirt} width={520} height={480} alt="" />
                                    <footer>
                                        <strong>{individualData.title}</strong>
                                        <span>{individualData.description}</span>
                                        <span>{individualData.section}</span>
                                    </footer>                                
                                </Dog>
                            )
                        }
                        
                    }
                )  
            }
        </>
    )
}

export default BasicDetails;