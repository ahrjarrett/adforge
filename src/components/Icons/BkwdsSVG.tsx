import * as React from 'react'

export const BkwdsSVG = ({ width = 720, height = 185, style = {} }) => {
  return (
    <div style={style}>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            d="M46.956,237.746 L46.956,254 L18.834,254 L18.834,73.4 L46.956,73.4 L46.956,150.026 C54.438,137.9 70.176,130.676 84.108,130.676 C120.744,130.676 145.77,159.83 145.77,193.886 C145.77,227.942 120.744,257.096 84.108,257.096 C70.176,257.096 54.438,249.872 46.956,237.746 Z M82.56,232.07 C103.716,232.07 117.648,214.526 117.648,193.886 C117.648,173.246 103.716,155.702 82.56,155.702 C60.888,155.702 46.956,173.246 46.956,193.886 C46.956,214.526 60.888,232.07 82.56,232.07 Z M268.09346,133.772 L218.04146,193.886 L268.09346,254 L233.00546,254 L188.88746,201.11 L188.88746,254 L160.76546,254 L160.76546,73.4 L188.88746,73.4 L188.88746,186.92 L233.00546,133.772 L268.09346,133.772 Z M385.25692,254 L353.78092,164.216 L322.04692,254 L303.21292,254 L256.51492,133.772 L286.70092,133.772 L312.75892,209.882 L339.84892,133.772 L367.45492,133.772 L394.54492,209.882 L420.60292,133.772 L450.78892,133.772 L404.09092,254 L385.25692,254 Z M542.66838,254 L542.66838,237.746 C535.18638,249.872 519.44838,257.096 505.51638,257.096 C468.88038,257.096 443.85438,227.942 443.85438,193.886 C443.85438,159.83 468.88038,130.676 505.51638,130.676 C519.44838,130.676 535.18638,137.9 542.66838,150.026 L542.66838,73.4 L570.79038,73.4 L570.79038,254 L542.66838,254 Z M507.06438,232.07 C528.73638,232.07 542.66838,214.526 542.66838,193.886 C542.66838,173.246 528.73638,155.702 507.06438,155.702 C485.90838,155.702 471.97638,173.246 471.97638,193.886 C471.97638,214.526 485.90838,232.07 507.06438,232.07 Z M648.99584,186.146 C665.76584,192.596 681.76184,198.53 681.76184,220.46 C681.76184,245.486 660.08984,257.096 633.77384,257.096 C607.97384,257.096 584.75384,241.874 584.75384,213.494 L612.10184,213.494 C612.10184,229.232 621.90584,234.908 635.32184,234.908 C646.41584,234.908 654.92984,231.296 654.92984,220.976 C654.92984,209.624 642.80384,208.85 617.51984,199.046 C600.74984,192.596 588.88184,186.404 588.88184,165.506 C588.88184,142.802 609.52184,130.676 634.03184,130.676 C659.57384,130.676 679.95584,147.962 679.95584,171.44 L652.60784,171.44 C652.60784,160.088 646.93184,152.864 633.25784,152.864 C623.71184,152.864 615.97184,157.508 615.97184,166.022 C615.97184,176.342 627.06584,177.632 648.99584,186.146 Z"
            id="path-1"
          />
          <path
            d="M695.48,234.908 C695.48,223.298 704.768,214.01 716.12,214.01 C727.73,214.01 737.018,223.298 737.018,234.908 C737.018,246.26 727.73,255.548 716.12,255.548 C704.768,255.548 695.48,246.26 695.48,234.908 Z"
            id="path-2"
          />
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Artboard"
            transform="translate(0.000000, -5.000000)"
            fillRule="nonzero"
          >
            <g id="logo-outlines" transform="translate(-18.000000, -68.000000)">
              <g id="bkwds">
                <use fill="#000000" xlinkHref="#path-1" />
                <use fill="#333333" xlinkHref="#path-1" />
              </g>
              <g id=".">
                <use fill="#000000" xlinkHref="#path-2" />
                <use fill="#F46904" xlinkHref="#path-2" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

// <svg width="681px" height="462px" viewBox="0 0 681 462" version="1.1">
//   <g
//     id="Page-1"
//     stroke="none"
//     strokeWidth="1"
//     fill="none"
//     fillRule="evenodd"
//     fontFamily="GTWalsheim-Medium, GT Walsheim"
//     fontSize="230"
//     fontWeight="400"
//   >
//     <g id="Artboard">
//       <text id="bkwds" fill="#333333" letterSpacing="-12.6219492">
//         <tspan x="5" y="285">
//           bkwds
//         </tspan>
//       </text>
//       <text id="." fill="#F46904">
//         <tspan x="612" y="285">
//           .
//         </tspan>
//       </text>
//     </g>
//   </g>
// </svg>
