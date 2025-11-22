import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
    theme: AppLinkTheme.PRIMARY,
    children: 'text'
  }
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};


export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'text'
  }
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};