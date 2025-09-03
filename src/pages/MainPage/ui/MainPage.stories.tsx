import type { Meta, StoryObj } from '@storybook/react-webpack5';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: '', password: '' }
  })
  ]
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: '1', password: '1' }
  })
  ]
};