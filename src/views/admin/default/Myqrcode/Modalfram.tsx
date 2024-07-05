import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Color from "color";
import { useApiContext } from "../../../../contextapi/contextApi";

const Modalfram = ({ farmeid, framtext, fmcolors }: any) => {
  const { qrcodelist } = useApiContext();
  const svgRef = useRef<SVGSVGElement | null>(null);

  useMemo(() => {
    if (qrcodelist && svgRef.current) {
      const foreignObject = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "foreignObject"
      );
      if (farmeid == 4) {
        foreignObject.setAttribute("width", "80%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.setAttribute("x", "10%");
        foreignObject.setAttribute("y", "20%");
      } else if (farmeid == 13) {
        foreignObject.setAttribute("width", "85%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.setAttribute("x", "7%");
        foreignObject.setAttribute("y", "18%");
      } else if (farmeid == 15) {
        foreignObject.setAttribute("width", "90%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.setAttribute("x", "4.5%");
        foreignObject.setAttribute("y", "19%");
      } else if (farmeid == 16) {
        foreignObject.setAttribute("width", "65%");
        foreignObject.setAttribute("height", "50%");
        foreignObject.setAttribute("x", "17.5%");
        foreignObject.setAttribute("y", "9%");
      } else if (farmeid == 17) {
        foreignObject.setAttribute("width", "65%");
        foreignObject.setAttribute("height", "80%");
        foreignObject.setAttribute("x", "17.5%");
        foreignObject.setAttribute("y", "-4%");
      } else if (farmeid == 18) {
        foreignObject.setAttribute("width", "55%");
        foreignObject.setAttribute("height", "80%");
        foreignObject.setAttribute("x", "-2.5%");
        foreignObject.setAttribute("y", "0%");
      } else if (farmeid == 19) {
        foreignObject.setAttribute("width", "70%");
        foreignObject.setAttribute("height", "80%");
        foreignObject.setAttribute("x", "15.5%");
        foreignObject.setAttribute("y", "35%");
      } else if (farmeid == 20) {
        foreignObject.setAttribute("width", "65%");
        foreignObject.setAttribute("height", "80%");
        foreignObject.setAttribute("x", "18%");
        foreignObject.setAttribute("y", "48.5%");
      } else if (farmeid == 21) {
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.setAttribute("x", "0%");
        foreignObject.setAttribute("y", "20%");
      } else if (farmeid == 22) {
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.setAttribute("x", "5.5%");
        foreignObject.setAttribute("y", "11%");
      } else if (farmeid == 23) {
        foreignObject.setAttribute("width", "38%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.setAttribute("x", "20.5%");
        foreignObject.setAttribute("y", "41%");
      } else {
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");
      }

      svgRef.current.appendChild(foreignObject);
      qrcodelist.append(foreignObject);
    }
  }, [qrcodelist, farmeid]);

  useMemo(() => {
    if (framtext && fmcolors?.textColor && svgRef.current) {
      const textElement = svgRef.current.querySelector("#customText");
      if (textElement) {
        textElement.textContent = framtext;
      }
    }
  }, [fmcolors]);

  const getFontSize = () => {
    const length = framtext.length;
    if (length <= 10) {
      return "6px";
    } else {
      return "3px";
    }
  };
  const getprblem2 = () => {
    const length = framtext.length;
    if (length <= 10) {
      return "27px";
    } else {
      return "5px";
    }
  };
  const renderGradient = () => {
    const colorStops = fmcolors?.color?.colorStops;
    if (colorStops && colorStops.length === 2) {
      const firstColor = colorStops[0]?.color;
      const secondColor = colorStops[1]?.color;

      if (secondColor === "#0000") {
        return null;
      }
      if (fmcolors?.color?.type === "linear") {
        return (
          <linearGradient
            id="linear-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: firstColor }} />
            <stop offset="100%" style={{ stopColor: secondColor }} />
          </linearGradient>
        );
      } else if (fmcolors?.color?.type === "radial") {
        return (
          <radialGradient id="radial-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: firstColor }} />
            <stop offset="100%" style={{ stopColor: secondColor }} />
          </radialGradient>
        );
      }
    }
    return null;
  };
  const renderGradientbg = () => {
    const bgStops = fmcolors?.backgroundColor?.backgroundColorStops;
    if (bgStops && bgStops.length === 2) {
      const firstBgColor = bgStops[0]?.backgroundColor;
      const secondBgColor = bgStops[1]?.backgroundColor;

      if (secondBgColor === "#0000") {
        return null; // Show solid background color
      }

      // Check the type of gradient (linear/radial) and return accordingly
      if (fmcolors?.backgroundColor?.type === "linear") {
        return (
          <linearGradient
            id="linear-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: firstBgColor }} />
            <stop offset="100%" style={{ stopColor: secondBgColor }} />
          </linearGradient>
        );
      } else if (fmcolors?.backgroundColor?.type === "radial") {
        return (
          <radialGradient id="radial-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: firstBgColor }} />
            <stop offset="100%" style={{ stopColor: secondBgColor }} />
          </radialGradient>
        );
      }
    }
    return null;
  };
  const calculateRotatedColor3 = () => {
    const rotatedColor = Color(
      fmcolors?.backgroundColor?.backgroundColorStops[0]?.backgroundColor
    )
      .alpha(0.5)
      .lighten(0.5);
    return rotatedColor.hex();
  };
  const calculateRotatedColor4 = () => {
    const rotatedColor = Color(
      fmcolors?.backgroundColor?.backgroundColorStops[1]?.backgroundColor
    ).rotate(fmcolors?.backgroundColor?.rotation);
    return rotatedColor.hex();
  };

  return (
    <>
      {farmeid == 0 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          id="canvas"
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
            }}
          >
            {renderGradient()}
          </svg>
        </div>
      )}
      {farmeid == 1 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="0.5"
              width="61"
              height="79"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              x="1"
              y="64"
              width="60"
              height="15"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="74"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}
      {farmeid == 2 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="0.5"
              width="61"
              height="58"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              y="62"
              width="62"
              height="18"
              rx="3"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="74"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 3 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <rect x="0.5" y="0.5" width="61" height="58" rx="2.5" fill="none" />
            <text
              x="31"
              y="70"
              fontFamily="Arial"
              fill="#000"
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 4 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
            viewBox="0 0 366 585"
            style={{ width: "100%", height: "100%" }}
          >
            {" "}
            {renderGradient()}
            <g
              id="Group_11962"
              data-name="Group 11962"
              transform="translate(4349.995 316.319)"
            >
              <path
                fill={`url(#${
                  fmcolors?.color?.type
                    ? `${fmcolors?.color?.type}-gradient`
                    : "linear-gradient"
                })`}
                id="Subtraction_2"
                data-name="Subtraction 2"
                d="M-3999-316.319h-336a14.993,14.993,0,0,0-15,15v555a15,15,0,0,0,15,15h336a15.005,15.005,0,0,0,15-15v-555A15,15,0,0,0-3999-316.319Zm-168,15a14.758,14.758,0,0,1,15,14.5,14.764,14.764,0,0,1-15,14.5,14.758,14.758,0,0,1-15-14.5A14.751,14.751,0,0,1-4167-301.319Zm-41.81,45.19a7.507,7.507,0,0,1,5.31-2.19h73a7.5,7.5,0,0,1,7.5,7.5,7.467,7.467,0,0,1-2.2,5.3,7.468,7.468,0,0,1-5.3,2.2h-73a7.5,7.5,0,0,1-7.5-7.5A7.508,7.508,0,0,1-4208.805-256.129Zm41.81,510.81a29,29,0,0,1-29-29,29,29,0,0,1,29-29,29,29,0,0,1,29,29A29.008,29.008,0,0,1-4167,254.681Zm168-88a15.018,15.018,0,0,1-15,15h-306a15.005,15.005,0,0,1-15-15v-381a14.993,14.993,0,0,1,15-15h306a15.005,15.005,0,0,1,15,15Z"
              />
              <g id="Ellipse_555" data-name="Ellipse 555">
                <path
                  id="Path_17397"
                  data-name="Path 17397"
                  d="M-4167,203.681a22.013,22.013,0,0,0-22,22,22.02,22.02,0,0,0,22,22,22.026,22.026,0,0,0,22-22A22.02,22.02,0,0,0-4167,203.681Zm0,41a19.024,19.024,0,0,1-19-19,19.017,19.017,0,0,1,19-19,19.023,19.023,0,0,1,19,19A19.03,19.03,0,0,1-4167,244.681Z"
                />
              </g>
            </g>
            <text
              x="190"
              y="480"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getprblem2() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 5 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="0.5"
              width="61"
              height="58"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              y="62"
              width="62"
              height="18"
              rx="3"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="39"
              y="73"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
            <path
              d="M10.8337 72.7513L13.8612 71.0013L10.8337 69.2513V72.7513ZM17.577 68.1838C17.6528 68.458 17.7053 68.8255 17.7403 69.2921C17.7812 69.7588 17.7987 70.1613 17.7987 70.5113L17.8337 71.0013C17.8337 72.2788 17.7403 73.218 17.577 73.8188C17.4312 74.3438 17.0928 74.6821 16.5678 74.828C16.2937 74.9038 15.792 74.9563 15.022 74.9913C14.2637 75.0321 13.5695 75.0496 12.9278 75.0496L12.0003 75.0846C9.55616 75.0846 8.03366 74.9913 7.43283 74.828C6.90783 74.6821 6.56949 74.3438 6.42366 73.8188C6.34783 73.5446 6.29533 73.1771 6.26033 72.7105C6.21949 72.2438 6.20199 71.8413 6.20199 71.4913L6.16699 71.0013C6.16699 69.7238 6.26033 68.7846 6.42366 68.1838C6.56949 67.6588 6.90783 67.3205 7.43283 67.1746C7.70699 67.0988 8.20866 67.0463 8.97866 67.0113C9.73699 66.9705 10.4312 66.953 11.0728 66.953L12.0003 66.918C14.4445 66.918 15.967 67.0113 16.5678 67.1746C17.0928 67.3205 17.4312 67.6588 17.577 68.1838Z"
              fill="white"
            />
          </svg>
        </div>
      )}

      {farmeid == 6 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="0.5"
              width="61"
              height="79"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="70"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 7 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect x="0.5" y="0.5" width="61" height="58" rx="2.5" />
            <rect
              y="62"
              width="62"
              height="18"
              rx="3"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="73"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 8 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="0.5"
              width="61"
              height="79"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              x="1"
              y="64"
              width="60"
              height="15"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M31 57L35.3301 64.5H26.6699L31 57Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="73"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 9 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 4C1.33333 4 4 3.2 4 0H58C58 1.33333 58.8 4 62 4V76C60.6667 76 58 76.8 58 80H4C4 78.6667 3.2 76 0 76V4ZM9 6C7.34315 6 6 7.34315 6 9V53C6 54.6569 7.34315 56 9 56H53C54.6569 56 56 54.6569 56 53V9C56 7.34315 54.6569 6 53 6H9Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="73"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 10 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="0.5"
              width="61"
              height="79"
              rx="3.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <line
              x1="1"
              y1="58.5"
              x2="61"
              y2="58.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="71"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 11 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <path
              d="M4.77953 81L1.47244 77.7059C1.31496 54.6471 1 7.77647 1 4.76471C1 1.75294 3.51969 1 4.77953 1H57.2205C60.2441 1 61 3.5098 61 4.76471V77.7059L57.6929 81L54.3858 77.7059L51.0787 81L47.7717 77.7059L44.4646 81L41.1575 77.7059L37.8504 81L34.5433 77.7059L31.2362 81L27.9291 77.7059L24.622 81L21.315 77.7059L18.0079 81L14.7008 77.7059L11.3937 81L8.08661 77.7059L4.77953 81Z"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
              strokeWidth="1.2"
            />
            <text
              x="31"
              y="71"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 12 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="0.5"
              width="61"
              height="58"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              y="66"
              width="62"
              height="14"
              rx="3"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M31 60L34.4641 66H27.5359L31 60Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="75"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 13 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 64 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.21709 13.2783C2.43566 12.0215 3.49577 9.50781 5.98758 9.50781H56.8072C58.0641 9.56246 60.5777 10.3931 60.5777 13.2783C60.5777 16.1636 62.2171 56.557 63.0368 76.3931C62.7089 77.5953 61.5286 79.9996 59.4302 79.9996H3.69249C2.49031 79.781 0.0859375 78.7537 0.0859375 76.3931C0.0859375 74.0324 1.5067 33.333 2.21709 13.2783ZM9.67599 12.1328C6.91457 12.1328 4.67599 14.3714 4.67599 17.1328V60.9033C4.67599 63.6647 6.91457 65.9033 9.67599 65.9033H53.1186C55.88 65.9033 58.1186 63.6647 58.1186 60.9033V17.1328C58.1186 14.3714 55.88 12.1328 53.1186 12.1328H9.67599Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M17.1351 15.4098H22.0532V0L17.1351 4.7541V15.4098Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M45.9874 15.4098H41.0694V0L45.9874 4.7541V15.4098Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              x="22.0532"
              width="19.0164"
              height="4.59016"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="75"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 14 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect x="0.5" y="0.5" width="61" height="58" rx="2.5" fill="none" />
            <text
              x="31"
              y="74"
              fontFamily="Birthstone"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 15 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="11.5"
              width="61"
              height="79"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              x="1"
              y="75"
              width="60"
              height="15"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M1.15622 17.0634C2.29751 17.8761 4.24831 18.2819 6.90217 18.2819C10.936 18.2819 16.5509 16.7846 24.1363 14.9121V14.6391C23.1019 13.4267 22.3996 11.9788 22.3996 10.4242C22.3996 9.01828 22.8623 7.70056 23.7477 6.56443C21.8642 4.80484 11.379 -4.35318 0.000801625 2.52732V15.1465C0.000801625 15.2579 -0.0674828 16.1921 1.15622 17.0634ZM1.75718 14.12C4.55183 12.487 11.0008 10.1404 21.6512 13.9551C2.26793 19.8709 1.65205 15.2305 1.75718 14.12Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M38.2519 6.56439C39.1374 7.70042 39.6001 9.01824 39.6001 10.4242C39.6001 11.9792 38.8978 13.4271 37.8634 14.639V14.912C45.449 16.7846 51.0638 18.2819 55.0975 18.2819C57.7511 18.2819 59.7019 17.8761 60.8437 17.0633C62.0673 16.1921 61.999 15.2579 61.999 15.1464V2.52729C50.6207 -4.35322 40.1355 4.80481 38.2519 6.56439ZM40.3485 13.9551C50.999 10.1402 57.4481 12.487 60.2425 14.12C60.3477 15.2304 59.732 19.8708 40.3485 13.9551Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M30.9991 16.7047C35.7521 16.7047 39.6188 13.8875 39.6188 10.4247C39.6188 6.96177 35.7521 4.14453 30.9991 4.14453C26.2461 4.14453 22.3793 6.96188 22.3793 10.4247C22.3793 13.8875 26.2463 16.7047 30.9991 16.7047Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="85"
              fontFamily="Birthstone"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 16 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 65 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <text
              x="31"
              y="70"
              fontFamily="Birthstone"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
            <path
              d="M1.08424 79.5493C0.840284 79.5493 0.596331 79.5493 0.352377 79.2816L0.108424 79.014C-0.13553 78.4788 0.108424 30.8429 0.108424 30.3077C0.108424 30.04 0.108424 29.7724 0.352377 29.5048C0.596331 29.2372 10.8424 19.603 11.0863 19.3354C10.5984 3.27831 10.8424 8.63066 23.284 7.82781C34.5058 -2.60927 30.8465 -2.60927 41.8244 7.82781C54.2661 8.63066 54.51 3.54593 54.0221 19.3354C54.2661 19.603 64.5121 29.2372 64.756 29.5048C65 29.7724 65 30.04 65 30.3077C65 30.5753 65 78.4788 65 78.7464C65 79.2816 64.5121 79.8169 64.0242 79.8169C63.5363 79.8169 1.32819 79.5493 1.08424 79.5493ZM4.49958 76.8731H60.3649L38.1651 55.7313C32.3103 61.8865 32.3103 61.6189 26.6993 55.7313L4.49958 76.8731ZM39.8728 54.1256L62.0726 75.2674V32.9838C55.2419 39.6743 47.4354 47.1676 39.8728 54.1256ZM2.304 32.9838V75.2674L24.5038 54.1256L2.304 32.9838ZM30.6026 56.2665L32.3103 57.8722C37.6772 52.7875 45.7277 45.2942 51.3386 39.6743V10.2364H13.2819V39.9419C18.4049 44.759 25.7235 51.7171 30.6026 56.2665ZM53.7781 22.5468V37.2657L61.5847 29.7724L53.7781 22.5468ZM3.03586 30.04L10.8424 37.5333V22.5468L3.03586 30.04ZM26.6993 7.56019H37.9212L32.3103 2.20784L26.6993 7.56019Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
          </svg>
        </div>
      )}

      {farmeid == 17 && (
        <div
          className="flex  items-center justify-center rounded-lg "
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 71 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="16.5"
              y="0.5"
              width="38"
              height="79"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.62805 43.2188H0L6.40941 38.535L0.739547 33.3581H14.7909L8.62805 38.0419V43.2188Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.122 43.2188H70.75L64.3406 38.535L70.0105 33.3581H55.9591L62.122 38.0419V43.2188Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6002 37.5469L16.27 33.1096V37.5469H10.6002Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.61411 48.8867H61.1359V38.5331H9.61411V48.8867Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.1489 37.5469L54.479 33.1096V37.5469H60.1489Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="35"
              y="45"
              fontFamily="arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 18 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <path
              d="M49.0506 49.3699C49.1814 47.2986 48.8217 46.7397 47.9715 45.0301C47.8898 44.8493 41.5949 39.8027 41.4968 39.6055C41.0554 38.7507 49.0506 42.8603 49.0506 42.8603C49.0506 42.8603 49.9172 42.7452 50.1297 41.7753C50.4404 40.3123 50.1297 36.5644 50.1297 35.2658C50.1297 33.7863 49.0506 34.1808 49.0506 34.1808C49.0506 34.1808 43.9167 36.7945 43.6551 36.3507C43.8186 36.5973 40.336 34 40.336 34L31.7684 34.1808V36.3507C31.7684 36.3507 35.8397 36.4329 38.2431 36.3507C37.8507 36.3671 40.6466 43.7479 40.4014 49.3863C40.0907 56.6356 32.8476 56.9808 32.8476 56.9808H25.2938C25.2938 56.9808 33.0274 39.737 25.2938 39.8192C16.0723 39.9178 9.74474 39.8192 9.74474 39.8192V43.7315H25.2938V45.6877H9.72837C9.72837 45.6877 7.83177 46.9041 6.91615 48.3014C5.88609 49.8466 5.83702 51.5562 5.83702 51.5562H3.89136L4.202 47.611L0 53.5123L4.75793 53.726L2.59966 62.4055C2.59966 62.4055 4.05485 62.4055 6.40928 62.4219C6.68723 66.3507 9.95729 69.4575 13.9467 69.4575C17.9198 69.4575 21.1735 66.3836 21.4842 62.4548C30.1334 62.4712 38.6355 62.4712 39.3386 62.389C40.7774 62.2411 46.0749 50.4384 49.0506 49.3699ZM13.9467 66.4164C9.95729 66.4164 9.41774 61.863 9.41774 61.863H18.4921C18.4757 61.863 18.0997 66.4164 13.9467 66.4164ZM52.8439 55.8959C48.9689 55.8959 45.8133 59.0521 45.8133 62.9479C45.8133 66.8438 48.9525 70 52.8439 70C56.7189 70 59.8581 66.8438 59.8581 62.9479C59.8581 59.0521 56.7189 55.8959 52.8439 55.8959ZM52.8439 67.0411C50.5876 67.0411 48.7727 65.2164 48.7727 62.9479C48.7727 60.6795 50.6039 58.8548 52.8439 58.8548C55.1002 58.8548 56.9151 60.6795 56.9151 62.9479C56.9151 65.2 55.0839 67.0411 52.8439 67.0411ZM52.288 50.4548C45.6988 50.4219 42.5759 60.2192 42.5759 60.2192H44.7342C44.7342 60.2192 45.5844 56.1425 52.288 54.7945C58.1413 53.6274 60.9209 60.2192 60.9209 60.2192L62 58.0493C62 58.0658 61.4441 50.5041 52.288 50.4548Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              x="0.5"
              y="0.5"
              width="30"
              height="39"
              rx="3.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M1 29H31V36C31 37.6569 29.6569 39 28 39H4C2.34315 39 1 37.6569 1 36V29Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="15"
              y="35"
              fontFamily="arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 19 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <ellipse
              cx="46.8195"
              cy="18.5187"
              rx="1.03044"
              ry="1.03044"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <ellipse
              cx="53.0023"
              cy="20.765"
              rx="0.843091"
              ry="0.843091"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <ellipse
              cx="13.2835"
              cy="21.7025"
              rx="0.843091"
              ry="0.843091"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <ellipse
              cx="56.3743"
              cy="18.7064"
              rx="0.843091"
              ry="0.843091"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M23.6811 25.8243L19.2783 15.9883H23.4001L28.2713 26.0117L23.6811 25.8243Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              x="4.38379"
              y="17.8633"
              width="6.93208"
              height="1.87354"
              rx="0.936768"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M15.5533 7.84809L18.1492 13.9274H22.5622C22.3891 13.575 21.42 11.4957 18.928 5.99786C16.436 0.500052 12.7845 0.6234 11.2703 1.3723C10.4482 1.90094 8.28503 3.30182 6.20831 4.67627C5.16997 6.79081 6.90053 7.67188 7.8956 7.84809C8.5013 7.45161 10.154 6.42078 11.9192 5.46923C13.6843 4.51769 15.0774 6.65866 15.5533 7.84809Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.0022 16.9388L5.2602 77.6681C5.2602 77.6681 5.13471 80.8796 8.47164 80.8796H54.2295C54.2295 80.8796 56.7171 81.133 56.7171 78.3924C56.7171 75.6519 61.2799 16.9433 61.2799 16.9433C61.2799 16.9433 61.6586 13.8573 58.1962 13.8573H3.86851C3.86851 13.8573 0.908074 13.6734 1.0022 16.9388ZM3.81078 22.1548L3.33612 17.2725C3.27898 16.6848 3.7409 16.1758 4.33143 16.1758H58.0806C58.6609 16.1758 59.1194 16.6682 59.078 17.247L58.6894 22.6886C58.6413 23.3613 57.9432 23.8295 57.2812 23.7006C54.6248 23.1833 49.2124 22.8139 44.1663 24.0446C31.4159 27.4495 14.0493 24.5924 4.81077 23.0725H4.81077L4.64159 23.0447C4.19405 22.9711 3.85467 22.6062 3.81078 22.1548ZM51.5851 29.8516H10.5547V68.4464H51.5851V29.8516Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="30"
              y="76"
              fontFamily="arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 20 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 47 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4516 15.7535C16.4516 15.7535 20.4764 11.7287 16.4516 8.37577C12.4268 5.02286 16.1124 1.00457 17.7888 0C17.7888 0 15.1078 3.35292 19.4718 8.37577C23.8358 13.3986 16.4516 15.7535 16.4516 15.7535Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.8601 15.7535C27.8601 15.7535 31.8914 11.7287 27.8601 8.37577C23.8287 5.02286 27.5274 1.00457 29.2038 0C29.2038 0 26.5228 3.35292 30.8868 8.37577C35.2508 13.3986 27.8601 15.7535 27.8601 15.7535Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.35254 31.5195H43.6398L39.8433 76.4186C39.7684 77.1456 39.4296 77.8199 38.8911 78.314C38.3525 78.808 37.6516 79.0876 36.9209 79.0997H10.0519C9.32525 79.0827 8.62988 78.8008 8.09651 78.3071C7.56314 77.8133 7.22852 77.1418 7.15556 76.4186L3.35254 31.5195ZM4.84635 32.8242H42.1525L38.5451 76.099C38.505 76.5034 38.3171 76.8788 38.0174 77.1532C37.7177 77.4276 37.3272 77.5819 36.9209 77.5863H10.0519C9.6455 77.5819 9.25507 77.4276 8.95535 77.1532C8.65564 76.8788 8.46771 76.5034 8.42758 76.099L4.84635 32.8242Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.32169e-07 26.7193C-7.84881e-05 26.5446 0.034919 26.3717 0.102917 26.2108C0.170915 26.0499 0.270529 25.9043 0.395852 25.7826C0.521175 25.661 0.669655 25.5657 0.832486 25.5025C0.995317 25.4393 1.16918 25.4094 1.34378 25.4146H45.6558C46.0055 25.4145 46.3415 25.5507 46.5924 25.7943C46.8433 26.0379 46.9894 26.3697 46.9996 26.7193V31.5138C47.0041 31.6912 46.9724 31.8677 46.9064 32.0324C46.8403 32.1971 46.7414 32.3466 46.6156 32.4718C46.4898 32.597 46.3399 32.6952 46.1748 32.7604C46.0098 32.8256 45.8332 32.8565 45.6558 32.8511H1.34378C0.989035 32.8494 0.64921 32.7082 0.397757 32.4579C0.146304 32.2077 0.00342357 31.8686 1.32169e-07 31.5138V26.7193ZM1.48729 27.2607C1.48728 27.2105 1.49728 27.1607 1.5167 27.1144C1.53612 27.0681 1.56457 27.0261 1.6004 26.9908C1.63622 26.9556 1.67871 26.9279 1.72537 26.9093C1.77202 26.8906 1.82192 26.8815 1.87216 26.8824H45.1274C45.2278 26.8824 45.324 26.9222 45.395 26.9932C45.4659 27.0641 45.5058 27.1604 45.5058 27.2607V30.9724C45.5075 31.0229 45.499 31.0732 45.4807 31.1202C45.4624 31.1673 45.4347 31.2102 45.3993 31.2462C45.3639 31.2822 45.3216 31.3106 45.2748 31.3297C45.2281 31.3488 45.1779 31.3582 45.1274 31.3573H1.87216C1.82137 31.3582 1.77093 31.3488 1.72383 31.3298C1.67674 31.3108 1.63396 31.2824 1.59804 31.2465C1.56213 31.2106 1.53381 31.1678 1.51478 31.1207C1.49576 31.0736 1.4864 31.0232 1.48729 30.9724V27.2607Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.62057 20.7031C3.74999 20.3357 3.98612 20.0152 4.29872 19.7828C4.61133 19.5504 4.98619 19.4166 5.3753 19.3984H41.2855C41.6758 19.4158 42.0531 19.544 42.3731 19.7681C42.6932 19.9923 42.9427 20.303 43.0924 20.6639L44.8667 25.5955C44.9423 25.7383 44.9772 25.8993 44.9674 26.0606C44.9577 26.222 44.9037 26.3776 44.8114 26.5103C44.7191 26.643 44.592 26.7478 44.4442 26.8131C44.2963 26.8784 44.1333 26.9017 43.973 26.8805H3.02043C2.85816 26.8975 2.6943 26.8712 2.54543 26.8045C2.39656 26.7378 2.26795 26.6329 2.17262 26.5005C2.07729 26.3681 2.01863 26.2128 2.00255 26.0505C1.98648 25.8881 2.01357 25.7244 2.08109 25.5759L3.62057 20.7031ZM5.10133 21.2575C5.1421 21.1571 5.21141 21.0709 5.30068 21.0094C5.38995 20.948 5.49527 20.9141 5.60361 20.9118H41.0245C41.1359 20.9154 41.244 20.9495 41.3372 21.0105C41.4304 21.0715 41.5051 21.157 41.5529 21.2575L43.125 25.0345C43.1466 25.0715 43.1576 25.1138 43.1569 25.1567C43.1561 25.1996 43.1436 25.2415 43.1208 25.2778C43.0979 25.3141 43.0656 25.3434 43.0272 25.3626C42.9889 25.3818 42.946 25.3902 42.9032 25.3867H4.09676C4.05325 25.3901 4.0096 25.3823 3.97 25.364C3.93039 25.3456 3.89617 25.3174 3.87062 25.2821C3.84507 25.2467 3.82905 25.2053 3.8241 25.162C3.81915 25.1186 3.82543 25.0747 3.84235 25.0345L5.10133 21.2575Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />

            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.6398 39.5625H3.35254L5.03552 65.8249H41.9633L43.6398 39.5625ZM36 42H11V64H36V42Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="23"
              y="73"
              fontFamily="arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 21 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 54 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <rect
              x="0.5"
              y="13.5"
              width="52.7368"
              height="68.3378"
              rx="2.5"
              stroke={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <rect
              x="0.866211"
              y="68.4727"
              width="52.0034"
              height="13.0008"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M16.1823 18.8426H37.5904C37.8659 18.8508 38.1401 18.8027 38.3965 18.7014C38.6528 18.6001 38.8857 18.4476 39.0811 18.2532C39.3595 17.8863 39.56 17.4665 39.6703 17.0193C39.7806 16.5722 39.7984 16.1073 39.7225 15.653C39.7225 15.5057 39.7225 15.3583 39.7225 15.211V11.0074C39.7225 10.8393 39.6893 10.6729 39.6247 10.5178C39.5601 10.3627 39.4655 10.2218 39.3463 10.1034C39.2271 9.98497 39.0856 9.8913 38.93 9.82778C38.7744 9.76427 38.6078 9.73216 38.4398 9.7333H33.4734C33.6947 8.88398 33.8112 8.01076 33.8201 7.13313C33.827 6.20104 33.6497 5.27677 33.2986 4.41333C32.9474 3.5499 32.4292 2.76429 31.7738 2.10157C31.1183 1.43885 30.3384 0.912065 29.4789 0.551428C28.6194 0.19079 27.6971 0.00339752 26.765 0C24.8588 0.038428 23.0432 0.820409 21.7056 2.17903C20.3681 3.53765 19.6145 5.36528 19.6059 7.27181C19.6035 8.10241 19.7232 8.92885 19.9612 9.72463H15.1509C14.8107 9.72463 14.4844 9.85978 14.2439 10.1003C14.0033 10.3409 13.8682 10.6672 13.8682 11.0074V15.2023C13.8682 16.1991 13.8682 18.8426 16.1823 18.8426ZM26.6783 3.65757C27.3339 3.65586 27.9752 3.8488 28.521 4.21194C29.0668 4.57509 29.4925 5.09209 29.7442 5.69742C29.9958 6.30276 30.0621 6.96918 29.9347 7.61224C29.8072 8.25529 29.4917 8.84603 29.0281 9.30959C28.5646 9.77314 27.9738 10.0887 27.3308 10.2161C26.6877 10.3436 26.0213 10.2773 25.416 10.0256C24.8106 9.77397 24.2936 9.34827 23.9305 8.80247C23.5673 8.25667 23.3744 7.61535 23.3761 6.95979C23.3784 6.08469 23.727 5.24608 24.3458 4.62729C24.9646 4.0085 25.8032 3.65986 26.6783 3.65757Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="26"
              y="78"
              fontFamily="Arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 22 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 62 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.7753 9.39453H4.95508V82.0013H58.7753C59.8799 82.0013 60.7753 81.1058 60.7753 80.0013V11.3945C60.7753 10.29 59.8799 9.39453 58.7753 9.39453ZM3.95508 8.39453V83.0013H58.7753C60.4322 83.0013 61.7753 81.6581 61.7753 80.0013V11.3945C61.7753 9.73768 60.4322 8.39453 58.7753 8.39453H3.95508Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M4.8877 68.0781H60.8428V80.0669C60.8428 81.1715 59.9473 82.0669 58.8428 82.0669H4.8877V68.0781Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M57.1044 0.0718999L5.82031 8.39326H59.9102V2.07519C59.4114 -0.0205595 57.8318 -0.133566 57.1044 0.0718999Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M0.224609 16.3208C0.224609 15.5482 0.850908 14.9219 1.62349 14.9219H7.21899C7.99157 14.9219 8.61787 15.5482 8.61787 16.3208C8.61787 17.0933 7.99157 17.7196 7.21899 17.7196H1.62349C0.850907 17.7196 0.224609 17.0933 0.224609 16.3208Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M0.224609 31.2426C0.224609 30.47 0.850908 29.8438 1.62349 29.8438H7.21899C7.99157 29.8438 8.61787 30.47 8.61787 31.2426C8.61787 32.0152 7.99157 32.6415 7.21899 32.6415H1.62349C0.850907 32.6415 0.224609 32.0152 0.224609 31.2426Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M0.224609 46.1645C0.224609 45.3919 0.850908 44.7656 1.62349 44.7656H7.21899C7.99157 44.7656 8.61787 45.3919 8.61787 46.1645C8.61787 46.9371 7.99157 47.5634 7.21899 47.5634H1.62349C0.850907 47.5634 0.224609 46.9371 0.224609 46.1645Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <path
              d="M0.224609 61.0825C0.224609 60.3099 0.850908 59.6836 1.62349 59.6836H7.21899C7.99157 59.6836 8.61787 60.3099 8.61787 61.0825C8.61787 61.855 7.99157 62.4813 7.21899 62.4813H1.62349C0.850907 62.4813 0.224609 61.855 0.224609 61.0825Z"
              fill={`url(#${
                fmcolors?.color?.type
                  ? `${fmcolors?.color?.type}-gradient`
                  : "linear-gradient"
              })`}
            />
            <text
              x="31"
              y="77"
              fontFamily="arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="0"
              style={{ fontSize: getFontSize() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}

      {farmeid == 23 && (
        <div
          className="flex  items-center justify-center rounded-lg"
          style={{
            background: renderGradientbg()
              ? `linear-gradient(to right, ${calculateRotatedColor3()}, ${calculateRotatedColor4()})`
              : fmcolors?.backgroundColor?.backgroundColorStops[0]
                  ?.backgroundColor,
          }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 572 594"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            {renderGradient()}
            <g clip-path="url(#clip0_1174_386)">
              <path
                d="M452.201 266.288H389.384C390.625 215.178 359.337 183.689 319.559 183.742H132.816C94.4928 183.742 63.458 214.684 63.458 252.993V524.632C63.458 562.941 94.5062 594.003 132.816 594.003H319.559C357.855 594.003 389.17 562.941 389.17 524.632V521.374C467.485 519.92 530.556 455.714 530.556 377.012V344.736C530.542 301.528 495.423 266.288 452.201 266.288ZM477.87 377.012C477.87 426.521 438.372 466.953 389.157 468.422V319.668H452.188C466.203 319.668 477.856 330.734 477.856 344.736L477.87 377.012Z"
                fill={`url(#${
                  fmcolors?.color?.type
                    ? `${fmcolors?.color?.type}-gradient`
                    : "linear-gradient"
                })`}
              />
              <path
                d="M229.204 149.155C238.12 155.896 250.107 146.886 246.41 136.341C242.232 124.448 234.316 111.847 221.275 100.287C191.295 73.7107 198.943 44.905 215.802 17.2073C221.982 7.06257 210.209 -4.6706 200.305 1.91012C179.882 15.4854 159.032 38.004 159.032 73.417C159.018 115.664 201.052 127.865 229.204 149.155Z"
                fill={`url(#${
                  fmcolors?.color?.type
                    ? `${fmcolors?.color?.type}-gradient`
                    : "linear-gradient"
                })`}
              />
              <path
                d="M137.701 149.834C144.015 154.6 152.491 148.219 149.875 140.771C146.912 132.361 141.319 123.445 132.095 115.276C110.898 96.4811 116.304 76.0982 128.224 56.5296C132.602 49.3482 124.273 41.0456 117.278 45.7041C102.822 55.3016 88.0723 71.2394 88.0723 96.2809C88.0723 126.154 117.799 134.777 137.701 149.834Z"
                fill={`url(#${
                  fmcolors?.color?.type
                    ? `${fmcolors?.color?.type}-gradient`
                    : "linear-gradient"
                })`}
              />
              <path
                d="M311.336 149.834C317.637 154.6 326.126 148.219 323.497 140.771C320.533 132.361 314.94 123.445 305.717 115.276C284.506 96.4811 289.912 76.0982 301.832 56.5296C306.211 49.3482 297.881 41.0456 290.887 45.7041C276.444 55.3016 261.681 71.2394 261.681 96.2809C261.694 126.154 291.421 134.777 311.336 149.834Z"
                fill={`url(#${
                  fmcolors?.color?.type
                    ? `${fmcolors?.color?.type}-gradient`
                    : "linear-gradient"
                })`}
              />
              <rect
                x="111.375"
                y="236.859"
                width="228.69"
                height="228.69"
                fill="white"
              />
              <rect
                x="129.938"
                y="255.422"
                width="191.565"
                height="191.565"
                fill="url(#pattern0)"
              />
            </g>
            <text
              x="225"
              y="520"
              fontFamily="arial"
              fill={fmcolors?.textColor}
              textAnchor="middle"
              letterSpacing="2"
              style={{ fontSize: getprblem2() }}
            >
              {framtext}
            </text>
          </svg>
        </div>
      )}
    </>
  );
};

export default Modalfram;
