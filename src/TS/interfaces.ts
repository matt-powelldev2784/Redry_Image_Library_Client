export interface ApiOptions {
  httpMethod: string
  route: string
  body?: any
  options?: any
  noBasePath?: boolean
}
export interface apiResponse {
  success: boolean
  status: number
  msg: string
  data?: any
}

export interface ImageData {
  _id: string
  path: string
  thumbnailPath: string
  uploadedBy: string
  description: string
  tags: []
  __v?: any
}

export interface ImageDetails {
  imageUrl: string | null
  uploadedBy: string
  description: string
  tags: string
}
