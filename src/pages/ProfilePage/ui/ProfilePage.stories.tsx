import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar_storybook.jpg';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    profile: {
      form: {
        username: 'mosxe',
        first: 'Кирилл',
        age: 33,
        city: 'Москва',
        lastname: 'test',
        currency: Currency.RUB,
        country: Country.Russian,
        avatar: avatar
      }
    }
  })
  ]
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
      form: {
        username: 'mosxe',
        first: 'Кирилл',
        age: 33,
        city: 'Москва',
        lastname: 'test',
        currency: Currency.RUB,
        country: Country.Russian,
        avatar: avatar
      }
    }
  })
  ]
};