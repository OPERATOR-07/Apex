// Shared SVG icon components (Feather-style, stroke-based)
// All accept size, color, strokeWidth and className props.

function baseProps(props, defaults = {}) {
  return {
    width: props.size || defaults.size || 24,
    height: props.size || defaults.size || 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: props.color || defaults.color || 'currentColor',
    strokeWidth: props.strokeWidth || defaults.strokeWidth || 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: props.className || '',
    'aria-hidden': 'true',
  };
}

export function HeartPulseIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

export function UsersIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

export function MonitorIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

export function HospitalIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M3 21h18"/>
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
      <path d="M9 7h1"/>
      <path d="M14 7h1"/>
      <path d="M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"/>
    </svg>
  );
}

export function MicroscopeIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M6 18h8"/>
      <path d="M3 22h18"/>
      <path d="M14 22a7 7 0 1 0 0-14h-1"/>
      <path d="M9 14h2"/>
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
    </svg>
  );
}

export function FlaskIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M10 2v7.31"/>
      <path d="M14 9.3V2"/>
      <path d="M8.5 2h7"/>
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>
      <path d="M5.52 16h12.96"/>
    </svg>
  );
}

export function PillIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
      <path d="m8.5 8.5 7 7"/>
    </svg>
  );
}

export function TruckIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="1" y="3" width="15" height="13" rx="1"/>
      <path d="M16 8h4l3 3v5h-7V8Z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}

export function BuildingIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

export function TargetIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}

export function HandshakeIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
      <path d="m21 3 1 11h-2"/>
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
      <path d="M3 4h8"/>
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill={props.color || 'currentColor'} className={props.className || ''} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export function ChevronRightIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

export function CalendarIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

export function AmbulanceIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M10 17h4V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3H2v6h1"/>
      <path d="M16 9h4l3 3v5h-7V9Z"/>
      <circle cx="7" cy="18" r="2"/>
      <circle cx="17.5" cy="18" r="2"/>
      <path d="M8 14h2"/>
      <path d="M7 13v2"/>
    </svg>
  );
}

export function StethoscopeIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
      <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/>
      <circle cx="20" cy="10" r="2"/>
    </svg>
  );
}

export function ActivityIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  );
}

export function AwardIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  );
}

export function ZapIcon(props) {
  return (
    <svg {...baseProps(props)}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
