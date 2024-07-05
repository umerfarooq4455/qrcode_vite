import React, { createContext, useContext, useState, ReactNode } from "react";

type FontOption = {
  name: string;
  value: string;
};

type PdfDynamicProviderProps = {
  children: ReactNode;
};

type ViewModeContextType = {
  selectedpdfTemp: number;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  pdfTitle: string;
  setPdfTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  website: string;
  setWebsite: React.Dispatch<React.SetStateAction<string>>;
  buttonText: string;
  setButtonText: React.Dispatch<React.SetStateAction<string>>;
  titleFont: string;
  setTitleFont: React.Dispatch<React.SetStateAction<string>>;
  textFont: string;
  setTextFont: React.Dispatch<React.SetStateAction<string>>;
  fontOptions: FontOption[];
  setSelectedpdfTemp: React.Dispatch<React.SetStateAction<number>>;
  secondaryColors: string[];
  setSecondaryColors: React.Dispatch<React.SetStateAction<string[]>>;
  primaryColors: string[];
  setPrimaryColors: React.Dispatch<React.SetStateAction<string[]>>;
  primary: string;
  setPrimary: React.Dispatch<React.SetStateAction<string>>;
  secondary: string;
  setSecondary: React.Dispatch<React.SetStateAction<string>>;
};

// Create context
const ViewModeContext = createContext<ViewModeContextType>({} as ViewModeContextType);

// Provider component
export const PdfDynamicProvider: React.FC<PdfDynamicProviderProps> = ({ children }) => {
  const [selectedpdfTemp, setSelectedpdfTemp] = useState<number>(1);
  const [primaryColors, setPrimaryColors] = useState<string[]>([
    "#000",
    "#EDE728",
    "#28ED28",
    "#6D21B1",
    "#ED4C28",
    "#E8F86C",
    "#3D656B",
    "#BAED28",
    "#8A9928",
    "#171CAB",
    "#FF9100",
    "#D7BCE1",
    "#FDC400",
    "#EC7D43",
    "#B8909A",
    "#07B09C",
  ]);
  const [secondaryColors, setSecondaryColors] = useState<string[]>([
    "#F18430",
    "#A39E0A",
    "#00A301",
    "#C743D2",
    "#A31F01",
    "#1D59F9",
    "#FD6F70",
    "#7CB1E1",
    "#FDBCCB",
    "#759DFE",
    "#FFBC64",
    "#7B5788",
    "#DA5F97",
    "#A24545",
    "#6FA8FD",
    "#A36200",
  ]);

  const fontOptions: FontOption[] = [
    { name: "Lato", value: "Lato" },
    { name: "Open Sans", value: "Open Sans" },
    { name: "Roboto", value: "Roboto" },
    { name: "Oswald", value: "Oswald" },
    { name: "Source Code Pro", value: "Source Code Pro" },
    { name: "Slabo 27px", value: "Slabo 27px" },
    { name: "Raleway", value: "Raleway" },
    { name: "Merriweather", value: "Merriweather" },
    { name: "Noto Sans", value: "Noto Sans" },
    { name: "Economica", value: "Economica" },
    { name: "Inconsolata", value: "Inconsolata" },
    { name: "Dancing Script", value: "Dancing Script" },
    { name: "Barlow", value: "Barlow" },
    { name: "Comfortaa", value: "Comfortaa" },
    { name: "Crimson Text", value: "Crimson Text" },
    { name: "EB Garamond", value: "EB Garamond" },
    { name: "Fira Sans", value: "Fira Sans" },
    { name: "Josefin Sans", value: "Josefin Sans" },
    { name: "Karla", value: "Karla" },
    { name: "Manrope", value: "Manrope" },
    { name: "Mukta", value: "Mukta" },
    { name: "Montserrat", value: "Montserrat" },
    { name: "Prompt", value: "Prompt" },
    { name: "PT Serif", value: "PT Serif" },
    { name: "Space Grotesk", value: "Space Grotesk" },
    { name: "Titillium Web", value: "Titillium Web" },
    { name: "Ubuntu", value: "Ubuntu" },
    { name: "Bebas Neue", value: "Bebas Neue" },
    { name: "Outfit", value: "Outfit" },
    { name: "Righteous", value: "Righteous" },
    { name: "Lobster", value: "Lobster" },
    { name: "Questrial", value: "Questrial" },
    { name: "Manjari", value: "Manjari" },
    { name: "Capriola", value: "Capriola" },
  ];

  const [primary, setPrimary] = useState<string>("#000");
  const [secondary, setSecondary] = useState<string>("#F18430");

  const [titleFont, setTitleFont] = useState<string>(fontOptions[0].value);
  const [textFont, setTextFont] = useState<string>(fontOptions[0].value);

  const [company, setCompany] = useState<string>("los Burgueses");
  const [pdfTitle, setPdfTitle] = useState<string>("Meet our burgers");
  const [description, setDescription] = useState<string>(
    "Our selection of burgers will surprise you. Their flavor will delight you."
  );
  const [website, setWebsite] = useState<string>("https://www.qrcodegenerator.com");
  const [buttonText, setButtonText] = useState<string>("See Menu");

  return (
    <ViewModeContext.Provider
      value={{
        selectedpdfTemp,
        company,
        setCompany,
        pdfTitle,
        setPdfTitle,
        description,
        setDescription,
        website,
        setWebsite,
        buttonText,
        setButtonText,
        titleFont,
        setTitleFont,
        textFont,
        setTextFont,
        fontOptions,
        setSelectedpdfTemp,
        secondaryColors,
        setSecondaryColors,
        primaryColors,
        setPrimaryColors,
        primary,
        setPrimary,
        secondary,
        setSecondary,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
};

// Custom hook to use ViewModeContext
export const usePdfMode = (): ViewModeContextType => {
  return useContext(ViewModeContext);
};
