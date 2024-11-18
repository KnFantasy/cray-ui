import type { Options } from '@popperjs/core'

export interface TooltipProps extends Partial<Options> {
  content?: string;
  trigger?: 'hover' | 'click';
  manual?: boolean;
  transition?: string;
  openDelay?: number;
  closeDelay?: number;
}

export interface TooltipEmits {
  (e: 'visibleChange', value: boolean): void;
  (e: 'clickOutside', value: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}