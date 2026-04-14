export interface Stat {
  id: string
  value: number
  label: string
  suffix: string
}

export const stats: Stat[] = [
  {
    id: '1',
    value: 50,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    id: '2',
    value: 10,
    label: 'Happy Clients',
    suffix: '+',
  },
  {
    id: '3',
    value: 6,
    label: 'Months Experience',
    suffix: '+',
  },
  {
    id: '4',
    value: 1,
    label: 'Million+ Views',
    suffix: 'M+',
  },
]
