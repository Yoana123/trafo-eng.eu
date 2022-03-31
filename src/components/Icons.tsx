import React from 'react'

interface Icon<P = Record<string, unknown>> {
  (props: P & { className?: string }): React.ReactElement | null
}

export const Hamburger: Icon = ({ className }): React.ReactElement => (
  <svg className={className} viewBox="0 0 12 10" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1a1 1 0 011-1h10a1 1 0 110 2H1a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H1a1 1 0 01-1-1zm1 3a1 1 0 100 2h10a1 1 0 100-2H1z"
      fill="#343A45"
    ></path>
  </svg>
)

export const Close: Icon = ({ className }) => (
  <svg className={className} viewBox="0 0 12 12" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3.3a1 1 0 111.4 1.4L7.42 6l4.3 4.3a1 1 0 01-1.42 1.4L6 7.42l-4.3 4.3a1 1 0 01-1.4-1.42L4.58 6 .29 1.7A1 1 0 011.71.3L6 4.58l4.3-4.3z"
      fill="currentColor"
    ></path>
  </svg>
)

export const List: Icon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16">
    <g fill="currentColor" fillRule="evenodd">
      <circle opacity=".15" cx="8" cy="8" r="8"></circle>
      <path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path>
    </g>
  </svg>
)

export const Exclamation: Icon = ({ className }): React.ReactElement => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
)

export const Information: Icon = ({ className }): React.ReactElement => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const Check: Icon = ({ className }): React.ReactElement => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export const Phone: Icon = ({ className }): React.ReactElement => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

export const Email: Icon = ({ className }): React.ReactElement => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
)

export const Location: Icon = ({ className }): React.ReactElement => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)
