import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Tabs } from './Tabs';
import { action } from 'storybook/internal/actions';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1'
      },
      {
        value: 'tab 2',
        content: 'tab 2'
      },
      {
        value: 'tab 3',
        content: 'tab 3'
      }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
  }
};