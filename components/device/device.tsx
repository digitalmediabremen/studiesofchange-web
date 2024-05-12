import { ReactNode } from 'react';
import * as rdd from 'react-device-detect'

// This component is for detecting the mobile device

interface DeviceProps {
  children: (props: typeof rdd) => ReactNode
}
export default function Device(props: DeviceProps) {
  return <div className="device-layout-component">{props.children(rdd)}</div>
}