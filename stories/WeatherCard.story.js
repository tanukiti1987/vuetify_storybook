import { storiesOf } from '@storybook/vue'
import { array } from '@storybook/addon-knobs/vue'
import WeatherCard from '@/components/WeatherCard.vue'

storiesOf('Components/Vuetify', module).add(
  'WeatherCard',
  () => ({
    components: { WeatherCard },
    template: `<weather-card :day-of-the-week-labels="dayOfTheWeekLabels"/>`,
    props: {
      dayOfTheWeekLabels: {
        type: Array,
        default: array('dayOfTheWeekLabels',
          ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA']),
      },
    },
  }),
  {
    info: true,
    notes: `
        # WeatherCard

        ## Props
        * dayOfTheWeekLabels
          * Array
            * 曜日の表示形式
      `,
  }
)
