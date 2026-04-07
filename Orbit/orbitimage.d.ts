import { ReactNode } from 'react';

interface OrbitImagesProps {
  images?: ReactNode[];
  altPrefix?: string;
  shape?: 'circle' | 'ellipse' | 'square' | 'rectangle' | 'triangle' | 'star' | 'heart' | 'infinity' | 'wave' | 'custom';
  customPath?: string;
  baseWidth?: number;
  radiusX?: number;
  radiusY?: number;
  radius?: number;
  starPoints?: number;
  starInnerRatio?: number;
  rotation?: number;
  duration?: number;
  itemSize?: number;
  direction?: 'normal' | 'reverse';
  fill?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  showPath?: boolean;
  pathColor?: string;
  pathWidth?: number;
  easing?: string;
  paused?: boolean;
  centerContent?: ReactNode;
  responsive?: boolean;
}

export default function OrbitImages(props: OrbitImagesProps): JSX.Element;
