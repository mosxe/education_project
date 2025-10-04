import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from 'storybook/actions';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    onSendComment: action('onSendComment')
  },
  decorators: [StoreDecorator({})
  ]
};