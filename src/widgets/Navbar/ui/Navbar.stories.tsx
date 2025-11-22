import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'shared/const/theme';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: '', password: '', isLoading: true }
  })
  ],
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '', password: '', isLoading: true }
  })
  ],
};

export const Logout: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    user: { authData: { id: '1', username: '1' } }
  })
  ],
};