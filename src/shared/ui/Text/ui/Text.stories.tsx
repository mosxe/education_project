import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

const meta = {
  title: 'shared/Text',
  component: Text,
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст'
  }
};

export const OnlyTitle: Story = {
  args: {
    title: 'Заголовок'
  }
};

export const OnlyText: Story = {
  args: {
    text: 'Текст'
  }
};

export const NormalDark: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Заголовок'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Текст'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};