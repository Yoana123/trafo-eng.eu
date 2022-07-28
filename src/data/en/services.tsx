import type { Service } from '../../components/ServiceDetails'

const Repair: Service = {
  title: 'Transformer rewinding and repair',
  description: '',
  image: '/images/services/repair.jpg',
  content: {
    table: {
      rows: [
        'Rewinding of primary windings',
        'Rewinding of secondary windings',
        'Tap changers',
        'Replacement of low voltage bushings and gaskets',
        'Replacement of medium voltage bushing and gaskets',
        'Replacement of corrugated transformer tanks',
        'Drying of the active part',
        'Routine tests',
        '12 months warranty',
      ],
    },
  },
}

const Recycling: Service = {
  title: 'Transformer oil recycling',
  description: 'Our company has a modern vacuum dehydrator.',
  image: '/images/services/recycling.jpg',
  content: {
    table: {
      rows: [
        'Degassing',
        'Dehydration',
        'Oil filtration (up to 5 microns)',
        'Measuring the breakdown voltage of the oil',
      ],
    },
  },
}

const Parts: Service = {
  title: 'Transformer spares',
  description: '',
  image: '/images/services/parts.jpg',
  content: {
    table: {
      rows: [
        'Medium voltage bushings',
        'Low voltage bushings',
        'Contact thermometers',
        'Buchholz Relay',
        'Safety valves',
        'Oil level indicators',
        'Tap changers',
        'Dehumidifiers',
        'Wheels',
      ],
    },
  },
}

const Conductors: Service = {
  title: 'Conductors',
  description: 'We offer a wide range of wire and cable solutions.',
  image: '/images/services/conductors.jpg',
  content: {
    table: {
      rows: ['Enamelled aluminum wire with diameter 0.65mm - 4.00mm'],
    },
  },
}

const items: Service[] = [Repair, Recycling, Parts, Conductors]

export default items
