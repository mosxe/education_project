import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  args: {
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    options: [{ value: 'test', content: 'test' }]
  }
};
