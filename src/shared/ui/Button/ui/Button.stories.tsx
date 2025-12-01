import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/const/theme';

const meta = {
  title: 'shared/Button',
  component: Button,
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text'
  }
};

export const Clear: Story = {
  args: {
    children: 'Text',
    variant: 'clear'
  }
};

export const Outline: Story = {
  args: {
    children: 'Text',
    variant: 'outline'
  }
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    size: 'l'
  }
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    size: 'xl'
  }
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    variant: 'outline'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const Square: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true
  }
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'm'
  }
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'l'
  }
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true,
    size: 'xl'
  }
};

export const Disabled: Story = {
  args: {
    children: '>',
    variant: 'outline',
    disabled: true
  }
};
