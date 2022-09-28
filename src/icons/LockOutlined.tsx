// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import LockOutlinedSvg from '../../vendors/asn/LockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockOutlinedSvg} />;

LockOutlined.displayName = 'LockOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LockOutlined);