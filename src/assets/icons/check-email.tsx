import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} fill="none" {...props}>
    <path
      fill="#8C61FF"
      fillOpacity={0.05}
      stroke="#BEA6FF"
      d="M95.5 48a47.5 47.5 0 1 1-95 0 47.5 47.5 0 0 1 95 0Z"
    />
    <path
      fill="#BEA6FF"
      d="M77.89 54.45a.65.65 0 0 1-.64-.64v-9.24a.64.64 0 0 1 1.28 0v9.25a.64.64 0 0 1-.64.63ZM77.89 41.78a.64.64 0 0 1-.64-.65v-1.89a.64.64 0 0 1 1.28 0v1.9a.63.63 0 0 1-.64.64ZM25.79 32.5h-3.56a.67.67 0 0 1 0-1.33h3.56a.67.67 0 0 1 0 1.33Z"
    />
    <path
      fill="#BEA6FF"
      d="M24 34.28a.67.67 0 0 1-.66-.66v-3.56a.67.67 0 0 1 1.33 0v3.56c0 .36-.3.66-.66.66ZM36.86 73.71a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72ZM31.71 73.71a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72ZM26.57 73.71a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72Z"
    />
    <path fill="#333" d="m47.86 23.24-24.1 19.8 24.1 19.8 24.1-19.8-24.1-19.8Z" />
    <path
      fill="#BEA6FF"
      d="M47.86 63.54a.67.67 0 0 1-.41-.2l-24.1-19.8a.7.7 0 0 1 0-1.07l24.1-19.8a.7.7 0 0 1 .92 0l24.1 19.8a.73.73 0 0 1 .25.53.7.7 0 0 1-.25.54l-24.1 19.8a.67.67 0 0 1-.5.2Zm-23-20.5 23 18.9 23.01-18.9-23-18.9-23.01 18.9Z"
    />
    <path fill="#333" d="M65.01 28.8h-34.3V69.6h34.3V28.8Z" />
    <path fill="#333" d="m55.41 40.85-11.72 9.63v19.1h21.32V40.86h-9.6Z" />
    <path
      fill="#BEA6FF"
      d="M65.06 70.28h-34.3a.7.7 0 0 1-.7-.7V28.8a.7.7 0 0 1 .7-.67h34.3a.7.7 0 0 1 .7.7V69.6a.7.7 0 0 1-.7.67ZM31.4 68.91h32.9v-39.4h-32.9v39.4Z"
    />
    <path
      fill="#BEA6FF"
      d="M58.99 35.06H48.17a.7.7 0 0 1 0-1.4h10.82a.7.7 0 0 1 0 1.4ZM44.46 35.06h-7.72a.7.7 0 0 1 0-1.4h7.72a.7.7 0 0 1 0 1.4ZM58.99 39.7h-7.11a.7.7 0 0 1 0-1.4h7.1a.7.7 0 1 1 0 1.4ZM48.17 39.7H36.74a.7.7 0 0 1 0-1.4h11.43a.7.7 0 1 1 0 1.4ZM58.99 44.33H46.32a.7.7 0 0 1 0-1.4h12.67a.7.7 0 0 1 0 1.4ZM42.6 44.33h-5.86a.7.7 0 0 1 0-1.4h5.87a.7.7 0 0 1 0 1.4ZM58.99 48.96H52.8a.7.7 0 0 1 0-1.39H59a.7.7 0 1 1 0 1.4ZM49.1 48.96H36.74a.7.7 0 0 1 0-1.39H49.1a.7.7 0 1 1 0 1.4ZM54.05 53.6H41.68a.7.7 0 1 1 0-1.4h12.37a.7.7 0 1 1 0 1.4Z"
    />
    <path
      fill="#333"
      d="M23.76 43.04V69.6L39.91 56.3 23.76 43.04ZM55.82 56.31 71.96 69.6V43.04L55.82 56.31Z"
    />
    <path fill="#333" d="m47.86 62.85-7.95-6.54L23.76 69.6h48.2L55.82 56.3l-7.96 6.54Z" />
    <path
      fill="#333"
      d="M28.4 50.5v15.28l9.3-7.64-9.3-7.65ZM63.2 57.88l8.76 7.21V50.68l-8.76 7.2Z"
    />
    <path
      fill="#BEA6FF"
      d="M23.77 70.28c-.1 0-.21-.02-.3-.07a.69.69 0 0 1-.4-.62V43.04a.69.69 0 0 1 .4-.62.7.7 0 0 1 .74.08l16.15 13.28a.7.7 0 0 1 0 1.07L24.2 70.12a.69.69 0 0 1-.44.16Zm.69-25.77v23.6l14.36-11.8-14.36-11.8Z"
    />
    <path fill="#333" d="m60.42 60.1-10.15 8.34-7.08-5.82-8.47 6.97h37.24l-11.54-9.5Z" />
    <path
      fill="#BEA6FF"
      d="M71.96 70.28a.69.69 0 0 1-.44-.16L55.37 56.86a.7.7 0 0 1 0-1.07L71.55 42.5a.7.7 0 0 1 .74-.08.69.69 0 0 1 .4.62v26.55a.69.69 0 0 1-.4.62.67.67 0 0 1-.33.07ZM56.91 56.31l14.36 11.8v-23.6L56.9 56.31Z"
    />
    <path
      fill="#BEA6FF"
      d="M71.96 70.28h-48.2a.7.7 0 0 1-.65-.46.7.7 0 0 1 .21-.77l16.15-13.27a.7.7 0 0 1 .92 0l7.51 6.17 7.51-6.17a.7.7 0 0 1 .93 0l16.14 13.27a.7.7 0 0 1 .22.77.7.7 0 0 1-.74.46ZM25.7 68.91h44.33l-14.24-11.7-7.5 6.18a.7.7 0 0 1-.94 0l-7.5-6.18-14.15 11.7ZM46.36 75.36H42.8a.67.67 0 0 1 0-1.33h3.56a.67.67 0 0 1 0 1.33Z"
    />
    <path
      fill="#BEA6FF"
      d="M44.58 77.14a.67.67 0 0 1-.67-.67v-3.56a.67.67 0 0 1 1.34 0v3.56c0 .37-.3.67-.67.67Z"
    />
  </svg>
)

export const CheckEmailSvg = memo(SvgComponent)
