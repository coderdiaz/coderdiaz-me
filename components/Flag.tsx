type Props = {
  width: number;
  height: number;
}
export default function Flag({ width, height }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 14"
    >
      <g filter="url(#filter0_d)">
        <mask
          id="mask0"
          width="16"
          height="12"
          x="3"
          y="1"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M3 1H19V13H3z"></path>
        </mask>
        <g mask="url(#mask0)">
          <path
            fill="#D9071E"
            fillRule="evenodd"
            d="M14 1h5v12h-5V1z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#006923"
            fillRule="evenodd"
            d="M3 1h6v12H3V1z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M8 1h6v12H8V1z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#FCCA3D"
            fillRule="evenodd"
            d="M10.192 4.957s-.343.266-.279.55c.064.284.74 0 .66-.275-.083-.275-.38-.275-.38-.275z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#A8AC71"
            fillRule="evenodd"
            d="M9.668 5.634c-.257 0-.364-.214-.311-.442.028-.121.102-.276.222-.476l.429.257a2.847 2.847 0 00-.11.198.96.96 0 01.25.113c.234.154.32.428.07.631-.048.04-.127.173-.17.302.119.007.204.025.283.071.221.13.2.37.032.553-.12.13-.279.237-.429.29-.25.091-.516.057-.516-.263v-.002c0-.013-.002-.036.11-.038h.021-.021c-.19-.003-.231-.104-.255-.283a1.852 1.852 0 01-.012-.182l-.002-.06-.003-.06V6.23c-.004-.058-.007-.097.123-.097h-.29v-.5h.29c.164 0 .255.055.307.17.03-.052.06-.101.094-.145a.386.386 0 00-.112-.024zm.318.878l.008-.008-.003.004-.005.004zm-.218.149s-.001 0 0 0zm0-.189v.008-.015.007z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#8F4620"
            fillRule="evenodd"
            d="M12.633 7.201s.463-1.37-.272-2.08c-.736-.71-1.585-.662-1.585-.662s-.245.182 0 .32c.245.14.142.272.142.272s-.41-.416-.682-.173c-.272.243.254.206.198.39-.055.182-.291.995.054 1.405.344.41-.326.321-.19.321s.62.096.62 0c0-.095.168.371.312.371s.255-.164.255-.164.201.164.324.164.552-.107.552-.107l-.81-.682s.049-.301-.066-.366.92.577 1.002.784c.08.207.146.207.146.207z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#9FAB2F"
            d="M8.533 6.863s.075-.239.156-.256c.07-.014.216.115.216.115.26 1.445.889 2.01 1.933 2.01 1.055 0 1.695-.43 2.069-1.762 0 0 .198-.203.268-.18.077.024.172.292.172.292-.095 1.559-1.22 2.482-2.492 2.482-1.284 0-2.333-1.035-2.322-2.7z"
          ></path>
          <path
            fill="#2FC2DC"
            fillRule="evenodd"
            d="M9.667 7.828s1.502.319 2.095.319c.593 0-.52.484-.954.484-.435 0-1.14-.803-1.14-.803z"
            clipRule="evenodd"
          ></path>
          <rect
            width="1"
            height="0.536"
            x="10.334"
            y="8.05"
            fill="#F9AA51"
            rx="0.083"
          ></rect>
          <path
            fill="#259485"
            d="M9.088 7.068l.41-.287c.532.76 1.329 1.009 2.443.748l.114.487c-1.303.305-2.31-.01-2.967-.948z"
          ></path>
          <path
            fill="#FCCA3D"
            fillRule="evenodd"
            d="M11.296 7.175s-.607.32-.405.32c.202 0 .994.16.84 0a2.35 2.35 0 00-.435-.32zM10.578 6.794s-.115-.333-.355-.333-.172.273-.288.273c-.115 0 .108.193.207.193.1 0 .436-.133.436-.133z"
            clipRule="evenodd"
          ></path>
        </g>
        <path
          fill="url(#paint0_linear)"
          style={{ mixBlendMode: "overlay" }}
          d="M3 1H19V13H3z"
        ></path>
        <path
          fill="#000"
          fillOpacity="0.1"
          d="M4 2h14V0H4v2zm14 0v10h2V2h-2zm0 10H4v2h14v-2zM4 12V2H2v10h2zm0 0H2a2 2 0 002 2v-2zm14 0v2a2 2 0 002-2h-2zm0-10h2a2 2 0 00-2-2v2zM4 0a2 2 0 00-2 2h2V0z"
          style={{ mixBlendMode: "multiply" }}
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="22"
          height="18"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="11"
          x2="11"
          y1="1"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.7"></stop>
          <stop offset="1" stopOpacity="0.3"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}