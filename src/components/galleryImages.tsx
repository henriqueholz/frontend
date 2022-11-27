import axios from "axios";
import React, { useState, useEffect } from "react";
import { Dog } from "../styles/pages/home"
import Image from "next/image"
import Shirt from '../assets/shirt.svg'
import Dropdown from 'react-dropdown';
import hotViralWeekMock from "../mockResponses/hotViralWeekMock.json"
import topTopWeekMock from "../mockResponses/topTopWeekMock.json"
import hotTopWeekMock from "../mockResponses/hotTopWeekMock.json"
import topViralWeekMock from "../mockResponses/topViralWeekMock.json"
import hotViralDayMock from "../mockResponses/hotViralDayMock.json"
import topTopDayMock from "../mockResponses/topTopDayMock.json"
import hotTopDayMock from "../mockResponses/hotTopDayMock.json"
import topViralDayMock from "../mockResponses/topViralDayMock.json"
import 'react-dropdown/style.css';

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { getImagesData } from "../state/actions/galleryActions";

import Loader from "./loader";

// Add routing
import { useRouter } from "next/router";

const API_URL = "https://api.imgur.com/3/gallery";

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
    const [sort, setSort]= useState(defaultSortOptions);
    const [section, setSection]= useState(defaultSectionOptions);
    const [window, setWindow]= useState(defaultWindowOptions);

    const imagesData = useSelector((state: any) => state?.galleryData?.galleryData);

    const dispatch = useDispatch();

    const fetchImagesData = async () => {
        // const url = `${API_URL}/${section}/${sort}/${window}/0?album_previews=true`;
        // // fetch(url,{
        // //     headers: {
        // //         'Authorization': 'Client-ID 4e45cd0c61d89b2',
        // //     },
        // //     mode: 'cors',
        // try {
        //     await axios.get(url, {         
        //         headers: {
        //             'Authorization': 'Client-ID 0408f6546f534d1',
        //         }
        //     }).then((res) => 
        //     dispatch(getImagesData(res.data)))
        // } catch (error) {
        if (section == 'hot' && sort == 'top' && window == 'day') {
            dispatch(getImagesData(hotTopDayMock.data))
        } else  if (section == 'hot' && sort == 'top' && window == 'week') {
            dispatch(getImagesData(hotTopWeekMock.data))
        } else  if (section == 'hot' && sort == 'viral' && window == 'day') {
            dispatch(getImagesData(hotViralDayMock.data))
        } else  if (section == 'hot' && sort == 'viral' && window == 'week') {
            dispatch(getImagesData(hotViralWeekMock.data))
        } else  if (section == 'top' && sort == 'top' && window == 'day') {
            dispatch(getImagesData(topTopDayMock.data))
        } else  if (section == 'top' && sort == 'top' && window == 'week') {
            dispatch(getImagesData(topTopWeekMock.data))
        } else  if (section == 'top' && sort == 'viral' && window == 'day') {
            dispatch(getImagesData(topViralDayMock.data))
        } else  if (section == 'top' && sort == 'viral' && window == 'week') {
            dispatch(getImagesData(topViralWeekMock.data))
        }
    }

    useEffect(() => {
        fetchImagesData()
    },[sort, section, window])

    return (
        <>
            <div>
                <p>Section:</p>
                <Dropdown options={sectionOptions} onChange={(e) => setSection(e.value)} value={defaultSectionOptions} />
            </div>
            <div>
                <p>Sort:</p>
                <Dropdown options={sortOptions} onChange={(e) => setSort(e.value)} value={defaultSortOptions} />
            </div>
            <div>
                <p>Window:</p>
                <Dropdown options={windowOptions} onChange={(e) => setWindow(e.value)} value={defaultWindowOptions} />
            </div>

            { 
                (!imagesData && imagesData == undefined) ? 
                    <Loader/>
                    :
                    imagesData.map((individualData: any) => {
                        return (                       
                            <Dog>
                                <Image src={individualData.images != null && individualData.images[0].type == 'image/jpeg' ? individualData.images[0].link : Shirt} width={520} height={480} alt="" />
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