import { storiesOf } from '@storybook/vue'
import Logo from '@/components/Logo.vue'

storiesOf('Components/Default', module).add(
  'Logo',
  () => ({
    components: { Logo },
    template: `<logo />`,
  }),
  {
    info: true,
    notes: `
        # Logo
        Nuxt.js default logo
      `,
  }
)
