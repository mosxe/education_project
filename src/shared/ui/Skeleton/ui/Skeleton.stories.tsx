import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 100
  }
};

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};


export const CirclePurple: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  },
  decorators: [ThemeDecorator(Theme.PURPLE)]
};