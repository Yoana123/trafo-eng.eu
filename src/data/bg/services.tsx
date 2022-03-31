import type { Service } from '../../components/ServiceDetails'

const Repair: Service = {
  title: 'Ремонт и пренавиване на трансформатори',
  description: '',
  image: '/images/services/repair.jpg',
  content: {
    table: {
      rows: [
        'Пренавиване на първични намотки',
        'Пренавиване на вторични намотки',
        'Смяна на превключвател',
        'Смяна на изводи и уплътнения',
        'Смяна на охлаждащ казан',
        'Изсушаване на активна част',
        'Рутинни изпитания',
        '12 месеца гаранция',
      ],
    },
  },
}

const Recycling: Service = {
  title: 'Рециклиране на трансформаторно масло',
  description: 'Фирмата разполага със съвременен вакум дехидратор.',
  image: '/images/services/recycling.jpg',
  content: {
    table: {
      rows: [
        'Дегазификация',
        'Дехидрация',
        'Пречистване от твърди частици до 5 микрона',
        'Измерване пробивното напрежение на маслото',
      ],
    },
  },
}

const Parts: Service = {
  title: 'Части за трансформатори',
  description: '',
  image: '/images/services/parts.jpg',
  content: {
    table: {
      rows: [
        'Изводи средно напрежение',
        'Изводи ниско напрежение',
        'Контактни термометри',
        'Бухолцови релета',
        'Предпазни клапани',
        'Нивопоказатели',
        'Превключватели',
        'Изсушители',
        'Колела',
      ],
    },
  },
}

const Conductors: Service = {
  title: 'Проводници',
  description: 'Предлагаме набор от различни проводници и решения.',
  image: '/images/services/conductors.jpg',
  content: {
    table: {
      rows: ['Алуминиеви проводници с лакова изолация 0.65mm - 4.00mm'],
    },
  },
}

const items: Service[] = [Repair, Recycling, Parts, Conductors]

export default items
