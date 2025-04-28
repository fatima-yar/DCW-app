import qs from 'qs'
import { fetchAPI } from '../utils/fetch-api'
import getStrapiURL from '../utils/get-strapi-url'

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
            cta: true,
          },
        },
        'blocks.info-box': true,
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

export async function getOurTeam() {
  const path = '/api/our-team'
  const BASE_URL = getStrapiURL()

  const url = new URL(path, BASE_URL)
  url.search = photoQuery

  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getAboutUs() {
  const path = '/api/about-us'
  const BASE_URL = getStrapiURL()

  const url = new URL(path, BASE_URL)
  url.search = contentsQuery

  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getMissionStatement() {
  const path = '/api/mission-statement'
  const BASE_URL = getStrapiURL()

  const url = new URL(path, BASE_URL)
  url.search = contentsQuery

  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getPrivacyPolicy() {
  const path = '/api/privacy-policy'
  const BASE_URL = getStrapiURL()

  const url = new URL(path, BASE_URL)
  url.search = contentsQuery

  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getContactUs() {
  const path = '/api/contact-us'
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL)
  return await fetchAPI(url.href, { method: 'GET' })
}
