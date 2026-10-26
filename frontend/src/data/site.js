import { Stethoscope, HeartPulse, Siren, Baby, Scissors, FlaskConical, Smile, Droplets, Salad, Activity, Moon, Brain, ShieldCheck } from 'lucide-react'

// Lilongwe Adventist Hospital
export const H = { 
  phone: '+265 1 771 543 / +265 996 56 44 05', 
  address: 'Presidential Way, Lilongwe, Malawi', 
  landmark: '',
  email: 'infor@ahcl.adventist.org',
  bedCapacity: '15–17 patient beds',
  medicalDirector: 'Elmoore Kamwendo',
  hours: '24 hours a day, 7 days a week'
}
export const PHONE_MAIN = H.phone.split('/')[0].trim()
export const tel = `tel:${PHONE_MAIN.replace(/\s/g, '')}`
export const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Presidential+Way+Lilongwe+Malawi'

// Stock placeholders
export const img = (id, w = 1200) =>
  /^(https?:)?\/\//.test(id) || id.startsWith('/')
    ? id
    : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`
export const P = {
  hero: '1576091160399-112ba8d25d1d', doctor: '1612349317150-e413f6a5b16d', lab: '1579154204601-01588f351e67',
  dental: '1606811841689-23dfddce3e95', surgery: '1551076805-e1869033e561', hospital: '1519494026892-80bbd2d6fd0d',
  emergency: '1587351021759-3e566b6af7cc', maternity: '1555252333-9f8e92e65df9', baby: '1584515933487-779824d29309', outpatient: '1559757148-5c350d0d3c56',
  water: '1523362628745-0c100150b504', diet: '1512621776951-a57141f2eefd', exercise: '1534438327276-14e5300c3a48',
  sleep: '1541781774459-bb2af2f05b55', mind: '1506126613408-eca07ce68773', smoke: '1573497019940-1c28c88b4f3e',
  doc1: '1622253692010-333f2da6031d', doc2: '1594824476967-48c8b964273f', doc3: '1537368910025-700350fe46c7',
  doc4: '1582750433449-648ed127bb54', doc5: '1559839734-2b71ea197ec2', doc6: '1651008376811-b90baee60c1f',
}

// Detail content (conditions/treatments) is placeholder copy pending clinical verification.
export const SERVICES = [
  {
    slug: 'ophthalmology',
    icon: Stethoscope,
    title: 'Ophthalmology',
    photo: '/images/service1.jpg',
    text: 'Eye care services including consultations and specialist ophthalmology clinics.',
    overview: 'Ophthalmology services provide eye care consultations, diagnosis, and management of eye conditions through specialist clinics held on scheduled days.',
    schedule: 'Monday, Thursday, Friday half-day',
    conditions: ['Eye conditions and vision problems', 'Routine eye examinations', 'Ophthalmology referrals'],
    treatments: ['Eye examinations and consultations', 'Ophthalmology treatment', 'Specialist clinic reviews'],
  },
  {
    slug: 'dental-care',
    icon: Smile,
    title: 'Dental Care',
    photo: '/images/dental.jpg',
    text: 'Dental consultations and treatment through our dedicated dental clinic.',
    overview: 'Dental care services cover routine check-ups, treatment and consultations through our dental clinic, open Monday to Friday (Friday half-day).',
    schedule: 'Monday to Friday, Friday half-day',
    conditions: ['Routine dental and oral health needs', 'Dental pain and infections', 'Oral health concerns'],
    treatments: ['Dental check-ups', 'Dental treatment', 'Oral health consultations'],
  },
  {
    slug: 'obstetrics-gynaecology',
    icon: HeartPulse,
    title: 'Obstetrics & Gynaecology',
    photo: P.maternity,
    text: 'Antenatal care and women’s health services with specialist clinics.',
    overview: 'Obstetrics and gynaecology services support women through pregnancy and beyond, alongside general women’s health care, with specialist clinics held Tuesday and Friday afternoon.',
    schedule: 'Tuesday and Friday afternoon',
    conditions: ['Pregnancy and antenatal concerns', 'Women’s health and gynaecological needs', 'Family planning discussions'],
    treatments: ['Antenatal consultations', 'Women’s health clinics', 'Scheduled specialist reviews'],
  },
  {
    slug: 'surgical-services',
    icon: Scissors,
    title: 'Surgical Services',
    photo: P.surgery,
    text: 'Surgical assessment, procedures and follow-up care in our operating theater.',
    overview: 'Surgical services cover assessment, operating theatre procedures and follow-up care. Specialist surgery clinic is held Monday to Friday.',
    schedule: 'Monday to Friday',
    conditions: ['Conditions assessed as needing a surgical opinion', 'Planned procedures following consultation'],
    treatments: ['Pre-operative assessment', 'Operating theatre procedures', 'Post-operative and follow-up care'],
  },
  {
    slug: 'internal-medicine',
    icon: Stethoscope,
    title: 'Internal Medicine',
    photo: '/images/service1.jpg',
    text: 'General medicine consultations for illness, chronic conditions and preventive care.',
    overview: 'Internal medicine provides consultations for everyday illness, ongoing conditions and general health concerns, with referrals made to the right specialist when needed.',
    schedule: 'Daily, 24 hours',
    conditions: ['Everyday illness such as colds, flu and infections', 'Chronic conditions that need ongoing follow-up', 'General health concerns and routine check-ups'],
    treatments: ['General medical consultations', 'Chronic disease follow-up', 'Referrals to specialist care', 'Preventive health advice'],
  },
  {
    slug: 'orthopedics',
    icon: Activity,
    title: 'Orthopedics',
    photo: P.surgery,
    text: 'Orthopedic care and consultations for bone, joint and musculoskeletal conditions.',
    overview: 'Orthopedic services provide assessment and treatment for bone, joint and musculoskeletal conditions. Specialist clinic held Tuesday, Wednesday, Thursday, and Sunday.',
    schedule: 'Tuesday, Wednesday, Thursday and Sunday',
    conditions: ['Bone, joint and musculoskeletal conditions', 'Sports injuries', 'Arthritis and related conditions'],
    treatments: ['Orthopedic consultations', 'Treatment and management', 'Referrals as needed'],
  },
  {
    slug: 'pediatrics',
    icon: Baby,
    title: 'Pediatrics',
    photo: P.baby,
    text: 'Medical care for infants, children and adolescents.',
    overview: 'Pediatric services provide medical care for infants, children and adolescents, including routine check-ups and treatment of childhood illnesses.',
    schedule: 'Daily, 24 hours',
    conditions: ['Childhood illnesses', 'Routine pediatric check-ups', 'Pediatric concerns'],
    treatments: ['Pediatric consultations', 'Treatment of childhood illnesses', 'Preventive care'],
  },
  {
    slug: 'general-services',
    icon: FlaskConical,
    title: 'Core Services',
    photo: P.lab,
    text: 'Inpatient/outpatient care, operating theater, laboratory, pharmacy, radiology/X-ray, ultrasound, ambulance, physiotherapy, and ART clinics.',
    overview: 'Lilongwe Adventist Hospital provides comprehensive core services including inpatient and outpatient care, operating theater, clinical laboratory, pharmacy, radiology/X-ray, ultrasound, ambulance services, physiotherapy, and ART clinics.',
    schedule: 'Daily, 24 hours',
    conditions: ['Various medical needs requiring diagnostic or supportive services', 'Emergency and routine care needs'],
    treatments: ['Laboratory tests and diagnostics', 'Pharmacy services', 'Radiology and ultrasound', 'Physiotherapy', 'Ambulance services', 'ART clinic services'],
  },
]

export const FEATURED = [
  { icon: Stethoscope, title: 'Ophthalmology', photo: '/images/service1.jpg', text: 'Specialist eye care services with scheduled ophthalmology clinics.' },
  { icon: HeartPulse, title: 'Obstetrics & Gynaecology', photo: P.maternity, text: 'Comprehensive women’s health and maternity services.' },
  { icon: FlaskConical, title: 'Core Services', photo: P.lab, text: 'Laboratory, pharmacy, radiology/X-ray, ultrasound, ambulance, physiotherapy, and ART clinics.' },
]

export const NAV = [['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/doctors', 'Doctors'], ['/patient-info', 'Patient Information'], ['/blog', 'Blog']]

// General wellness content (demo copy — pending review by the hospital). Shape is CMS-ready.
export const TIPS = [
  {
    slug: 'stay-hydrated', icon: Droplets, tag: 'Everyday health', title: 'Stay hydrated', photo: P.water, date: '2026-09-18',
    text: 'Drink enough clean water through the day, especially in hot weather, to help your body work at its best.',
    overview: 'Water keeps every part of your body working properly. When you are active or the weather is hot, you lose more fluid than usual — and even mild dehydration can leave you tired, headachy or unable to concentrate.',
    points: [
      'Keep a bottle of clean water with you and sip through the day.',
      'Drink more when it is hot or when you are physically active.',
      'Dark urine, thirst and tiredness can be early signs of dehydration.',
    ],
  },
  {
    slug: 'eat-a-balanced-diet', icon: Salad, tag: 'Nutrition', title: 'Eat a balanced diet', photo: P.diet, date: '2026-09-02',
    text: 'Build meals around vegetables, fruit, whole grains and lean protein, and limit sugary drinks and processed foods.',
    overview: 'A balanced diet gives your body the energy and nutrients it needs to stay strong and resist illness. You do not need expensive foods — simple, fresh and varied meals go a long way.',
    points: [
      'Fill half your plate with vegetables and fruit.',
      'Choose whole grains and lean proteins such as beans, fish or chicken.',
      'Cut back on sugary drinks, salty snacks and heavily processed foods.',
    ],
  },
  {
    slug: 'keep-moving', icon: Activity, tag: 'Fitness', title: 'Keep moving', photo: P.exercise, date: '2026-08-21',
    text: 'A brisk walk most days supports your heart, mood and energy levels.',
    overview: 'Regular movement is one of the best things you can do for your health. You do not need a gym — walking, chores and everyday activity all count.',
    points: [
      'Aim for at least 30 minutes of moderate activity on most days.',
      'Start where you are — short walks count and can build up over time.',
      'Add strength and stretching to support joints and posture.',
    ],
  },
  {
    slug: 'prioritise-sleep', icon: Moon, tag: 'Rest', title: 'Prioritise sleep', photo: P.sleep, date: '2026-08-07',
    text: 'Most adults need 7–9 hours of sleep. A steady routine helps your body recover and stay well.',
    overview: 'Sleep is when your body repairs itself and your mind processes the day. Poor sleep over time affects mood, concentration and even how well your immune system works.',
    points: [
      'Keep a regular bedtime and wake-up time, including weekends.',
      'Avoid screens and caffeine close to bedtime.',
      'Make your room dark, quiet and cool where possible.',
    ],
  },
  {
    slug: 'look-after-your-mind', icon: Brain, tag: 'Wellbeing', title: 'Look after your mind', photo: P.mind, date: '2026-07-24',
    text: 'Managing stress, staying connected and asking for support matter just as much as physical health.',
    overview: 'Mental health is part of overall health. Stress, worry and low mood are common, and talking about them — with people you trust or with a professional — makes a real difference.',
    points: [
      'Name how you are feeling and share it with someone you trust.',
      'Build small daily pauses — breathing, prayer or a short walk.',
      'Reach out for professional support if low mood or worry persists.',
    ],
  },
  {
    slug: 'do-not-smoke', icon: ShieldCheck, tag: 'Prevention', title: 'Do not smoke', photo: P.smoke, date: '2026-07-10',
    text: 'Stopping smoking is one of the biggest steps you can take to protect your health and those around you.',
    overview: 'Smoking harms almost every part of the body and increases the risk of serious illness, including heart and lung disease. It also affects the people around you through second-hand smoke. Quitting is hard, but support greatly improves your chances.',
    points: [
      'Set a quit date and tell people who can support you.',
      'Avoid places and routines that trigger the urge to smoke.',
      'Ask our team about stop-smoking support and follow-up.',
    ],
  },
]

export const TEAM = [
  {
    slug: 'dr-alinafe-banda', name: 'Dr. Alinafe Banda', specialty: 'Internal Medicine', icon: Stethoscope, qualifications: 'MBBS, MRCP (UK)', photo: P.doc1,
    bio: 'Dr. Banda diagnoses and manages everyday and long-term medical conditions, and coordinates referrals to specialist care. He sees patients in our outpatient clinic.',
  },
  {
    slug: 'dr-chikondi-phiri', name: 'Dr. Chikondi Phiri', specialty: 'Obstetrics & Gynaecology', icon: HeartPulse, qualifications: 'MBBS, MRCOG', photo: P.doc2,
    bio: 'Dr. Phiri supports women through pregnancy and general gynaecological care, with a focus on safe antenatal and postnatal care.',
  },
  {
    slug: 'dr-yamikani-mwale', name: 'Dr. Yamikani Mwale', specialty: 'General Surgery', icon: Scissors, qualifications: 'MBBS, FRCS', photo: P.doc3,
    bio: 'Dr. Mwale provides surgical assessment, operating theatre procedures and follow-up care across a range of general surgical conditions.',
  },
  {
    slug: 'dr-thandiwe-nyirenda', name: 'Dr. Thandiwe Nyirenda', specialty: 'Paediatrics & Neonatal Care', icon: Baby, qualifications: 'MBBS, MMed (Paediatrics)', photo: P.doc4,
    bio: 'Dr. Nyirenda cares for infants and children, including newborns who need close monitoring in their first days.',
  },
  {
    slug: 'dr-grace-kamanga', name: 'Dr. Grace Kamanga', specialty: 'Family Medicine', icon: FlaskConical, qualifications: 'MBBS, MMed (Family Medicine)', photo: P.doc5,
    bio: 'Dr. Kamanga provides family-centred care for patients of all ages, with an emphasis on prevention and continuity of care.',
  },
  {
    slug: 'dr-mphatso-gondwe', name: 'Dr. Mphatso Gondwe', specialty: 'Dental Surgery', icon: Smile, qualifications: 'BDS', photo: P.doc6,
    bio: 'Dr. Gondwe leads our dental service, covering routine check-ups, treatment and implant assessment.',
  },
]
