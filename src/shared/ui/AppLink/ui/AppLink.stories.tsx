import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'text'
  }
};

export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
    children: 'text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'text'
  }
};

export const SecondaryDark: Story = {
  args: {
    variant: 'secondary',
    children: 'text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
