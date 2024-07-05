import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type ContextApiProps = {
  children: ReactNode;
};

type ViewModeContextType = {
  instance: any;
  limit: string;
  selectedQrcodeIds: any[];
  setSelectedQrcodeIds: React.Dispatch<React.SetStateAction<any[]>>;
  selectedTypeIds: any[];
  setSelectedTypeIds: React.Dispatch<React.SetStateAction<any[]>>;
  typeOptions: { id: number; name: string }[];
  qrcodeStatus: { id: number; name: string }[];
  setLimit: React.Dispatch<React.SetStateAction<string>>;
  selectedOptionssort: string;
  setSelectedOptionssort: React.Dispatch<React.SetStateAction<string>>;
  darkmode: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
  viewMode: string;
  isPopoverOpenmenu: any;
  setIsPopoverOpenmenu: React.Dispatch<React.SetStateAction<any>>;
  togglePopovermenu: (item: any) => void;
  framlistid: any;
  setFramlistid: React.Dispatch<React.SetStateAction<any>>;
  qrlist: any;
  qrcodelist: any;
  setQrcodelist: React.Dispatch<React.SetStateAction<any>>;
  framdata: any;
  setFramdata: React.Dispatch<React.SetStateAction<any>>;
  cornersqurename: string;
  setCornersqurename: React.Dispatch<React.SetStateAction<string>>;
  setQrlist: React.Dispatch<React.SetStateAction<any>>;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  handleGridButtonClick: () => void;
  handleListButtonClick: () => void;
  errorCorrectionLevel: string;
  setErrorCorrectionLevel: React.Dispatch<React.SetStateAction<string>>;
  handlesqrcode: (e: React.FormEvent<HTMLFormElement>) => void;
  webbackendurl: string;
  setWebbackendurl: React.Dispatch<React.SetStateAction<string>>;
  formData: any; // Update with actual type if possible
  nextstepid: any;
  setNextstepid: React.Dispatch<React.SetStateAction<any>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<React.SetStateAction<any>>; // Update with actual type if possible
  selectedFolder: string;
  setSelectedFolder: React.Dispatch<React.SetStateAction<string>>;
  onSubmitForm: () => void;
  contenttypeid: number;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setContenttypeid: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  accessToken: string;
  cornerdots: string;
  setCornerdots: React.Dispatch<React.SetStateAction<string>>;
  setAnimationVisible: React.Dispatch<React.SetStateAction<boolean>>;
  animationVisible: boolean;
  setForgotpassanimi: React.Dispatch<React.SetStateAction<boolean>>;
  forgotpassanimi: boolean;
  setFromDate: React.Dispatch<React.SetStateAction<Date>>;
  fromDate: Date;
  setToDate: React.Dispatch<React.SetStateAction<Date>>;
  toDate: Date;
  handleFromDateChange: (date: Date) => void;
  handleToDateChange: (date: Date) => void;
  shapbg: string;
  setShapbg: React.Dispatch<React.SetStateAction<string>>;
  shapstyle: number;
  setShapstyle: React.Dispatch<React.SetStateAction<number>>;
  shapcolor: string;
  setShapcolor: React.Dispatch<React.SetStateAction<string>>;
  setErrorcorection: React.Dispatch<React.SetStateAction<string>>;
  errorcorection: string;
  cornerdotcolor: string;
  setCornerdotcolor: React.Dispatch<React.SetStateAction<string>>;
  cornerdotstyle: string;
  setCornerdotstyle: React.Dispatch<React.SetStateAction<string>>;
  cornersquarecolor: string;
  setCornersquarecolor: React.Dispatch<React.SetStateAction<string>>;
  cornersquarestyle: string;
  setCornersquarestyle: React.Dispatch<React.SetStateAction<string>>;
  qrcode: any;
  setQRCode: React.Dispatch<React.SetStateAction<any>>;
  frameid: number;
  setFrameid: React.Dispatch<React.SetStateAction<number>>;
  textdata: string;
  setTextData: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  color1: string;
  setColor1: React.Dispatch<React.SetStateAction<string>>;
  color2: string;
  setColor2: React.Dispatch<React.SetStateAction<string>>;
  gradientType: string;
  setGradientType: React.Dispatch<React.SetStateAction<string>>;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
  isToggleButtonActive: boolean;
  setIsToggleButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
  bgcolor1: string;
  setBgColor1: React.Dispatch<React.SetStateAction<string>>;
  bgcolor2: string;
  setBgColor2: React.Dispatch<React.SetStateAction<string>>;
  handleSliderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  range1: number;
  setRange1: React.Dispatch<React.SetStateAction<number>>;
  handleSliderChange1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isToggleButtonActive1: boolean;
  setIsToggleButtonActive1: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckboxCheckedf: boolean;
  setIsCheckboxCheckedf: React.Dispatch<React.SetStateAction<boolean>>;
  handleCheckboxChangef: () => void;
  selectedFilelog: any;
  setSelectedFilelog: React.Dispatch<React.SetStateAction<any>>;
  pattrencolor1: string;
  setPattrencolor1: React.Dispatch<React.SetStateAction<string>>;
  pattrencolor2: string;
  setPattrencolor2: React.Dispatch<React.SetStateAction<string>>;
  pattencolorrange: number;
  setPattencolorrange: React.Dispatch<React.SetStateAction<number>>;
  pattenbgrange: number;
  setPattenbgrange: React.Dispatch<React.SetStateAction<number>>;
  pattengradientType: string;
  setPattengradientType: React.Dispatch<React.SetStateAction<string>>;
  pattrenframeid: any;
  setPattrenframeid: React.Dispatch<React.SetStateAction<any>>;
  pattrenbgcolor1: string;
  setPattrenbgcolor1: React.Dispatch<React.SetStateAction<string>>;
  pattrenbgcolor2: string;
  setPattrenbgcolor2: React.Dispatch<React.SetStateAction<string>>;
  isCheckboxCheckedpatrendbg: boolean;
  setIsCheckboxCheckedpatrendbg: React.Dispatch<React.SetStateAction<boolean>>;
  handleCheckboxChangepattrenbg: () => void;
  cornershapid: number;
  setCornershapid: React.Dispatch<React.SetStateAction<number>>;
  cornersSquarecolor1: string;
  setCornersSquarecolor1: React.Dispatch<React.SetStateAction<string>>;
  cornersSquarecolor2: string;
  setCornersSquarecolor2: React.Dispatch<React.SetStateAction<string>>;
  cornersSquaregradientType: string;
  setCornersSquaregradientType: React.Dispatch<React.SetStateAction<string>>;
  cornersSquarecolorrange: number;
  setCornersSquarecolorrange: React.Dispatch<React.SetStateAction<number>>;
  istoggelcorner: boolean;
  setIstoggelcorner: React.Dispatch<React.SetStateAction<boolean>>;
  centerstyleid: number;
  setCenterstyleid: React.Dispatch<React.SetStateAction<number>>;
  centerstylecolor1: string;
  setCenterstylecolor1: React.Dispatch<React.SetStateAction<string>>;
  centerstylecolor2: string;
  setCenterstylecolor2: React.Dispatch<React.SetStateAction<string>>;
  centerstylegradientType: string;
  setCenterstylegradientType: React.Dispatch<React.SetStateAction<string>>;
  centerstylerange: number;
  setCenterstylerange: React.Dispatch<React.SetStateAction<number>>;
  istoggelcenterstyle: boolean;
  setIstoggelcenterstyle: React.Dispatch<React.SetStateAction<boolean>>;
  modalqrcode: any;
  setModalqrcode: React.Dispatch<React.SetStateAction<any>>;
  qrcodetype: string;
  setQrcodetype: React.Dispatch<React.SetStateAction<string>>;
  isInputValid: boolean;
  setIsInputValid: React.Dispatch<React.SetStateAction<boolean>>;
  websiteUrl: string;
  setWebsiteUrl: React.Dispatch<React.SetStateAction<string>>;
};
const ApiContext = createContext<ViewModeContextType>(
  {} as ViewModeContextType
);

export const ApiProvider: React.FC<ContextApiProps> = ({ children }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string>("");
  const [darkmode, setDarkmode] = React.useState(false);
  const [animationVisible, setAnimationVisible] = useState(false);
  const [forgotpassanimi, setForgotpassanimi] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 30);
    return currentDate;
  });
  const [framlistid, setFramlistid] = useState(null);
  const [qrcodelist, setQrcodelist] = useState(null);
  const [framdata, setFramdata] = useState(null);
  const [qrcode, setQRCode] = useState(null);
  const [frameid, setFrameid] = useState(0);
  const [pattrenframeid, setPattrenframeid] = useState();
  const [isCheckboxCheckedf, setIsCheckboxCheckedf] = useState(true);
  const [isCheckboxCheckedpatrendbg, setIsCheckboxCheckedpatrendbg] =
    useState(true);
  const [qrcodetype, setQrcodetype] = useState("");

  const [isInputValid, setIsInputValid] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [nextstepid, setNextstepid] = useState();
  const [contenttypeid, setContenttypeid] = useState(0);

  const handleCheckboxChangef = () => {
    setIsCheckboxCheckedf(!isCheckboxCheckedf);
    if (!isCheckboxCheckedf) {
      setBgColor1("#f5f5f5");
      setBgColor2("#f5f5f5");
    } else if (bgcolor1 || bgcolor2) {
      setIsCheckboxCheckedf(false);
      setBgColor1(bgcolor1);
      setBgColor2(bgcolor2);
    }
  };

  const handleCheckboxChangepattrenbg = () => {
    setIsCheckboxCheckedpatrendbg(!isCheckboxCheckedpatrendbg);
    if (!isCheckboxCheckedpatrendbg) {
      setPattrenbgcolor1("#f5f5f5");
      setPattrenbgcolor2("#f5f5f5");
    } else if (pattrenbgcolor1 || pattrenbgcolor2) {
      setIsCheckboxCheckedpatrendbg(false);
      setPattrenbgcolor1(pattrenbgcolor1);
      setPattrenbgcolor2(pattrenbgcolor2);
    }
  };
  //  defult qr code style states //
  const [shapbg, setShapbg] = useState("#f5f5f5");
  const [shapstyle, setShapstyle] = useState(0);
  const [shapcolor, setShapcolor] = useState("#000");
  const [errorcorection, setErrorcorection] = useState("Q");
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState("");

  // corners styles //
  const [cornerdotcolor, setCornerdotcolor] = useState("#000");
  const [cornerdotstyle, setCornerdotstyle] = useState("square");
  const [cornersquarecolor, setCornersquarecolor] = useState("#000");
  const [cornersquarestyle, setCornersquarestyle] = useState("square");
  // corners styles //
  const [selectedOptionssort, setSelectedOptionssort] = useState("updated_at");
  const [limit, setLimit] = useState("5");
  const [selectedQrcodeIds, setSelectedQrcodeIds] = useState<any[]>([]);
  const [viewMode, setViewMode] = useState("list");
  const [selectedTypeIds, setSelectedTypeIds] = useState<any[]>([]);

  const handleGridButtonClick = () => {
    setViewMode("grid");
  };

  const handleListButtonClick = () => {
    setViewMode("list");
  };

  //  defult qr code style states //
  const [modalqrcode, setModalqrcode] = useState(null);
  const [textdata, setTextData] = useState("Scan Me!");
  const [textColor, setTextColor] = useState("#9c9c9c");
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  const [bgcolor1, setBgColor1] = useState("#ffff");
  const [bgcolor2, setBgColor2] = useState("#ffff");
  const [gradientType, setGradientType] = useState("linear");
  const [range, setRange] = useState(0);
  const [range1, setRange1] = useState(0);

  const [pattengradientType, setPattengradientType] = useState("linear");
  const [pattrencolor1, setPattrencolor1] = useState("#000000");
  const [pattrencolor2, setPattrencolor2] = useState("#000000");
  const [pattrenbgcolor1, setPattrenbgcolor1] = useState("#fff");
  const [pattrenbgcolor2, setPattrenbgcolor2] = useState("#fff");
  const [pattencolorrange, setPattencolorrange] = useState(0);
  const [pattenbgrange, setPattenbgrange] = useState(0);
  const [cornershapid, setCornershapid] = useState(1);
  const [cornerdots, setCornerdots] = useState("");
  const [cornersqurename, setCornersqurename] = useState("");
  const [cornersSquarecolor1, setCornersSquarecolor1] = useState("#000000");
  const [cornersSquarecolor2, setCornersSquarecolor2] = useState("#000000");
  const [cornersSquaregradientType, setCornersSquaregradientType] =
    useState("linear");
  const [cornersSquarecolorrange, setCornersSquarecolorrange] = useState(0);
  const [istoggelcorner, setIstoggelcorner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [centerstyleid, setCenterstyleid] = useState(1);
  const [centerstylecolor1, setCenterstylecolor1] = useState("#000000");
  const [centerstylecolor2, setCenterstylecolor2] = useState("#000000");
  const [centerstylegradientType, setCenterstylegradientType] =
    useState("linear");
  const [centerstylerange, setCenterstylerange] = useState(0);
  const [istoggelcenterstyle, setIstoggelcenterstyle] = useState(false);

  const handleSliderChange = (event: any) => {
    const degree = parseInt(event.target.value);
    setRange(degree);
  };
  const handleSliderChange1 = (event: any) => {
    const degree = parseInt(event.target.value);
    setRange1(degree);
  };
  const [isToggleButtonActive, setIsToggleButtonActive] = useState(false);
  const [isToggleButtonActive1, setIsToggleButtonActive1] = useState(false);
  const [selectedFilelog, setSelectedFilelog] = useState(null);
  const [webbackendurl, setWebbackendurl] = useState("");
  const [qrlist, setQrlist] = useState(null);

  const handleFromDateChange = (date: any) => {
    setFromDate(date);
  };
  const handleToDateChange = (date: any) => {
    setToDate(date);
  };
  const [activeStep, setActiveStep] = useState(() => {
    // Initialize active step from localStorage, or use 0 as default
    const storedActiveStep = localStorage.getItem("activeStep");
    return storedActiveStep ? parseInt(storedActiveStep, 10) : 0;
  });

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setAccessToken(token);
    }
  }, []);

  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: "http://qr-code.trippleapps.com/api/v1",
    headers: {
      Authorization: `Bearer ${accessToken || token}`,
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const storedData = localStorage.getItem("type");
  const [formData, setFormData] = useState({
    name: "",
    accessPassword: "",
    schedule: {
      from: "",
      to: "",
    },
    folder: selectedFolder,
    qrcodetype: storedData || qrcodetype,
    scanLimit: "",
    content: {
      url: "",
      uri: "",
    },
    style: {
      shape: {
        backgroundColor: shapbg,
        color: shapcolor,
        style: pattrencolor1,
      },
      corners: {
        dotColor: cornerdotcolor,
        dotStyle: cornerdotstyle,
        squareColor: cornersquarecolor,
        squareStyle: cornersquarestyle,
      },
      errorCorrectionLevel: errorcorection,
      frame: {
        id: 24,
        color: "#000000",
        text: "defult",
        fontSize: 100,
        backgroundColor: null,
        textColor: "null",
      },
    },
  });

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    setIsLoading(true);
    if (!isInputValid) {
      return;
    }

    try {
      const response = await instance.post("/user/create_qr", formData);
      const qrid = response.data.result.id;

      setNextstepid(qrid);
      setWebbackendurl(response.data.result.qr_url);
      localStorage.setItem("weburl", response.data.result.qr_url);
      if (qrid) {
        localStorage.setItem("nextid", qrid);
        navigate("qr-code-generator/design");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onSubmitForm = () => {
    handleSubmit("");
  };

  const nextspid = localStorage.getItem("nextid");
  const handlesqrcode = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("id", `${nextstepid || nextspid}`);
      formData.append(
        "json[style][errorCorrectionLevel]",
        errorCorrectionLevel
      );
      // cornersdot color and backgound color //
      formData.append("json[logoimg]", `${selectedFilelog}`);
      formData.append("json[style][corners][dotStyle]", cornerdots);
      formData.append("json[style][corners][dotColorr]", centerstylecolor1);
      formData.append(
        "json[style][corners][dotColor][type]",
        centerstylegradientType
      );
      formData.append(
        "json[style][corners][dotColor][rotation]",
        `${centerstylerange}`
      );
      formData.append(
        "json[style][corners][dotColor][colorStops][0][offset]",
        `${0}`
      );
      formData.append(
        "json[style][corners][dotColor][colorStops][0][color]",
        centerstylecolor1
      );
      formData.append(
        "json[style][corners][dotColor][colorStops][1][offset]",
        `${1}`
      );
      formData.append(
        "json[style][corners][dotColor][colorStops][1][color]",
        centerstylecolor2
      );
      // cornersdot color and backgound color //
      formData.append("json[style][corners][squareStyle]", cornersqurename);
      formData.append(
        "json[style][corners][squareColorr]",
        cornersSquarecolor1
      );
      formData.append(
        "json[style][corners][squareColor][type]",
        cornersSquaregradientType
      );
      formData.append(
        "json[style][corners][squareColor][rotation]",
        `${cornersSquarecolorrange}`
      );
      formData.append(
        "json[style][corners][squareColor][colorStops][0][offset]",
        `${0}`
      );
      formData.append(
        "json[style][corners][squareColor][colorStops][0][color]",
        cornersSquarecolor1
      );
      formData.append(
        "json[style][corners][squareColor][colorStops][1][offset]",
        `${1}`
      );
      formData.append(
        "json[style][corners][squareColor][colorStops][1][color]",
        cornersSquarecolor2
      );
      // cornersdot color and backgound color //

      // shapecolor color and backgound color //
      formData.append("json[style][shape][shapeStyle]", `${shapstyle}`);
      formData.append("json[style][shape][shapeColorr]", pattrencolor1);
      formData.append(
        "json[style][shape][shapeColor][type]",
        pattengradientType
      );
      formData.append(
        "json[style][shape][shapeColor][rotation]",
        `${pattencolorrange}`
      );
      formData.append(
        "json[style][shape][shapeColor][colorStops][0][offset]",
        `${0}`
      );
      formData.append(
        "json[style][shape][shapeColor][colorStops][0][color]",
        pattrencolor1
      );
      formData.append(
        "json[style][shape][shapeColor][colorStops][1][offset]",
        `${1}`
      );
      formData.append(
        "json[style][shape][shapeColor][colorStops][1][color]",
        pattrencolor2
      );
      // shapebg color and backgound color //
      formData.append("json[style][shape][shapebgColorr]", pattrenbgcolor1);
      formData.append(
        "json[style][shape][shapebgColor][type]",
        pattengradientType
      );
      formData.append(
        "json[style][shape][shapebgColor][rotation]",
        `${pattenbgrange}`
      );
      formData.append(
        "json[style][shape][shapebgColor][colorStops][0][offset]",
        `${0}`
      );
      formData.append(
        "json[style][shape][shapebgColor][colorStops][0][color]",
        pattrenbgcolor1
      );
      formData.append(
        "json[style][shape][shapebgColor][colorStops][1][offset]",
        `${1}`
      );
      formData.append(
        "json[style][shape][shapebgColor][colorStops][1][color]",
        pattrenbgcolor2
      );
      // shapebg color and backgound color //

      // formData.append("json[style][corners][squareColor]", "#000000");
      // formData.append("json[style][corners][squareStyle]", "default");

      // Add other form data properties as needed
      formData.append("json[frame][frameid]", `${frameid}`);
      formData.append("json[frame][text]", textdata);
      formData.append("json[frame][textColor]", textColor);
      formData.append("json[frame][colorr]", color1);
      formData.append("json[frame][color][type]", gradientType);
      formData.append("json[frame][color][rotation]", `${range}`);
      formData.append("json[frame][color][colorStops][0][offset]", `${0}`);
      formData.append("json[frame][color][colorStops][0][color]", color1);
      formData.append("json[frame][color][colorStops][1][offset]", `${1}`);
      formData.append("json[frame][color][colorStops][1][color]", color2);

      formData.append("json[frame][backgroundColorr]", bgcolor1);
      formData.append("json[frame][backgroundColor][type]", gradientType);
      formData.append("json[frame][backgroundColor][rotation]", `${range1}`);
      formData.append(
        "json[frame][backgroundColor][backgroundColorStops][0][offset]",
        `${0}`
      );
      formData.append(
        "json[frame][backgroundColor][backgroundColorStops][0][backgroundColor]",
        bgcolor1
      );
      formData.append(
        "json[frame][backgroundColor][backgroundColorStops][1][offset]",
        `${1}`
      );
      formData.append(
        "json[frame][backgroundColor][backgroundColorStops][1][backgroundColor]",
        bgcolor2
      );

      const response = await instance.post("/user/update_qr", formData);

      // Assuming response.data contains the updated qrcodedata

      setTimeout(() => {
        navigate("/my-qrcodes");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const [isPopoverOpenmenu, setIsPopoverOpenmenu] = useState(false);

  const togglePopovermenu = (item: any) => {
    setIsPopoverOpenmenu(item.id === isPopoverOpenmenu ? null : item.id);
  };

  const [open, setOpen] = useState(window.innerWidth >= 1200);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const typeOptions = [
    { id: 1, name: "Website" },
    { id: 2, name: "PDF" },
    { id: 3, name: "List of Links" },
    { id: 4, name: "Images" },
    { id: 5, name: "Video" },
    { id: 6, name: "Business" },
    { id: 7, name: "vCard Plus" },
    { id: 8, name: "Menu" },
    { id: 9, name: "Apps" },
    { id: 10, name: "MP3" },
    { id: 11, name: "Coupon" },
    { id: 12, name: "Feedback" },
    { id: 13, name: "Playlist" },
    { id: 14, name: "Landing Page" },
    { id: 15, name: "Event" },
    { id: 16, name: "2d Barcode" },
    { id: 17, name: "URL (Static)" },
    { id: 18, name: "Text (Static)" },
    { id: 19, name: "WiFi (Static)" },
    { id: 20, name: "Email (Static)" },
    { id: 21, name: "vCard (Static)" },
    { id: 22, name: "SMS (Static)" },
    { id: 23, name: "whatsapp (Static)" },
  ];

  const qrcodeStatus = [
    { id: 1, name: "All" },
    { id: 2, name: "Active" },
    { id: 3, name: "Paused" },
    { id: 4, name: "Pending" },
    { id: 5, name: "Finished" },
    { id: 6, name: "Deleted" },
  ];

  return (
    <ApiContext.Provider
      value={{
        instance,
        limit,
        selectedQrcodeIds,
        setSelectedQrcodeIds,
        selectedTypeIds,
        setSelectedTypeIds,
        typeOptions,
        qrcodeStatus,
        setLimit,
        selectedOptionssort,
        setSelectedOptionssort,
        darkmode,
        open,
        setOpen,
        isCollapsed,
        setIsCollapsed,
        setDarkmode,
        viewMode,
        isPopoverOpenmenu,
        setIsPopoverOpenmenu,
        togglePopovermenu,
        framlistid,
        setFramlistid,
        qrlist,
        qrcodelist,
        setQrcodelist,
        framdata,
        setFramdata,
        cornersqurename,
        setCornersqurename,
        setQrlist,
        setViewMode,
        handleGridButtonClick,
        handleListButtonClick,
        errorCorrectionLevel,
        setErrorCorrectionLevel,
        handlesqrcode,
        webbackendurl,
        setWebbackendurl,
        formData,
        nextstepid,
        setNextstepid,
        isLoading,
        setIsLoading,
        setFormData,
        selectedFolder,
        setSelectedFolder,
        onSubmitForm,
        contenttypeid,
        handleSubmit,
        setContenttypeid,
        activeStep,
        setActiveStep,
        handleNextStep,
        handlePreviousStep,
        setAccessToken,
        accessToken,
        cornerdots,
        setCornerdots,
        setAnimationVisible,
        animationVisible,
        setForgotpassanimi,
        forgotpassanimi,
        setFromDate,
        fromDate,
        setToDate,
        toDate,
        handleFromDateChange,
        handleToDateChange,
        shapbg,
        setShapbg,
        shapstyle,
        setShapstyle,
        shapcolor,
        setShapcolor,
        setErrorcorection,
        errorcorection,
        cornerdotcolor,
        setCornerdotcolor,
        cornerdotstyle,
        setCornerdotstyle,
        cornersquarecolor,
        setCornersquarecolor,
        cornersquarestyle,
        setCornersquarestyle,
        qrcode,
        setQRCode,
        frameid,
        setFrameid,
        textdata,
        setTextData,
        textColor,
        setTextColor,
        color1,
        setColor1,
        color2,
        setColor2,
        gradientType,
        setGradientType,
        range,
        setRange,
        isToggleButtonActive,
        setIsToggleButtonActive,
        bgcolor1,
        setBgColor1,
        bgcolor2,
        setBgColor2,
        handleSliderChange,
        range1,
        setRange1,
        handleSliderChange1,
        isToggleButtonActive1,
        setIsToggleButtonActive1,
        isCheckboxCheckedf,
        setIsCheckboxCheckedf,
        handleCheckboxChangef,
        selectedFilelog,
        setSelectedFilelog,
        pattrencolor1,
        setPattrencolor1,
        pattrencolor2,
        setPattrencolor2,
        pattencolorrange,
        setPattencolorrange,
        pattenbgrange,
        setPattenbgrange,
        pattengradientType,
        setPattengradientType,
        pattrenframeid,
        setPattrenframeid,
        pattrenbgcolor1,
        setPattrenbgcolor1,
        pattrenbgcolor2,
        setPattrenbgcolor2,
        isCheckboxCheckedpatrendbg,
        setIsCheckboxCheckedpatrendbg,
        handleCheckboxChangepattrenbg,
        cornershapid,
        setCornershapid,
        cornersSquarecolor1,
        setCornersSquarecolor1,
        cornersSquarecolor2,
        setCornersSquarecolor2,
        cornersSquaregradientType,
        setCornersSquaregradientType,
        cornersSquarecolorrange,
        setCornersSquarecolorrange,
        istoggelcorner,
        setIstoggelcorner,
        centerstyleid,
        setCenterstyleid,
        centerstylecolor1,
        setCenterstylecolor1,
        centerstylecolor2,
        setCenterstylecolor2,
        centerstylegradientType,
        setCenterstylegradientType,
        centerstylerange,
        setCenterstylerange,
        istoggelcenterstyle,
        modalqrcode,
        setModalqrcode,
        setIstoggelcenterstyle,
        qrcodetype,
        setQrcodetype,
        isInputValid,
        setIsInputValid,
        websiteUrl,
        setWebsiteUrl,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = (): ViewModeContextType => {
  return useContext(ApiContext);
};
