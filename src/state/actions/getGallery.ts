import axios from '../../config/axios'
import { Gallery, getImagesData as getImagesDataSuccess } from './galleryActions'


export const getGallery = ({section, sort, window }: any) => async (dispatch: any) => {
  axios.get(`${section}/${sort}/${window}/0?album_previews=true`).then(res => {
    let galleryList: Gallery[] = res.data.data
    let galleryImagesList: Gallery[] = galleryList.filter(x => {
          return x.images != null && x.images[0].type == 'image/jpeg'
      
    })
    dispatch(getImagesDataSuccess(galleryImagesList))
    return galleryImagesList
  })
}
