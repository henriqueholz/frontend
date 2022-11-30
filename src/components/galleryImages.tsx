import React, { useState, useEffect } from 'react'
import { DropdownLabel, GridImage } from '../styles/pages/home'
import Image from 'next/image'
import NoImage from '../assets/no-image.svg'
import Dropdown from 'react-dropdown'
import Loader from './loader'
import 'react-dropdown/style.css'
import { useSelector, useDispatch } from 'react-redux'
import { getImagesData } from '../state/actions/galleryActions'
import { getMockResponse } from '../mock'
import { getGallery } from '../state/actions/getGallery'

const sortOptions = [
    'viral', 'top', 'time', 'rising'
]
const defaultSortOptions = sortOptions[0]

const sectionOptions = [
    'hot', 'top', 'user'
]
const defaultSectionOptions = sectionOptions[0]

const windowOptions = [
    'day', 'week', 'month', 'year', 'all'
]
const defaultWindowOptions = windowOptions[0]

const GalleryImages: React.FC = () => {
    const [sort, setSort]= useState(defaultSortOptions)
    const [section, setSection]= useState(defaultSectionOptions)
    const [window, setWindow]= useState(defaultWindowOptions)

    const imagesData = useSelector((state: any) => state?.galleryData?.galleryData)

    const dispatch = useDispatch()

    const fetchImagesData = async () => {
        try {
            dispatch(getGallery({section, sort, window}) as any)
        } catch (error) {
            console.log('An unexpected error happened', error)
            let mockResponse = getMockResponse({section, sort, window})
            if (mockResponse != undefined) {
                await dispatch(getImagesData(mockResponse))
            } else {
                console.log('Mock Response not found')
            }
        }
    }

    useEffect(() => {
        fetchImagesData()
    },[sort, section, window])

    return (
        <>
            <div data-testid='sectionDiv'>
                <DropdownLabel>Section:</DropdownLabel>
                <Dropdown options={sectionOptions} onChange={(e) => setSection(e.value)} value={defaultSectionOptions} />
            </div>
            <div data-testid='sortDiv'>
                <DropdownLabel>Sort:</DropdownLabel>
                <Dropdown options={sortOptions} onChange={(e) => setSort(e.value)} value={defaultSortOptions} />
            </div>
            <div  data-testid='windowDiv'>
                <DropdownLabel>Window:</DropdownLabel>
                <Dropdown options={windowOptions} onChange={(e) => setWindow(e.value)} value={defaultWindowOptions} />
            </div>

            { 
                (!imagesData && imagesData == undefined) ? 
                <>
                    <Loader/>
                    </>
                    :
                    imagesData.map((individualData: any) => {
                        return (                       
                            <GridImage data-testid='gridImage'>
                                <Image src={individualData.images != null && individualData.images[0].type == 'image/jpeg' ? individualData.images[0].link : NoImage} width={320} height={280} alt='' />
                                <footer>
                                    <span>{individualData.description != null ? individualData.description : individualData.title}</span>
                                </footer>                                
                            </GridImage>
                        )
                    }     
                )  
            }
        </>
    )
}

export default GalleryImages