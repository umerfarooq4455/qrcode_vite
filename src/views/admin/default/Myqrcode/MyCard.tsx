import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Checkbox from "../../../../components/checkbox";
import { GrFormEdit } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useApiContext } from "../../../../contextapi/contextApi";
import { Options as OriginalOptions } from "../../../../types";
import QRCodeStyling from "../../../../core/QRCodeStyling";
// import folder from "./myqrcodeimges/mingcute_folder-3-line.svg";
// import web from "./myqrcodeimges/mdi_web.svg";
// import conetnt from "./myqrcodeimges/eos-icons_content-modified.svg";
// import link from "./myqrcodeimges/ph_link-bold.svg";
import Listframe from "./Listframe";
import Modalfram from "./Modalfram";
import { Popover } from "react-tiny-popover";
import { toPng, toJpeg, toSvg, toCanvas } from "html-to-image";
import { HiOutlineDownload } from "react-icons/hi";
import Myqrcodeloader from "../../../../components/Skletionloaders/Myqrcodeloader";
import Menuedit from "./Menuedit";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ReactPaginate from "react-paginate";

type Options = OriginalOptions & {
  customStyle?: { container?: React.CSSProperties };
};

const MyCard = ({
  selectedFilter = "",
  dynamicType = [],
  staticType = [],
  sortby = "",
  selectStacti = [],
  searchInput = "",
}: any) => {
  const {
    viewMode,
    instance,
    togglePopovermenu,
    setQrlist,
    setFramdata,
    framlistid,
    setFramlistid,
    qrcodelist,
    setQrcodelist,
    modalqrcode,
    setModalqrcode,
    setViewMode,
    limit,
    selectedOptionssort,
    setSelectedOptionssort,
    selectedQrcodeIds,
    setSelectedQrcodeIds,
    selectedTypeIds,
    setSelectedTypeIds,
    typeOptions,
    qrcodeStatus,
  } = useApiContext();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [data, setData] = useState<any>([]);

  const qrcodeRef = useRef<QRCodeStyling | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  console.log("ref.current", ref.current);

  const tablechecked = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  const [isActive, setIsActive] = useState(false);
  const [selectedQrcode, setSelectedQrcode] = useState(null);
  const [selectedFramid, setSelectedFramid] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [modalDownlod, setModalDownlod] = useState(false);
  const [modalDownlodid, setModalDownlodid] = useState(false);
  const [modalCustumDownlod, setModalCustumDownlod] = useState(false);
  const [modalCustumDownlodid, setModalCustumDownlodid] = useState(false);
  const [fileType, setFileType] = useState("PNG");
  const [fileSize, setFileSize] = useState("512");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const prevDependencies = useRef({
    selectedFilter: "",
    limit: "",
    selectedOptionssort: "",
    selectedQrcodeIds: [],
    selectedTypeIds: [],
    selectStacti: [],
    searchInput: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let url = `user/qr_list/?page=${currentPage}&limit=${limit}&sort_by=${selectedOptionssort}`;

        if (selectedFilter !== "All") {
          url += `&filter=${selectedFilter.toLowerCase()}`;
        }

        if (selectedTypeIds.length > 0) {
          const selectedTypeNames = selectedTypeIds.map(
            (id: any) =>
              typeOptions.find((option: any) => option.id === id)?.name
          );
          url += `&types=${selectedTypeNames.join(",")}`;
        } else {
          if (selectedFilter === "Dynamic") {
            const typesToSend =
              selectedFilter === "Dynamic" ? dynamicType : staticType;
            const typeNames = typesToSend.map((option: any) => option.name);
            url += `&types=${typeNames.join(",")}`;
          } else if (selectStacti !== "") {
            const selectedStatic = selectStacti.map(
              (id: any) =>
                staticType.find((option: any) => option.id === id)?.name
            );
            url += `&types=${selectedStatic.join(",")}`;
          }
        }

        if (selectedQrcodeIds.length > 0) {
          const selectedQrcodeNames = selectedQrcodeIds.map(
            (id: any) =>
              qrcodeStatus.find((status: any) => status.id === id)?.name
          );
          url += `&status=${selectedQrcodeNames.join(",")}`;
        }

        if (searchInput !== "") {
          url += `&search=${searchInput}`;
        }

        const response = await instance.get(url);
        setLoading(false);
        setData(response.data.result);
        setQrlist(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const prevDeps = prevDependencies.current;

    const dependenciesChanged =
      selectedFilter !== prevDeps.selectedFilter ||
      limit !== prevDeps.limit ||
      selectedOptionssort !== prevDeps.selectedOptionssort ||
      !arraysEqual(selectedQrcodeIds, prevDeps.selectedQrcodeIds) ||
      !arraysEqual(selectedTypeIds, prevDeps.selectedTypeIds) ||
      !arraysEqual(selectStacti, prevDeps.selectStacti) ||
      searchInput !== prevDeps.searchInput;

    if (dependenciesChanged) {
      fetchData();
    }

    prevDependencies.current = {
      selectedFilter,
      limit,
      selectedOptionssort,
      selectedQrcodeIds,
      selectedTypeIds,
      selectStacti,
      searchInput,
    };
  }, [
    selectedFilter,
    limit,
    selectedOptionssort,
    selectedQrcodeIds,
    selectedTypeIds,
    selectStacti,
    searchInput,
  ]);

  function arraysEqual(arr1: any, arr2: any) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  const recordPerPage = limit;
  const totalRecords = data.length;
  const pageRange = 3;

  const handlePageChange = (selected: any) => {
    console.log("selected", selected + 1);
    setCurrentPage(selected + 1);
  };

  // const handlePageClick = (selectedPage: { selected: number }) => {
  //   const pageCount = Math.ceil(data?.length / limit);
  //   setCurrentPage(pageCount);
  // };

  useEffect(() => {
    const removeExistingQRCode = () => {
      const existingQRCode = document.getElementById("canvas");
      if (existingQRCode) {
        existingQRCode.innerHTML = "";
      }
    };

    if (data) {
      data.forEach((item: any) => {
        setFramlistid(item.json?.frame?.frameid);
        setFramdata(item.json?.frame);

        // pattren color  logic //
        const shapeColor = item.json?.style?.shape?.shapeColor;
        if (!shapeColor) {
          return;
        }
        const colorStops = shapeColor.colorStops;
        if (!Array.isArray(colorStops) || colorStops.length < 2) {
          return;
        }
        const colorStop1 = colorStops[0]?.color;
        const colorStop2 = colorStops[1]?.color;
        // pattren color  logic //

        // pattren backgroud color logic //
        const shapebgColor = item.json?.style?.shape?.shapebgColor;
        if (!shapebgColor) {
          return;
        }

        const colorStopss = shapebgColor.colorStops;
        if (!Array.isArray(colorStopss) || colorStopss.length < 2) {
          return;
        }
        const colorbgStop1 = colorStopss[0]?.color;
        const colorbgStop2 = colorStopss[1]?.color;

        // pattren backgroud color logic //

        // pattren dots color logic //
        const dotColor = item.json?.style?.corners?.dotColor;
        if (!dotColor) {
          return;
        }
        const colorDots = dotColor.colorStops;
        if (!Array.isArray(colorDots) || colorDots.length < 2) {
          return;
        }
        const dotsColorStop1 = colorDots[0]?.color;
        const dotsColorStop2 = colorDots[1]?.color;
        // pattren dots color logic //

        // pattren square color logic //
        const squareColor = item.json?.style?.corners?.squareColor;
        if (!squareColor) {
          return;
        }

        const colorSquare = squareColor.colorStops;
        if (!Array.isArray(colorSquare) || colorSquare.length < 2) {
          return;
        }
        const squareColorStop1 = colorSquare[0]?.color;
        const squareColorStop2 = colorSquare[1]?.color;

        // pattren square color logic //

        if (
          colorStop2 === "#000000" &&
          colorbgStop2 === "#fff" &&
          dotsColorStop2 === "#000000" &&
          squareColorStop2 === "#000000"
        ) {
          const Options: Options = {
            width: 120,
            height: 120,
            // image: item.json.logoimg,
            data: item.qr_url,
            dotsOptions: {
              type: item.json?.style?.shape?.shapeStyle,
              color: item.json?.style?.shape?.shapeColorr,
            },
            backgroundOptions: {
              color: item.json?.style?.shape?.shapebgColorr,
            },
            cornersDotOptions: {
              type: item.json?.style?.corners?.dotStyle,
              color: item.json?.style?.corners?.dotColorr,
            },
            cornersSquareOptions: {
              type: item.json?.style?.corners?.squareStyle,
              color: item.json?.style?.corners?.squareColorr,
            },
            qrOptions: {
              errorCorrectionLevel:
                item.json?.style?.errorCorrectionLevel || "Q",
            },
            imageOptions: {
              crossOrigin: "anonymous",
              margin: 20,
            },
            customStyle: {
              container: {
                position: "relative",
              },
            },
          };

          removeExistingQRCode();

          if (framlistid) {
            const qrCode = new QRCodeStyling(Options);
            qrCode.append(document.getElementById(`qr_${item.id}`));
            // qrCode.download({ name: "qr", extension: "svg" });
            qrcodeRef.current = qrCode;
            setQrcodelist(qrcodeRef.current);
            setModalqrcode(qrcodeRef.current);
          }
        } else {
          const Options: Options = {
            width: 120,
            height: 120,
            // image: item.json.logoimg,
            data: item?.qr_url,
            dotsOptions: {
              type: item.json?.style?.shape?.shapeStyle,
              color: item.json?.style?.shape?.shapeColorr,
              gradient: {
                type: item.json?.style?.shape?.shapeColor?.type,
                rotation: item.json?.style?.shape?.shapeColor?.rotation,
                colorStops: [
                  {
                    offset: 0,
                    color: colorStop1,
                  },
                  {
                    offset: 1,
                    color: colorStop2,
                  },
                ],
              },
            },
            backgroundOptions: {
              color: item.json?.style?.shape?.shapebgColorr,
              gradient: {
                type: item.json?.style?.corners?.dotStyle,
                rotation: item.json?.style?.shape?.shapebgColor?.rotation,
                colorStops: [
                  {
                    offset: 0,
                    color: colorbgStop1,
                  },
                  {
                    offset: 1,
                    color: colorbgStop2,
                  },
                ],
              },
            },
            cornersDotOptions: {
              type: item.json?.style?.corners?.dotStyle,
              color: item.json?.style?.corners?.dotColorr,
              gradient: {
                type: item.json?.style?.corners?.dotColor?.type,
                rotation: item.json?.style?.corners?.dotColor?.rotation,
                colorStops: [
                  {
                    offset: 0,
                    color: dotsColorStop1,
                  },
                  {
                    offset: 1,
                    color: dotsColorStop2,
                  },
                ],
              },
            },
            cornersSquareOptions: {
              type: item.json?.style?.corners?.squareStyle,
              color: item.json?.style?.corners?.squareColorr,
              gradient: {
                type: item.json?.style?.corners?.squareColor?.type,
                rotation: item.json?.style?.corners?.squareColor?.rotation,
                colorStops: [
                  {
                    offset: 0,
                    color: squareColorStop1,
                  },
                  {
                    offset: 1,
                    color: squareColorStop2,
                  },
                ],
              },
            },
            qrOptions: {
              errorCorrectionLevel:
                item.json?.style?.errorCorrectionLevel || "Q",
            },
            imageOptions: {
              crossOrigin: "anonymous",
              margin: 20,
            },
            customStyle: {
              container: {
                position: "relative",
              },
            },
          };

          removeExistingQRCode();
          // const qrCode = new QRCodeStyling(Options);
          // qrCode.append(document.getElementById(`qr_${item.id}`));
          // qrcodeRef.current = qrCode;
          // setQrcodelist(qrcodeRef.current);
          if (framlistid) {
            const qrCode = new QRCodeStyling(Options);
            qrCode.append(document.getElementById(`qr_${item.id}`));
            qrcodeRef.current = qrCode;
            setQrcodelist(qrcodeRef.current);
          }
        }
      });
    }
  }, [data, framlistid]);

  const isGridView = viewMode === "grid";

  const toggleModal = (item: any) => {
    console.log("itemid", item);
    setSelectedFramid(item?.json?.frame?.frameid);
    setSelectedText(item?.json?.frame?.text);
    setSelectedFrame(item?.json?.frame);
    setSelectedQrcode(item?.id);
    setModalqrcode(item);

    setIsActive(!isActive);
    document.body.classList.toggle("modal-active");
  };

  const toggleModalclose = (item: any) => {
    setTimeout(() => {
      setIsActive(false);
    }, 200);
  };

  const toggleModalclose1 = (item: any) => {
    setIsActive(false);
  };

  const togglemouse = (itemId: any) => {
    setHoveredProductId(itemId);
  };

  useEffect(() => {
    if (isActive) {
      // pattren color  logic //
      const shapeColor = modalqrcode.json?.style?.shape?.shapeColor;
      if (!shapeColor) {
        return;
      }
      const colorStops = shapeColor.colorStops;
      if (!Array.isArray(colorStops) || colorStops.length < 2) {
        return;
      }
      const colorStop1 = colorStops[0]?.color;
      const colorStop2 = colorStops[1]?.color;
      // pattren color  logic //

      // pattren backgroud color logic //
      const shapebgColor = modalqrcode.json?.style?.shape?.shapebgColor;
      if (!shapebgColor) {
        return;
      }

      const colorStopss = shapebgColor.colorStops;
      if (!Array.isArray(colorStopss) || colorStopss.length < 2) {
        return;
      }
      const colorbgStop1 = colorStopss[0]?.color;
      const colorbgStop2 = colorStopss[1]?.color;

      // pattren backgroud color logic //

      // pattren dots color logic //
      const dotColor = modalqrcode.json?.style?.corners?.dotColor;
      if (!dotColor) {
        return;
      }
      const colorDots = dotColor.colorStops;
      if (!Array.isArray(colorDots) || colorDots.length < 2) {
        return;
      }
      const dotsColorStop1 = colorDots[0]?.color;
      const dotsColorStop2 = colorDots[1]?.color;
      // pattren dots color logic //

      // pattren square color logic //
      const squareColor = modalqrcode.json?.style?.corners?.squareColor;
      if (!squareColor) {
        return;
      }

      const colorSquare = squareColor.colorStops;
      if (!Array.isArray(colorSquare) || colorSquare.length < 2) {
        return;
      }
      const squareColorStop1 = colorSquare[0]?.color;
      const squareColorStop2 = colorSquare[1]?.color;

      // pattren square color logic //

      if (
        colorStop2 === "#000000" &&
        colorbgStop2 === "#fff" &&
        dotsColorStop2 === "#000000" &&
        squareColorStop2 === "#000000"
      ) {
        const Options: Options = {
          // image: item.json.logoimg,
          data: modalqrcode.qr_url,
          dotsOptions: {
            type: modalqrcode.json?.style?.shape?.shapeStyle,
            color: modalqrcode.json?.style?.shape?.shapeColorr,
          },
          backgroundOptions: {
            color: modalqrcode.json?.style?.shape?.shapebgColorr,
          },
          cornersDotOptions: {
            type: modalqrcode.json?.style?.corners?.dotStyle,
            color: modalqrcode.json?.style?.corners?.dotColorr,
          },
          cornersSquareOptions: {
            type: modalqrcode.json?.style?.corners?.squareStyle,
            color: modalqrcode.json?.style?.corners?.squareColorr,
          },
          qrOptions: {
            errorCorrectionLevel:
              modalqrcode.json?.style?.errorCorrectionLevel || "Q",
          },
          imageOptions: {
            crossOrigin: "anonymous",
            margin: 20,
          },
          customStyle: {
            container: {
              position: "relative",
            },
          },
        };

        if (selectedFramid) {
          const qrCode = new QRCodeStyling(Options);
          qrCode.append(document.getElementById(`qr_${selectedQrcode}`));
          qrcodeRef.current = qrCode;
          setQrcodelist(qrcodeRef.current);
        } else {
          const qrCode = new QRCodeStyling(Options);
          qrCode.append(document.getElementById(`qr_${selectedQrcode}`));
          qrcodeRef.current = qrCode;
          setQrcodelist(qrcodeRef.current);
        }
      } else {
        const Options: Options = {
          // image: item.json.logoimg,
          data: modalqrcode?.qr_url,
          dotsOptions: {
            type: modalqrcode.json?.style?.shape?.shapeStyle,
            color: modalqrcode.json?.style?.shape?.shapeColorr,
            gradient: {
              type: modalqrcode.json?.style?.shape?.shapeColor?.type,
              rotation: modalqrcode.json?.style?.shape?.shapeColor?.rotation,
              colorStops: [
                {
                  offset: 0,
                  color: colorStop1,
                },
                {
                  offset: 1,
                  color: colorStop2,
                },
              ],
            },
          },
          backgroundOptions: {
            color: modalqrcode.json?.style?.shape?.shapebgColorr,
            gradient: {
              type: modalqrcode.json?.style?.corners?.dotStyle,
              rotation: modalqrcode.json?.style?.shape?.shapebgColor?.rotation,
              colorStops: [
                {
                  offset: 0,
                  color: colorbgStop1,
                },
                {
                  offset: 1,
                  color: colorbgStop2,
                },
              ],
            },
          },
          cornersDotOptions: {
            type: modalqrcode.json?.style?.corners?.dotStyle,
            color: modalqrcode.json?.style?.corners?.dotColorr,
            gradient: {
              type: modalqrcode.json?.style?.corners?.dotColor?.type,
              rotation: modalqrcode.json?.style?.corners?.dotColor?.rotation,
              colorStops: [
                {
                  offset: 0,
                  color: dotsColorStop1,
                },
                {
                  offset: 1,
                  color: dotsColorStop2,
                },
              ],
            },
          },
          cornersSquareOptions: {
            type: modalqrcode.json?.style?.corners?.squareStyle,
            color: modalqrcode.json?.style?.corners?.squareColorr,
            gradient: {
              type: modalqrcode.json?.style?.corners?.squareColor?.type,
              rotation: modalqrcode.json?.style?.corners?.squareColor?.rotation,
              colorStops: [
                {
                  offset: 0,
                  color: squareColorStop1,
                },
                {
                  offset: 1,
                  color: squareColorStop2,
                },
              ],
            },
          },
          qrOptions: {
            errorCorrectionLevel:
              modalqrcode?.json?.style?.errorCorrectionLevel || "Q",
          },
          imageOptions: {
            crossOrigin: "anonymous",
            margin: 20,
          },
          customStyle: {
            container: {
              position: "relative",
            },
          },
        };
        if (selectedFramid) {
          const qrCode = new QRCodeStyling(Options);
          qrCode.append(document.getElementById(`qr_${selectedQrcode}`));
          qrcodeRef.current = qrCode;
          setQrcodelist(qrcodeRef.current);
        } else {
          const qrCode = new QRCodeStyling(Options);
          qrCode.append(document.getElementById(`qr_${selectedQrcode}`));
          qrcodeRef.current = qrCode;
          setQrcodelist(qrcodeRef.current);
        }
      }
    }
  }, [isActive, selectedFramid]);

  // Create QR code

  const toggleDownloadModal = (item: any) => {
    setSelectedFramid(item?.json?.frame?.frameid);
    setSelectedText(item?.json?.frame?.text);
    setSelectedFrame(item?.json?.frame);
    setModalDownlodid(item?.id);
    setSelectedQrcode(item?.id);
    setModalqrcode(item);
    setIsActive(!isActive);
    setModalDownlod(!modalDownlod);
  };

  const toggleDownloadModalclose = (item: any) => {
    setModalDownlod(false);
  };

  const toggleCustuomdownlodModal = (item: any) => {
    setModalCustumDownlod(!modalCustumDownlodid);
    setModalCustumDownlodid(item.id);
  };

  const toggleCustomDownloadModalclose = (itemId: any) => {
    setModalCustumDownlod(false);
  };

  const onButtonClick = useCallback(() => {
    if (!ref.current) {
      console.error("Ref value is not set");
      return;
    }

    toPng(ref.current)
      .then((dataUrl: any) => {
        const link = document.createElement("a");
        link.download = "my-image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error: any) => {
        console.error("Error converting to image:", error);
      });
  }, [ref.current]);

  const onButtonClickJpeg = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toJpeg(ref.current, { quality: 1 })
      .then((dataUrl: any) => {
        const link = document.createElement("a");
        link.download = "qrcode.jpg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [ref.current]);

  const onButtonClickSvg = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toSvg(ref.current, { cacheBust: true })
      .then((dataUrl: any) => {
        const link = document.createElement("a");
        link.download = "qrcode.svg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [ref.current]);

  const onButtonCustuomdownload = useCallback(() => {
    if (!ref.current) {
      console.error("Ref value is not set");
      return;
    }

    const options = {
      quality: 1,
      // width: parseInt(fileSize),
      // height: parseInt(fileSize),
    };

    let downloadFunction;
    let fileExtension: string;

    switch (fileType) {
      case "PNG":
        downloadFunction = toPng;
        fileExtension = "png";
        break;
      case "JPEG":
        downloadFunction = toJpeg;
        fileExtension = "jpg";
        break;
      case "SVG":
        downloadFunction = toSvg;
        fileExtension = "svg";
        break;
      default:
        console.error("Invalid file type");
        return;
    }

    downloadFunction(ref.current, options)
      .then((dataUrl: any) => {
        const link = document.createElement("a");
        link.download = `qrcode.${fileExtension}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((error: any) => {
        console.error("Error converting to image:", error);
      });
  }, [ref.current, fileType, fileSize]);

  const onButtonClickPdf = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toJpeg(ref.current, { quality: 1 })
      .then((dataUrl: any) => {
        const img = new Image();
        const onloadHandler = () => {
          const pdf = new jsPDF();
          const imgWidth = 100;
          const imgHeight = (350 * imgWidth) / img.width;
          const x = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
          const y = (pdf.internal.pageSize.getHeight() - imgHeight) / 2;
          pdf.addImage(img, "JPEG", x, y, imgWidth, imgHeight);

          pdf.save("qrcode.pdf");
        };
        img.onload = onloadHandler;
        img.src = dataUrl;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [ref.current]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 786) {
      setViewMode("list");
    } else if (windowWidth >= 786) {
      setViewMode(viewMode);
    }
  }, [windowWidth]);

  return (
    <>
      <div
        className={` ${
          !isGridView
            ? "w-full"
            : "grid  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 "
        }`}
      >
        {data && !loading ? (
          data.map((item: any) => (
            <>
              <div
                key={item.id}
                className={`mt-4 flex flex-col rounded-lg bg-white p-4 ${
                  !isGridView ? "flex w-full flex-row " : ""
                }`}
              >
                <div
                  className={`${
                    !isGridView
                      ? "flex justify-between"
                      : "flex justify-between"
                  }`}
                >
                  <div
                    className={`${!isGridView ? "flex justify-between " : ""}`}
                  >
                    <div
                      className={` ${
                        isGridView
                          ? "order-first  hidden items-center justify-center"
                          : "mr-2 flex items-center justify-center "
                      }`}
                    >
                      <Checkbox
                        style={{
                          backgroundColor: isCheckboxChecked
                            ? "#5D5FEF"
                            : "white",
                        }}
                        checked={isCheckboxChecked}
                        onChange={tablechecked}
                      />
                    </div>
                    <div className={`${!isGridView ? " " : ""}`}>
                      <div>
                        {hoveredProductId === item.id && (
                          <Popover
                            isOpen={true}
                            positions={["top"]}
                            align="center"
                            content={
                              <div className="rounded-md  bg-[#000] px-2 py-1 text-[12px] text-white">
                                Click to Scan
                              </div>
                            }
                          >
                            <div>{/* Dummy children prop */}</div>
                          </Popover>
                        )}
                        <div
                          className="relative flex h-[100px] w-[100px]  items-center justify-center rounded-md border-2 border-gray-200 hover:border-[#5D5FEF]"
                          onMouseEnter={() => togglemouse(item.id)}
                          onMouseLeave={() => setHoveredProductId(null)}
                          onClick={() => toggleModal(item)}
                        >
                          <div>
                            <div className="relative">
                              <Listframe
                                farmeid={item?.json?.frame?.frameid}
                                framtext={item?.json?.frame?.text}
                                fmcolors={item?.json?.frame}
                              />
                            </div>

                            <div
                              className={` ${
                                item?.json?.frame?.frameid == 0
                                  ? "absolute left-[-1px] top-[1px] w-[100px]"
                                  : item?.json?.frame?.frameid == 1
                                  ? "absolute left-[16px] top-[8px] w-[65px]"
                                  : item?.json?.frame?.frameid == 2
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 3
                                  ? "absolute left-[19px] top-[16px] w-[59px]"
                                  : item?.json?.frame?.frameid == 4
                                  ? "absolute left-[19px] top-[16px] w-[59px]"
                                  : item?.json?.frame?.frameid == 5
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 6
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 7
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 8
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 9
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 10
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 11
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 12
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 13
                                  ? "absolute left-[16px] top-[17px] w-[64px]"
                                  : item?.json?.frame?.frameid == 14
                                  ? "absolute left-[14px] top-[3px] w-[69px]"
                                  : item?.json?.frame?.frameid == 15
                                  ? "absolute left-[16px] top-[19px] w-[64px]"
                                  : item?.json?.frame?.frameid == 16
                                  ? "absolute left-[26px] top-[14px] w-[44px]"
                                  : item?.json?.frame?.frameid == 17
                                  ? "absolute left-[26px] top-[23px] w-[44px]"
                                  : item?.json?.frame?.frameid == 18
                                  ? "absolute left-[11px] top-[6px] w-[39px]"
                                  : item?.json?.frame?.frameid == 19
                                  ? "absolute left-[23px] top-[33px] w-[52px]"
                                  : item?.json?.frame?.frameid == 20
                                  ? "absolute left-[31px] top-[46px] w-[35px]"
                                  : item?.json?.frame?.frameid == 21
                                  ? "absolute left-[17px] top-[20px] w-[63px]"
                                  : item?.json?.frame?.frameid == 22
                                  ? "absolute left-[17px] top-[12px] w-[69px]"
                                  : item?.json?.frame?.frameid == 23
                                  ? "absolute left-[22px] top-[38px] w-[37px]"
                                  : ""
                              }`}
                              id={`qr_${item.id}`}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {isActive && (
                        <div className="fixed left-0 top-0 !z-20 flex h-full w-full  items-center justify-center">
                          <div
                            className="flex h-full w-full flex-col items-center justify-center bg-white "
                            // onClick={toggleModal}
                          >
                            <div ref={ref} className="">
                              <Modalfram
                                farmeid={selectedFramid}
                                framtext={selectedText}
                                fmcolors={selectedFrame}
                                selcteqrcode={selectedQrcode}
                              />
                            </div>
                            <div className="">
                              <div id={`${item.id === selectedQrcode}`}></div>
                            </div>
                          </div>

                          <div
                            className="modal-close text-black absolute right-0 top-0 z-50 mr-4 mt-4 flex cursor-pointer flex-col items-center text-sm"
                            onClick={toggleModal}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              className="fill-current text-black"
                            >
                              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                          </div>
                        </div>
                      )}
                      <p
                        className={` ${isGridView ? "text-[12px] " : "hidden"}`}
                      >
                        <span className="font-semibold">14212</span> Scans{" "}
                        <span className="font-semibold">11112</span> Views
                      </p>{" "}
                    </div>
                    <div
                      className={` ${
                        !isGridView
                          ? "ml-2 flex flex-col justify-center"
                          : "hidden"
                      }`}
                    >
                      <div>
                        {" "}
                        <h4 className="text-[15px] text-[#5D5FEF]  md:text-[20px]">
                          {item.type}
                        </h4>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[10px] font-semibold text-[#000] md:text-[14px]">
                          Untited
                        </p>
                        <GrFormEdit className="ml-2 text-[20px] text-[#5D5FEF]" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`ml-3  ${
                      !isGridView
                        ? "flex flex-row items-center"
                        : "flex flex-col"
                    }`}
                  >
                    <div
                      className={` ${!isGridView ? "hidden" : "flex flex-col"}`}
                    >
                      <div>
                        {" "}
                        <h4 className="text-[20px] text-[#5D5FEF]">
                          {" "}
                          {item.type}
                        </h4>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[14px] font-semibold text-[#000]">
                          Untited
                        </p>
                        <GrFormEdit className="ml-2 text-[20px] text-[#5D5FEF]" />
                      </div>
                    </div>
                    <div
                      className={` ${
                        !isGridView
                          ? "mx-2 mr-7 hidden h-20 flex-col rounded-xl  border-l-2 border-[#DDDDDD] md:block "
                          : "hidden"
                      }`}
                    ></div>
                    <div
                      className={`${
                        !isGridView
                          ? " hidden w-60 flex-col md:block 4xl:mr-20"
                          : "hidden"
                      }`}
                    >
                      <div className="flex items-center">
                        {/* <img src={folder} className="mr-2" /> */}
                        <p className="text-[12px]">No Folder</p>
                      </div>
                      <div className="flex items-center">
                        {/* <img src={web} className="mr-2" /> */}
                        <p className="text-[12px]">exampleurl.com/a</p>
                      </div>
                      <div className="flex items-center">
                        {/* <img src={link} className="mr-2" /> */}
                        <p className="text-[12px]">https://exampleurl.com</p>
                        <GrFormEdit className="ml-2 text-[20px] text-[#5D5FEF]" />
                      </div>
                    </div>
                    <div
                      className={` ${
                        !isGridView
                          ? "mx-2  hidden h-20 flex-col  rounded-xl border-l-2 border-[#DDDDDD] 2xl:block 4xl:mr-3"
                          : "hidden"
                      }`}
                    ></div>
                    <div
                      className={`${
                        !isGridView
                          ? "hidden w-60 flex-col 2xl:block 4xl:mr-16"
                          : "hidden"
                      }`}
                    >
                      <div className="flex items-center">
                        <p className="text-[12px] text-[#606060]">
                          Created: {item.created_at}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[12px]">
                          Modified: {item.updated_at}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[12px]">
                          <span className="font-semibold">14212</span> Scans{" "}
                          <span className="font-semibold">11112</span> Views
                        </p>{" "}
                      </div>
                    </div>
                    <div
                      className={` ${
                        !isGridView
                          ? "mx-2  hidden h-20 flex-col rounded-xl border-l-2 border-[#DDDDDD] md:block 4xl:mr-3"
                          : "hidden"
                      }`}
                    ></div>
                    {/* asdfasdf */}
                    <div
                      className={`${
                        !isGridView
                          ? "flex items-center justify-between"
                          : "hidden"
                      }`}
                    >
                      <div className="hidden sm:block">
                        <div className="flex items-center justify-center 4xl:mr-24">
                          <button className="mr-2">
                            <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                              <span className="mx-2 text-xs md:text-sm">
                                Details
                              </span>
                            </div>
                          </button>
                          <button
                            className="mr-2"
                            onClick={() => {
                              toggleDownloadModal(item);
                            }}
                          >
                            <div className="flex items-center justify-center rounded-full border border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#405192] hover:text-[#5D5FEF] ">
                              <span className="lg:hidden ">
                                {" "}
                                <HiOutlineDownload />
                              </span>
                              <span className="mx-2  hidden text-xs md:text-sm lg:block">
                                Download
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div>
                        <button
                          className=""
                          onClick={() => togglePopovermenu(item)}
                        >
                          <div className="flex items-center justify-center rounded-full border border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                            <span>
                              <BsThreeDotsVertical className="w-full" />
                            </span>
                          </div>
                        </button>
                      </div>
                      <Menuedit menuid={item.id} />
                    </div>

                    {/* asdfasdf */}
                    <div className={` ${!isGridView ? "hidden" : ""}`}>
                      {" "}
                      <p className="text-[12px] text-[#606060]">
                        Created: {item.created_at}
                      </p>
                    </div>
                    <div
                      className={`flex items-center  ${
                        !isGridView ? "hidden" : ""
                      }`}
                    >
                      {/* <img src={folder} className="mr-2" /> */}
                      <p className="text-[12px]">No Folder</p>
                    </div>
                    <div
                      className={`flex items-center ${
                        !isGridView ? "hidden" : ""
                      }`}
                    >
                      {/* <img src={web} className="mr-2" /> */}
                      <p className="text-[12px]">exampleurl.com/a</p>
                    </div>
                    <div
                      className={`flex items-center ${
                        !isGridView ? "hidden" : ""
                      }`}
                    >
                      {/* <img src={conetnt} className="mr-2" /> */}
                      <p className="text-[12px]">Modified: {item.updated_at}</p>
                    </div>
                    <div
                      className={`flex items-center ${
                        !isGridView ? "hidden" : ""
                      }`}
                    >
                      {/* <img src={link} className="mr-2" /> */}
                      <p className="text-[12px]">https://exampleurl.com</p>
                      <GrFormEdit className="ml-2 text-[20px] text-[#5D5FEF]" />
                    </div>
                  </div>
                  <div
                    className={` ${
                      isGridView
                        ? "mt-2 hidden  md:flex "
                        : "hidden  items-center justify-center "
                    }`}
                  >
                    <Checkbox
                      style={{
                        backgroundColor: isCheckboxChecked
                          ? "#5D5FEF"
                          : "white",
                      }}
                      checked={isCheckboxChecked}
                      onChange={tablechecked}
                    />
                  </div>
                </div>
                <hr className={` ${isGridView ? "mt-3 " : "hidden"}`} />
                <div
                  className={`${
                    isGridView ? "mt-2 flex justify-between py-2  " : "hidden"
                  }`}
                >
                  <div>
                    <button className="mr-2">
                      <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#405192] hover:text-[#5D5FEF] ">
                        <span className="mx-2 text-xs md:text-sm">Details</span>
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="mr-2  "
                      onClick={() => {
                        toggleDownloadModal(item);
                      }}
                    >
                      <div className="flex items-center justify-center rounded-full border border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#405192]  hover:text-[#5D5FEF] ">
                        <span className="mx-2 text-xs md:text-sm">
                          Download
                        </span>
                      </div>
                    </button>
                    <button
                      className="mr-2"
                      onClick={() => togglePopovermenu(item)}
                    >
                      <div className="flex items-center justify-center rounded-full border border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#405192] hover:text-[#5D5FEF] ">
                        <span>
                          <BsThreeDotsVertical className="w-full" />
                        </span>
                      </div>
                    </button>
                    <Menuedit menuid={item.id} />
                  </div>
                </div>
              </div>

              {modalDownlod && (
                <div
                  id="default-modal"
                  tabIndex={-1}
                  aria-hidden="true"
                  className={`fixed  left-0 right-0 top-0 flex h-full items-center justify-center  ${
                    modalDownlod ? "!z-30 bg-[#000]  bg-opacity-5" : ""
                  }`}
                >
                  <div className="relative max-h-full w-full max-w-2xl p-4">
                    <div className="relative rounded-md  bg-white p-2  dark:bg-gray-700">
                      <div className="flex items-center justify-between p-2   md:p-3">
                        <h3 className="text-base font-medium text-[#000] dark:text-white md:text-xl">
                          Select the format to download
                        </h3>
                        <button
                          type="button"
                          onClick={() => {
                            toggleDownloadModalclose(
                              item.id === selectedQrcode
                            );
                            toggleModalclose1(item);
                          }}
                          className="bg-transparent ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="default-modal"
                        >
                          <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="border-b p-2 dark:border-gray-600">
                        <button
                          className="mr-2"
                          onClick={() => {
                            toggleCustuomdownlodModal(item);
                            toggleDownloadModalclose(
                              item.id === selectedQrcode
                            );
                          }}
                        >
                          <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                            <span className="mx-2 text-xs md:text-sm">
                              Custom Download
                            </span>
                          </div>
                        </button>
                      </div>

                      <div className="my-2 flex flex-col p-2  md:my-0 md:flex  md:flex-row md:px-2 md:py-4">
                        <button
                          className="mb-2 mr-2 md:mb-0"
                          onClick={() => {
                            onButtonClick();
                            toggleDownloadModalclose(
                              item.id === selectedQrcode
                            );
                            toggleModalclose(item.id);
                          }}
                        >
                          <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                            <span className="mx-2 text-xs md:text-sm">PNG</span>
                          </div>
                        </button>
                        <button
                          className="mb-2 mr-2 md:mb-0"
                          onClick={() => {
                            onButtonClickJpeg();
                            toggleDownloadModalclose(
                              item.id === selectedQrcode
                            );
                            toggleModalclose(item.id);
                          }}
                        >
                          <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                            <span className="mx-2 text-xs md:text-sm">
                              JPEG
                            </span>
                          </div>
                        </button>
                        <button
                          className="mb-2  mr-2 md:mb-0"
                          onClick={() => {
                            onButtonClickSvg();
                            toggleDownloadModalclose(
                              item.id === selectedQrcode
                            );
                            toggleModalclose(item.id);
                          }}
                        >
                          <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                            <span className="mx-2 text-xs md:text-sm">SVG</span>
                          </div>
                        </button>
                        <button
                          className="mb-2  mr-2 md:mb-0"
                          onClick={() => {
                            onButtonClickSvg();
                            toggleDownloadModalclose(
                              item.id === selectedQrcode
                            );
                            toggleModalclose(item.id);
                          }}
                        >
                          <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                            <span className="mx-2 text-xs md:text-sm">
                              SVG Tiny (Illustrator)
                            </span>
                          </div>
                        </button>
                        <button
                          className="mb-2  mr-2 md:mb-0"
                          onClick={() => {
                            onButtonClickPdf();
                          }}
                        >
                          <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                            <span className="mx-2 text-xs md:text-sm">PDF</span>
                          </div>
                        </button>
                        {/* <button className="mr-2 md:mb-0">
                            <div className="flex items-center justify-center rounded-full border  border-[#5D5FEF] p-2 text-[#5D5FEF] hover:border-[#5D5FEF] hover:text-[#5D5FEF] ">
                              <span className="mx-2 text-xs md:text-sm">
                                EPS
                              </span>
                            </div>
                          </button>  */}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {modalCustumDownlod && (
                <div
                  id="default-modal"
                  tabIndex={-1}
                  aria-hidden="true"
                  className={`fixed   left-0 right-0 top-0  flex h-full items-center justify-center  ${
                    modalCustumDownlod ? "!z-30 bg-[#000] bg-opacity-5" : ""
                  }`}
                >
                  <div className="relative max-h-full w-full max-w-[450px] p-4">
                    <div className="relative rounded-md bg-white  dark:bg-gray-700">
                      <div className="flex items-center justify-between p-2 md:p-3">
                        <button
                          type="button"
                          onClick={() => toggleCustomDownloadModalclose(item)}
                          className="bg-transparent ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="default-modal"
                        >
                          <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className=" px-6  dark:border-gray-600">
                        <h3 className="py-2 text-base font-medium text-[#000] dark:text-white md:text-xl">
                          Advanced download options
                        </h3>
                        <div>
                          <form className="">
                            <label
                              htmlFor="file-type"
                              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Type of file
                            </label>
                            <select
                              id="file-type"
                              value={fileType}
                              onChange={(e) => setFileType(e.target.value)}
                              className="block w-full rounded-3xl border border-gray-300 p-2.5 text-sm text-gray-900 hover:border-gray-700  focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            >
                              <option className="custom-option" value="PNG">
                                PNG
                              </option>
                              <option value="JPEG">JPEG</option>
                              <option value="SVG">SVG</option>
                              <option value="SVGTiny">
                                SVG Tiny (Illustrator)
                              </option>
                              {/* <option value="PDF">PDF</option>
                                <option value="EPS">EPS</option> */}
                            </select>
                          </form>
                        </div>
                        <div className=" py-4">
                          <form className="">
                            <label
                              htmlFor="file-type"
                              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >
                              File size
                            </label>
                            <select
                              id="file-size"
                              value={fileSize}
                              onChange={(e) => setFileSize(e.target.value)}
                              className="block w-full rounded-3xl border border-gray-300 p-2.5 text-sm text-gray-900 hover:border-gray-700  focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            >
                              <option className="custom-option" value="512">
                                512×512
                              </option>
                              <option value="1024">1024×1024</option>
                              <option value="2048">2048×2048</option>
                              <option value="4096">4096×4096</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="flex justify-center px-6 py-4">
                        <button
                          className="mb-2 mr-2 w-full max-w-[180px] md:mb-0"
                          onClick={() => {
                            toggleCustomDownloadModalclose(item.id);
                            toggleDownloadModalclose(
                              item.id === selectedQrcode
                            );
                            toggleModalclose(item.id);
                          }}
                        >
                          <div className="flex items-center justify-center rounded-full border   border-blue-500 p-2 text-blue-500 hover:border-blue-600  ">
                            <span className="mx-2 text-xs md:text-sm">
                              Cancel
                            </span>
                          </div>
                        </button>
                        <button
                          className="mb-2 mr-2 w-full max-w-[180px] md:mb-0"
                          onClick={() => {
                            onButtonCustuomdownload();
                          }}
                        >
                          <div className="flex items-center justify-center rounded-full border border-[#5D5FEF] bg-blue-500 p-2 text-white hover:bg-blue-600  ">
                            <span className="mx-2 text-xs md:text-sm">
                              Download
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))
        ) : (
          <Myqrcodeloader />
        )}

        <div className="mt-5">
          {data && data.length > 0 && (
            <ReactPaginate
              pageCount={Math.ceil(totalRecords / recordPerPage)}
              pageRangeDisplayed={pageRange}
              marginPagesDisplayed={1}
              previousLabel={<span className="text-md font-medium">{"<"}</span>}
              nextLabel={<span className="text-md font-medium">{">"}</span>}
              breakLabel={"..."}
              breakClassName={"break-me"}
              onPageChange={({ selected }: any) => handlePageChange(selected)}
              containerClassName={"pagination flex justify-center"}
              activeClassName={"active"}
              pageClassName={"inline-block mr-1"}
              pageLinkClassName={
                "border-2 hover:border-gray-700 text-gray-600 rounded-md px-3 py-1 text-md"
              }
              previousClassName={"inline-block mr-1"}
              nextClassName={"inline-block mr-1"}
              previousLinkClassName={
                "border-2 hover:border-gray-700 text-gray-600 rounded-md px-3 py-1 text-md"
              }
              nextLinkClassName={
                "border-2 hover:border-gray-700 text-gray-600 rounded-md px-3 py-1 text-md"
              }
              breakLinkClassName={
                "border hover:border-gray-700 border-gray-500 rounded-md px-3 py-1 text-md"
              }
              activeLinkClassName={
                "text-gray-800 border-2 border-blue-600 rounded-md px-3 py-1 text-md"
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MyCard;
