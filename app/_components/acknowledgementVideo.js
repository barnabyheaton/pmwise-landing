// The Acknowledgement of Country video — the first PMWise video (recorded 12 Oct 2026).
//
// ⚑ ONE FILE, TWO SITES. The video itself lives in PRODUCTION Supabase Storage, in the public
// bucket `public-media` (uploaded by hand: pmwise-app docs/procedures/upload-acknowledgement-video.md).
// This website and the app both play that same URL. It is public on purpose — it is on the
// public website. Paid training material does NOT go in this bucket.
//
// The captions and poster are served from this site (`/public/media/`) so they are same-origin
// with the page, which a <track> element requires. Source of truth for the captions:
// pmwise-core docs/library/videos/01-acknowledgement-of-country/captions-edited.vtt.
//
// The transcript is Barnaby's spoken words, corrected only where the auto-transcriber misheard a
// name (CLAUDE.md, "Website copy is Barnaby's words"). Do not tidy it.

export const ACKNOWLEDGEMENT_VIDEO_SRC = 'https://bmvpxqhuqurazsuufgdk.supabase.co/storage/v1/object/public/public-media/videos/01-acknowledgement-of-country.mp4'
export const ACKNOWLEDGEMENT_CAPTIONS = '/media/acknowledgement-of-country.vtt'
export const ACKNOWLEDGEMENT_POSTER = '/media/acknowledgement-of-country-poster.png'

export const ACKNOWLEDGEMENT_TRANSCRIPT = [
  "Hello, my name is Barnaby Heaton and I'm the founder of PMWise, a benefit-driven, AI-assisted project delivery application and framework. As you can probably hear, I'm an Australian. Australia is geologically and culturally one of the most ancient places on Earth. But we are also a young nation, finding our way and forging our own identity. We are far from perfect, we've had our fair share of stumbles, but we are building an identity which combines the ancient with the modern. To strike a unique balance and through which I believe we will one day change the world.",
  "One of the newest traditions, which not all Australians agree with, is to start important gatherings with welcomes or acknowledgments of country. These modern adaptations stem from ancient customs where peoples travelled. People travelling through lands would be officially welcomed and orientated to the place that they were in. Acknowledgements of Country, Welcomes to Country, acknowledge that all humans are products of our environments. We came from them. We will return to them. All of our ancestors are there, and all of our descendants will come from there. Without clean air, water and a healthy environment to feed us, we all cease to exist. There are stories written into the land, not all of them good, and as we work, as we walk through this place, we need to see we are not separate from, but we are entwined with those stories. I think this is a kind of incredible philosophy which we in the modern world would be wise to heed.",
  "So for my first piece of content I am recording PMWise's Acknowledgement of Country. So what country am I on? I'm in the town of Cygnet in Tasmania's Huon Valley, Australia's southernmost municipality. It is where I live and where I work. It's been a long journey for me to find my way to Cygnet and the Huon Valley, but now I'm here I feel very much at home, and it is with that feeling of home that I've been able to build what I hope is an incredibly useful tool.",
  "But Cygnet and the Huon Valley are the European names for this place. We're also in the South East nation of lutruwita. The lands of the Melukerdee people, who were one of the many peoples who made up the Tasmanian wider nation prior to white colonisation. The Melukerdee lands cover the Huon Valley as far as Lake Pedder to the west, the D'Entrecasteaux Channel and Bruny Island to the east, and as far south as Maatsuyker Island in the deep Southern Ocean off the south coast of Tasmania.",
  "We have archaeological records which show humans have been living and trading on this land for at least 45,000 years. But the way humans came here was during one of several ice ages when there was a land bridge between Tasmania and the Australian mainland. This means the seas were much lower and the coastlines further out. People tend to settle around the coast as it is advantageous for trade and for food. So almost certainly human habitation of Tasmania goes back further than 45,000 years. It's just that those sites are now underwater and we can't see them. So I'm living in a land which has had thousands of generations living in balance with their environments because they were a part of their environment.",
  "I acknowledge that deep time of care that meant this extraordinary place still exists, and I acknowledge the trauma and cataclysm colonisation has caused to the natural world, and the decimation, if not near total genocide, of the people who lived here once first contact was established.",
  "For land to be ceded, it needs to either be empty, the concept of terra nullius, or the inhabitants can cede their lands to a conquering newcomer through the signing of a treaty to end a war. This is European law. The Mabo case in Australia proved Australia was not an empty land when colonisation occurred, and there has never officially been a war between the two peoples, so there has never been a treaty to be signed.",
  "So I acknowledge I am living and working on unceded Aboriginal land, but I will always endeavour to do what I can to address this imbalance and find justice for surviving First Nations people, and to help build a new Australian culture built on the strengths of all people who call this country home."
]
