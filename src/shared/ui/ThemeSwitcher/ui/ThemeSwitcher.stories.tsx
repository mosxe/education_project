import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  args: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  }
};

export const Dark: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};