import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ProfileCard } from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar_storybook.jpg';

const meta = {
  title: 'features/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: 'mosxe',
      first: 'Кирилл',
      age: 33,
      city: 'Москва',
      lastname: 'test',
      currency: Currency.RUB,
      country: Country.Russian,
      avatar: avatar
    },
    isLoading: false,
    error: undefined
  }
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};

export const WithError: Story = {
  args: {
    error: 'error'
  }
};