import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "b57t0bjz",
    dataset: "production",
    useCdn: true
})