import React from "react";
import "./Logo.css";

const Logo = ({ size, className }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="TaskisLogo">
        <g id="LogoShapes">
          <path
            id="Vector"
            d="M20 7.74936C18.5376 6.6509 16.7198 6 14.75 6C9.91751 6 6 9.91751 6 14.75C6 19.5825 9.91751 23.5 14.75 23.5C16.7198 23.5 18.5376 22.8491 20 21.7506"
            stroke="black"
            strokeOpacity="1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M34 7.75L25.25 16.5088L22.625 13.8838"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M33.9568 13.875C33.9854 14.1628 34 14.4547 34 14.75C34 19.5825 30.0825 23.5 25.25 23.5C20.4175 23.5 16.5 19.5825 16.5 14.75C16.5 9.91751 20.4175 6 25.25 6C26.4944 6 27.6782 6.25978 28.75 6.72808"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          id="LogoText"
          d="M8.67236 28.7842V29.9438H6.68701V34.9722H5.40674V29.9438H3.42139V28.7842H8.67236ZM11.9009 28.7378L14.7954 35H13.2832L12.8101 33.8403H10.3516L9.87842 35H8.36621L11.2607 28.7378H11.9009ZM11.5854 30.8438L10.8062 32.7456H12.3647L11.5854 30.8438ZM17.5137 28.6636C17.8724 28.6636 18.2002 28.7131 18.4971 28.812C18.7939 28.911 19.0444 29.0254 19.2485 29.1553V30.4263C19.0259 30.2902 18.7878 30.1634 18.5342 30.0459C18.2806 29.9284 17.993 29.8696 17.6714 29.8696C17.5106 29.8696 17.3498 29.8944 17.189 29.9438C17.0343 29.9933 16.9045 30.0675 16.7993 30.1665C16.7004 30.2655 16.6509 30.3923 16.6509 30.5469C16.6509 30.751 16.7406 30.9056 16.9199 31.0107C17.0993 31.1159 17.3188 31.221 17.5786 31.3262L18.3394 31.6416C18.7723 31.8271 19.0908 32.0529 19.2949 32.3188C19.499 32.5848 19.6011 32.8879 19.6011 33.228C19.6011 33.5991 19.4928 33.9269 19.2764 34.2114C19.0661 34.4897 18.7816 34.7093 18.4229 34.8701C18.0703 35.0309 17.6776 35.1113 17.2446 35.1113C16.8797 35.1113 16.5303 35.0495 16.1963 34.9258C15.8623 34.8021 15.5716 34.6506 15.3242 34.4712V33.2002C15.5964 33.3981 15.8963 33.5651 16.2241 33.7012C16.5519 33.8372 16.9014 33.9053 17.2725 33.9053C17.5322 33.9053 17.7549 33.8558 17.9404 33.7568C18.126 33.6517 18.2188 33.4971 18.2188 33.293C18.2188 33.1322 18.1414 33.0023 17.9868 32.9033C17.8384 32.7982 17.6745 32.7116 17.4951 32.6436L16.5396 32.2725C16.0571 32.0869 15.7293 31.8457 15.5562 31.5488C15.3892 31.2458 15.3057 30.9118 15.3057 30.5469C15.3057 30.1696 15.4077 29.8418 15.6118 29.5635C15.8221 29.279 16.0942 29.0594 16.4282 28.9048C16.7622 28.744 17.124 28.6636 17.5137 28.6636ZM22.1895 28.7842V31.5674L24.5552 28.7842H26.188L23.748 31.5024L26.4663 35H24.7778L22.8667 32.4858L22.1895 33.2466V35H20.8999V28.7842H22.1895ZM30.873 33.8403V35H27.4868V33.8403H28.5352V29.9438H27.4868V28.7842H30.873V29.9438H29.8247V33.8403H30.873ZM34.3799 28.6636C34.7386 28.6636 35.0664 28.7131 35.3633 28.812C35.6602 28.911 35.9106 29.0254 36.1147 29.1553V30.4263C35.8921 30.2902 35.654 30.1634 35.4004 30.0459C35.1468 29.9284 34.8592 29.8696 34.5376 29.8696C34.3768 29.8696 34.216 29.8944 34.0552 29.9438C33.9006 29.9933 33.7707 30.0675 33.6655 30.1665C33.5666 30.2655 33.5171 30.3923 33.5171 30.5469C33.5171 30.751 33.6068 30.9056 33.7861 31.0107C33.9655 31.1159 34.1851 31.221 34.4448 31.3262L35.2056 31.6416C35.6385 31.8271 35.957 32.0529 36.1611 32.3188C36.3652 32.5848 36.4673 32.8879 36.4673 33.228C36.4673 33.5991 36.359 33.9269 36.1426 34.2114C35.9323 34.4897 35.6478 34.7093 35.2891 34.8701C34.9365 35.0309 34.5438 35.1113 34.1108 35.1113C33.7459 35.1113 33.3965 35.0495 33.0625 34.9258C32.7285 34.8021 32.4378 34.6506 32.1904 34.4712V33.2002C32.4626 33.3981 32.7625 33.5651 33.0903 33.7012C33.4181 33.8372 33.7676 33.9053 34.1387 33.9053C34.3984 33.9053 34.6211 33.8558 34.8066 33.7568C34.9922 33.6517 35.085 33.4971 35.085 33.293C35.085 33.1322 35.0076 33.0023 34.853 32.9033C34.7046 32.7982 34.5407 32.7116 34.3613 32.6436L33.4058 32.2725C32.9233 32.0869 32.5955 31.8457 32.4224 31.5488C32.2554 31.2458 32.1719 30.9118 32.1719 30.5469C32.1719 30.1696 32.2739 29.8418 32.478 29.5635C32.6883 29.279 32.9604 29.0594 33.2944 28.9048C33.6284 28.744 33.9902 28.6636 34.3799 28.6636Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

Logo.defaultProps = {
  className: "Nav__Logo",
  size: 48,
};

export default Logo;