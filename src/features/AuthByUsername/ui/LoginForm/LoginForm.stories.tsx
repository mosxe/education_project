import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'shared/const/theme';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    onSuccess: () => true
  },
  decorators: [StoreDecorator({
    loginForm: { username: '1', password: '1' }
  })
  ]
};

export const Dark: Story = {
  args: {
    onSuccess: () => true
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '1', password: '1' }
  })
  ],
};

export const Loading: Story = {
  args: {
    onSuccess: () => true
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '', password: '', isLoading: true }
  })
  ],
};

export const Error: Story = {
  args: {
    onSuccess: () => true
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { error: 'Ошибка' }
  })
  ],
};