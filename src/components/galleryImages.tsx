import axios from "axios";
import React, { useState, useEffect } from "react";
import { Dog } from "../styles/pages/home"
import Image from "next/image"
import Shirt from '../assets/shirt.svg'
import Dropdown from 'react-dropdown';
import data from "../mockResponses/mockResponse.json"
import 'react-dropdown/style.css';

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { getImagesData } from "../state/actions/dummyDataActions";

import Loader from "./loader";

// Add routing
import { useRouter } from "next/router";

const sortOptions = [
    'viral', 'top', 'time', 'rising'
];
const defaultSortOptions = sortOptions[0];

const sectionOptions = [
    'hot', 'top', 'user'
];
const defaultSectionOptions = sectionOptions[0];

const windowOptions = [
    'day', 'week', 'month', 'year', 'all'
];
const defaultWindowOptions = windowOptions[0];

const BasicDetails: React.FC = () => {
    const [count, setCount] = useState(0);
    const [sortValue, setSortValue]= useState('');
    const [sectionValue, setSectionValue]= useState('');
    const [windowValue, setWindowValue]= useState('');


    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        },1000)
    },[])

    const imagesData = useSelector((state: any) => state?.dummyData?.dummyData);

    const dispatch = useDispatch();

    const fetchImagesData = async () => {
        //     fetch('https://api.imgur.com/3/gallery/hot/viral/day/0',{
        //         headers: {
        //             'Authorization': 'Client-ID 4e45cd0c61d89b2',
        //         },
        //         mode: 'cors',
        // }).then((res) => console.log(res))
        // await axios.get("https://api.imgur.com/3", {         
        //     headers: {
        //         'Authorization': 'Client-ID 0408f6546f534d1',
        //     }
        // })
        // .then((res) => {
        //     console.log(res)
        //     dispatch(getImagesData(res.data))
        // dispatch(getImagesData(res.data))
        dispatch(getImagesData(data.data))
    }

        useEffect(() => {
        // console.log("ae")
        fetchImagesData()
    },[])

    return (
        <>
            <Dropdown options={sortOptions} onChange={(e) => setSortValue(e.value)} value={defaultSortOptions} />
            <Dropdown options={sectionOptions} onChange={(e) => setSectionValue(e.value)} value={defaultSectionOptions} />
            <Dropdown options={windowOptions} onChange={(e) => setWindowValue(e.value)} value={defaultWindowOptions} />

            { 
                (!imagesData && imagesData == undefined) ? 
                    <Loader/>
                    :
                    imagesData.map((individualData: any) => {
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
                )  
            }
        </>
    )
}

export default BasicDetails;