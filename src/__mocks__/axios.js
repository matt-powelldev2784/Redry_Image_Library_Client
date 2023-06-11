const MockResponse = {
  success: true,
  status: 200,
  msg: 'Images found',
  data: {
    images: [
      {
        _id: '647f1ac5356fc98a938dcaf7',
        path: 'https://mattpowell2784-aws-image-hosting.s3.eu-west-2.amazonaws.com/16860515251761597c29aee6a780a97d9907b2c13e0eb',
        thumbnailPath:
          'https://mattpowell2784-aws-image-hosting-thumbnails.s3.eu-west-2.amazonaws.com/16860515251761597c29aee6a780a97d9907b2c13e0eb',
        uploadedBy: 'name',
        description: 'man on the moon',
        tags: ['moon', 'man'],
        __v: 0,
      },
      {
        _id: '647f1b9421b866f44bc5c50c',
        path: 'https://mattpowell2784-aws-image-hosting.s3.eu-west-2.amazonaws.com/1686051732534c0675c4fae0b6e6a290caf024d763bcd',
        thumbnailPath:
          'https://mattpowell2784-aws-image-hosting-thumbnails.s3.eu-west-2.amazonaws.com/1686051732534c0675c4fae0b6e6a290caf024d763bcd-thumbnail',
        uploadedBy: 'name',
        description: 'man on the moon',
        tags: ['moon', 'man'],
        __v: 0,
      },
    ],
    total: 12,
    returned: 12,
  },
}

export const mockSearchImages = {
  get: jest.fn().mockResolvedValue(MockResponse),
}
