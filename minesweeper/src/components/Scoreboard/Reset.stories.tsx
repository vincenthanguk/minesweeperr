import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Reset } from './Reset';

export default {
  title: 'Scoreboard/Reset',
  component: Reset,
} as Meta;

const Template: Story = (args) => <Reset {...args} />;

export const ResetExample = Template.bind({});
