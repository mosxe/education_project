import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Input',
  component: Input,
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  }
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithLabel: Story = {
  args: {
    label: 'Поле ввода'
  }
};

export const WithLabelDark: Story = {
  args: {
    label: 'Поле ввода'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};