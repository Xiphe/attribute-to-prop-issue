import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
})
export class ScButton {
  @Prop() size: string = 'default';
  render() {
    return (
      <button class={`size-${this.size}`}>
        <slot />
      </button>
    );
  }
}
