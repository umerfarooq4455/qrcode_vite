import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useApiContext } from "../../../../contextapi/contextApi";
import Custumeframe from "../../../../Custumeframe";
import QRCodeStyling from "../../../../core/QRCodeStyling";
import { Options as OriginalOptions } from "../../../../types/index";
type Options = OriginalOptions & {
  customStyle?: { container?: React.CSSProperties };
};

interface QrcodestProps {
  qrUrls: any[];
}

const Qrcodelist = ({ qrUrls }: QrcodestProps) => {
  const {
    shapstyle,
    errorcorection,
    setQRCode,
    frameid,
    selectedFilelog,
    pattengradientType,
    isToggleButtonActive,
    pattrencolor1,
    pattrencolor2,
    pattencolorrange,
    pattrenbgcolor1,
    pattrenbgcolor2,
    isToggleButtonActive1,
    pattenbgrange,
    cornershapid,
    cornersSquarecolor1,
    cornersSquarecolor2,
    cornersSquaregradientType,
    cornersSquarecolorrange,
    pattrenframeid,
    istoggelcorner,
    centerstyleid,
    centerstylecolor1,
    centerstylecolor2,
    centerstylegradientType,
    centerstylerange,
    istoggelcenterstyle,
    websiteUrl,
    webbackendurl,
  } = useApiContext();

  const qrcodeRef = useRef<QRCodeStyling | null>(null);
  const weburl = localStorage.getItem("weburl");
  const navigate = useNavigate();
  useEffect(() => {
    const removeExistingQRCode = () => {
      const existingQRCode = document.getElementById("canvas");
      if (existingQRCode) {
        existingQRCode.innerHTML = "";
      }
    };

    const getCorrectionLevel = (errorCorrection: string) => {
      switch (errorcorection) {
        case 0:
          return "Q";
        case 1:
          return "H";
        case 2:
          return "M";
        case 3:
          return "L";
        default:
          return "Q";
      }
    };

    const getPattrendShapes = (pattrenframeid: any) => {
      switch (pattrenframeid) {
        case 1:
          return "square";
        case 2:
          return "rounded";
        case 3:
          return "extra-rounded";
        case 4:
          return "dots";
        case 5:
          return "classy";
        case 6:
          return "classy-rounded";
        case 7:
          return "star";
        case 8:
          return "starround";
        case 9:
          return "cross";
        case 10:
          return "heart";
        case 11:
          return "snake";
      }
    };

    const getCornersShapes = (cornershapid: any) => {
      switch (cornershapid) {
        case 1:
          return "square";
        case 2:
          return "dot";
        case 3:
          return "extra-rounded";
        // case 4:
        //   return "dots";
        // case 5:
        //   return "classy";
        // case 6:
        //   return "classy-rounded";
        // case 7:
        //   return "star";
        // case 8:
        //   return "starround";
        // case 9:
        //   return "cross";
        // case 10:
        //   return "heart";
        // case 11:
        //   return "snake";
      }
    };

    const getCenterstyle = (centerstyleid: any) => {
      switch (centerstyleid) {
        case 1:
          return "square";
        case 2:
          return "dot";
        // case 3:
        //   return "extra-rounded";
        // case 4:
        //   return "dots";
        // case 5:
        //   return "classy";
        // case 6:
        //   return "classy-rounded";
        // case 7:
        //   return "star";
        // case 8:
        //   return "starround";
        // case 9:
        //   return "cross";
        // case 10:
        //   return "heart";
        // case 11:
        //   return "snake";
      }
    };

    if (Array.isArray(qrUrls)) {
      qrUrls.forEach((item: any) => {
        console.log("item", item);

        const options: Options = {
          height: 100,
          width: 100,
          data: item.qr_url,
          image: selectedFilelog,
          dotsOptions: {
            type: getPattrendShapes(pattrenframeid),
            color: isToggleButtonActive ? false : pattrencolor1,
            gradient: isToggleButtonActive
              ? {
                  type: pattengradientType,
                  rotation: pattencolorrange,
                  colorStops: [
                    { offset: 0, color: pattrencolor1 },
                    { offset: 1, color: pattrencolor2 },
                  ],
                }
              : undefined,
          },
          backgroundOptions: {
            color: isToggleButtonActive1 ? false : pattrenbgcolor1,
            gradient: isToggleButtonActive1
              ? {
                  type: pattengradientType,
                  rotation: pattenbgrange,
                  colorStops: [
                    { offset: 0, color: pattrenbgcolor1 },
                    { offset: 1, color: pattrenbgcolor2 },
                  ],
                }
              : undefined,
          },
          qrOptions: {
            errorCorrectionLevel: getCorrectionLevel(errorcorection),
          },
          cornersSquareOptions: {
            type: getCornersShapes(cornershapid),
            color: istoggelcorner ? false : cornersSquarecolor1,
            gradient: istoggelcorner
              ? {
                  type: cornersSquaregradientType,
                  rotation: cornersSquarecolorrange,
                  colorStops: [
                    { offset: 0, color: cornersSquarecolor1 },
                    { offset: 1, color: cornersSquarecolor2 },
                  ],
                }
              : undefined,
          },
          cornersDotOptions: {
            type: getCenterstyle(centerstyleid),
            color: istoggelcenterstyle ? false : centerstylecolor1,
            gradient: istoggelcenterstyle
              ? {
                  type: centerstylegradientType,
                  rotation: centerstylerange,
                  colorStops: [
                    { offset: 0, color: centerstylecolor1 },
                    { offset: 1, color: centerstylecolor2 },
                  ],
                }
              : undefined,
          },
          imageOptions: {
            crossOrigin: "anonymous",
            margin: 3,
          },
          customStyle: {
            container: {
              position: "relative",
            },
          },
        };

        const qrCode = new QRCodeStyling(options);
        qrCode.append(document.getElementById("canvas"));
        qrcodeRef.current = qrCode;
        removeExistingQRCode();

        if (frameid) {
          const qrCode = new QRCodeStyling(options);
          qrCode.append(document.getElementById("canvas"));
          qrcodeRef.current = qrCode;
          setQRCode(qrcodeRef.current);
        } else {
          const qrCode = new QRCodeStyling(options);
          qrCode.append(document.getElementById("canvas"));
          qrcodeRef.current = qrCode;
          setQRCode(qrcodeRef.current);
        }
      });
    } else {
      console.error("qrUrls is not an array.");
    }
  }, [
    frameid,
    errorcorection,
    selectedFilelog,
    shapstyle,
    pattrencolor1,
    pattengradientType,
    pattrencolor2,
    pattencolorrange,
    isToggleButtonActive,
    pattrenbgcolor1,
    pattrenbgcolor2,
    pattenbgrange,
    isToggleButtonActive1,
    cornersSquarecolor1,
    cornersSquarecolor2,
    cornersSquaregradientType,
    cornersSquarecolorrange,
    cornershapid,
    istoggelcorner,
    centerstyleid,
    centerstylecolor1,
    centerstylecolor2,
    centerstylegradientType,
    centerstylerange,
    istoggelcenterstyle,
  ]);

  return (
    <>
      <div>
        {qrUrls ? (
          qrUrls.map((item) => <div id="canvas" key={item.id}></div>)
        ) : (
          <p>Loading...</p>
        )}
        <Custumeframe />
      </div>
    </>
  );
};

export default Qrcodelist;
