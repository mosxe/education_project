import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: '1', password: '1' }
  })
  ]
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '1', password: '1' }
  })
  ],
};

export const Loading: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '', password: '', isLoading: true }
  })
  ],
};