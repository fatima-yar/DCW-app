import qs from 'qs'
import { fetchAPI } from '../utils/fetch-api'
import getStrapiURL from '../utils/get-strapi-url'
import { Ultra } from 'next/font/google'

const mainPageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        'blocks.motto': true,
        'blocks.hero-box': {
          populate: {
            image: {
              fields: ['url', 'alternativeText'],
            },
            imageUK: {
              fields: ['url', 'alternativeText'],
            },
            cta: true,
          },
        },
        'blocks.info-box': {
          populate: {
            missionNZImage: {
              fields: ['url', 'alternativeText'],
            },
            serviceNZImage: {
              fields: ['url', 'alternativeText'],
            },
            missionUKImage: {
              fields: ['url', 'alternativeText'],
            },
            serviceUKImage: {
              fields: ['url', 'alternativeText'],
            },
          },
        },
      },
    },
  },
})

const pageBySlugQuery = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        on: {
          'blocks.hero-section': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              logo: {
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                },
              },
              cta: true,
            },
          },
          'blocks.info-block': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              cta: true,
            },
          },
        },
      },
    },
  })

export async function getMainPage() {
  const path = '/api/main-page'
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  url.search = mainPageQuery
  console.log('query:', url.search)

  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getPageBySlug(slug: string) {
  const path = '/api/pages'
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  url.search = pageBySlugQuery(slug)
  return await fetchAPI(url.href, { method: 'GET' })
}

const contentsQuery = qs.stringify({
  populate: {
    contents: {
      populate: {
        image: {
          fields: ['url', 'alternativeText'],
        },
      },
    },
    contentsUK: {
      populate: {
        image: {
          fields: ['url', 'alternativeText'],
        },
      },
    },
  },
})

const photoQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          'blocks.photo': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
        },
      },
    },
  },
  { encodeValuesOnly: true }
)

const whatWeDoQuery = qs.stringify(
  {
    populate: {
      content: {
        populate: 'image',
      },
      projects: {
        populate: 'image',
      },
      events: {
        populate: 'image',
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
)

const joinUsQuery = qs.stringify(
  {
    populate: {
      image: {
        fields: ['url', 'alternativeText'],
      },
      cta: true,
    },
  },

  {
    encodeValuesOnly: true,
  }
)

const newsletterQuery = qs.stringify({
  populate: {
    archived: true,
  },
})

const donateQuery = qs.stringify({
  populate: {
    givealittle: {
      on: {
        'blocks.content': {
          populate: {
            image: {
              fields: ['url', 'alternativeText'],
            },
          },
        },
        'elements.btn': true,
      },
    },
    partnrships: {
      on: {
        'blocks.content': {
          populate: {
            image: {
              fields: ['url', 'alternativeText'],
            },
          },
        },
        'elements.btn': true,
      },
    },
    sponsorships: {
      on: {
        'blocks.content': {
          populate: {
            image: {
              fields: ['url', 'alternativeText'],
            },
          },
        },
      },
    },
    donate: {
      populate: {
        image: {
          fields: ['url', 'alternativeText'],
        },
      },
    },
    directDonation: {
      populate: {
        image: {
          fields: ['url', 'alternativeText'],
        },
      },
    },
    gifts: {
      populate: {
        image: {
          fields: ['url', 'alternativeText'],
        },
      },
    },
  },
})

export async function getOurTeam() {
  const path = '/api/our-team'
  const BASE_URL = getStrapiURL()

  const url = new URL(path, BASE_URL)
  url.search = photoQuery

  return await fetchAPI(url.href, { method: 'GET' })
}

async function fetchContentPage(path: string) {
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  url.search = contentsQuery
  return await fetchAPI(url.href, { method: 'GET' })
}

export const getAboutUs = () => fetchContentPage('/api/about-us')

export const getMissionStatement = () =>
  fetchContentPage('/api/mission-statement')

export const getPrivacyPolicy = () => fetchContentPage('/api/privacy-policy')

export async function getContactUs() {
  const path = '/api/contact-us'
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getWhatWeDo() {
  const path = '/api/what-we-do'
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  url.search = whatWeDoQuery

  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getJoinUs() {
  const path = '/api/join-us'
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  url.search = joinUsQuery

  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getNewsletter() {
  const path = '/api/newsletter'
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  url.search = newsletterQuery
  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getDonate() {
  const path = '/api/donate'
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  url.search = donateQuery
  console.log('Donate API URL:', url.href)

  return await fetchAPI(url.href, { method: 'GET' })
}
