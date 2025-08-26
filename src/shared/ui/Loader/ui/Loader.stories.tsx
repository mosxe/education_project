import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  args: {},
} satisfies Meta<typeof Loader>;

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