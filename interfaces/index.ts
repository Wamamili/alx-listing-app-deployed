export interface PropertyProps {
  id: number
  name: string
  title: string
  description: string
  location: string
  address: {
    state: string
    city: string
    country: string
  }
  rating: number
  category: string[]
  price: number
  offers: {
    bed: string
    shower: string
    occupants: string
  }
  image: string
  imageUrl: string
  discount: string
}
