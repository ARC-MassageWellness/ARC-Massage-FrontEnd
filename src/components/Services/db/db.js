import cupping1 from '../img/sessionsImg/cupping2.jpg'
import cupping2 from '../img/sessionsImg/cupping3.jpg'
import thai from '../img/sessionsImg/thai.png'
import guaSha from '../img/sessionsImg/Gua-Sha-Image.png'

import hotstones from '../img/sessionsImg/hotStones.jpg'


import massage1 from '../img/sessionsImg/massage1.png'
import massage2 from '../img/sessionsImg/massage2.jpg'
// import massage3 from '../img/sessionsImg/massage3.jpg'
// import massage4 from '../img/sessionsImg/massage4.jpg'
import massage5 from '../img/sessionsImg/massage5.jpg'


import prenatal1 from '../img/sessionsImg/prenatal1.jpg'
import SugarScrub from '../img/sessionsImg/sugar-scrub.png'

import aromatherapy from '../img/sessionsImg/aromatherapy.jpg'


export const db = [
  {
    title: 'Therapeutic Massages',
    image: massage1,
    bio: 'Manipulation of the body\'s soft tissue to stimulate circulation and promote relaxation. The pressure will vary depending on the needs of the focus area. Please note: if you want to receive a full body massage as well as have focus areas targeted, you should book 90 or 120 minutes.',
    type: 'basic',
    duration: ['30 minutes','60 minutes','90 minutes','120 minutes'],
    costArray: [55,110,165,220]
  },
  {
    title: 'Therapeutic Massages including Breast/Chest',
    image: massage2,
    bio: ['***Only preformed by female therapists***', 'Descriptions of therapeutic breast and chest massage. Draped partial chest massage is done with breasts covered. Focus is on muscles attachments at the sternum and on the ribs. Soft breast tissue is mostly, though not totally, avoided. Nipples and areolas are avoided.', 'Undraped, full chest/breast massage is done with full chest and breasts uncovered. This entire area is massaged. Flat palm and/or forearm will glide smoothly over your nipples and areolae within full breast massage strokes.',
    'Therapeutic rationale for massaging the chest and breast includes, but is not limited to, providing support for breathing, circulation (blood and lymph), posture, lactation and the immune system. This work is also used to treat neck, rib, or shoulder injuries, to mobilize scar tissue, and to prepare for and/or recover from surgery.'],
    type: 'basic',
    duration: ['30 minutes','60 minutes','90 minutes','120 minutes'],
    costArray: [55,110,165,220]
  },
  {
    title: 'Medical Massages',
    image: massage5,
    bio: 'Book this session if you\'re wanting to use PIP or L&I. We need all information submitted 2 business days prior to your appointment. We want to ensure that everything we need is correct and having your referral and intake form filled out prior to care will insure that we can treat you. We are working on accepting insurance but currently only accept PIP and L&I. We apologize for how long it is taking to get credentialed with the companies. Price is set for same day billing. If not paying same day, price is $165.',
    type: 'medical',
    duration: ['60 minutes'],
    costArray: [110]
  },
  {
    title: 'Prenatal Massages',
    image: prenatal1,
    bio: 'Performed by experienced therapists, Prenatal Massages are tailored to your comfort to best suit your needs.',
    type: 'prenatal',
    duration: ['60 minutes','90 minutes'],
    costArray: [110, 165]
  },
  {
    title: 'Table Thai Massages',
    image: thai,
    bio: ['***Ann Husselbee is the only provider that performs this session***','Thai Table massage is an adaption of Traditional Thai massage techniques for recipients lying on a table. Thai massage is a traditional massage technique that combines deep tissue pressure, muscle and joint stretching, and gentle manipulations of the body. Research has shown Thai massage to beneficial for pain relief and for easing symptoms of depression and anxiety.'],
    type: 'specialty',
    duration: ['60 minutes','90 minutes'],
    costArray: [135, 200]
  },
  {
    title: 'Cupping Massages',
    image: cupping2,
    bio: 'Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. People get it for many purposes, including to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage.',
    type: 'specialty',
    duration: ['60 minutes','90 minutes'],
    costArray: [135, 200]
  },
  {
    title: 'Gua Sha Massage',
    image: guaSha,
    bio: ['***Ann Husselbee is the only provider that performs this session***','Also known as “skin scraping” or “scraping therapy,” it\'s used to soothe discomfort, stiffness, and tension, and ease headaches by stroking the body with a smooth-edged tool.'],
    type: 'specialty',
    duration: ['60 minutes','90 minutes'],
    costArray: [135,200]
  },
  {
    title: 'Hot Stone Massages',
    image: hotstones,
    bio: 'A hot stone massage is a type of massage therapy. It\'s used to help you relax and ease tense muscles and damaged soft tissues throughout your body.',
    type: 'specialty',
    duration: ['60 minutes','90 minutes'],
    costArray: [135, 200]
  },
  {
    title: 'Aromatherapy',
    image: aromatherapy,
    bio: 'Add your choice of essential oils to your massage, and get more of an experience.',
    cost: 15,
    type: 'enhancement'
  },
  {
    title: 'Sugar Scrub',
    image: SugarScrub,
    bio: 'Pampering the feet and/or hands through exfoliation, hot towels, and lotion.',
    cost: 15,
    type: 'enhancement'
  },
  {
    title: 'Cupping Spot Treatment',
    image: cupping1,
    bio: 'Cupping in on one area of your choosing.',
    cost: 15,
    type: 'enhancement'
  },
  {
    title: 'Gua Sha Enhancement',
    image: guaSha,
    bio: ['***Ann Husselbee is the only provider that performs this session***','Gua Sha in one area of your choosing.'],
    cost: 15,
    type: 'enhancement'
  },

]