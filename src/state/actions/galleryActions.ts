export type Gallery = {
    id: string
    title: string
    description: string
    type: string
    images: Images[]
  }

  type Images = {
    type: string
    link: string
  }

export const getImagesData = (data: any) => {
    return {
        type: 'getImages',
        payload: data
    }
}
