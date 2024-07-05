import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your layouts and views
import AdminLayout from "./layouts/admin/index";
import Dashboard from "./views/admin/default/Index";
import Webcontent from "./views/admin/default/maincomponents/websitepages/Webcontent";
import Webdesign from "./views/admin/default/maincomponents/websitepages/Webdesign";
import Signin from "./layouts/auth/index";
import Pdf from "./views/admin/default/maincomponents/Pdfpages/Pdf";
import Qrcode from "./components/Toplevelcomponent/qrcodedesign/Qrcode";
import Qrcodest from "./Qrcodest";
import Linkss from "./views/admin/default/maincomponents/Links/Linkss";
import Blunkqrcode from "./views/admin/default/Blukqrcodegeneration/Blunkqrcode";
import Myqrcode from "./views/admin/default/Myqrcode/Myqrcode";
import Imagesmain from "./views/admin/default/maincomponents/Images/Imgesmain";
import Videomain from "./views/admin/default/maincomponents/Video/Videomain";
import Staticsmain from "./views/admin/default/Statisties/Staticsmain";
import Mp3main from "./views/admin/default/maincomponents/mp3/Mp3main";
import Bussinessmain from "./views/admin/default/maincomponents/bussiness/Bussinessmain";
import Vcard from "./views/admin/default/maincomponents/vcard/Vcard";
import Barcodemain from "./views/admin/default/maincomponents/Barcode/Barcodemain";
import Eventmain from "./views/admin/default/maincomponents/Event/Eventmain";
import Staticwweb from "./views/admin/default/maincomponents/staticqrcode/saticweb/Staticwweb";
import StaticText from "./views/admin/default/maincomponents/staticqrcode/statictext/StaticText";
import StEmail from "./views/admin/default/maincomponents/staticqrcode/staticemail/StEmail";
import Sms from "./views/admin/default/maincomponents/staticqrcode/staticsms/Sms";
import StWhatsapp from "./views/admin/default/maincomponents/staticqrcode/staticwhatsapp/StWhatsapp";
import Wifimain from "./views/admin/default/maincomponents/staticqrcode/staticwifi/Wifimain";
import Vcardmain from "./views/admin/default/maincomponents/staticqrcode/staticvcard/Vcardmain";
import Landingmain from "./views/admin/default/maincomponents/landingpage/Landingmain";
import Playlistmain from "./views/admin/default/maincomponents/playlist/Playlistmain";
import Feedbackmain from "./views/admin/default/maincomponents/feedback/Feedbackmain";
import Couponmain from "./views/admin/default/maincomponents/Coupon/Couponmain";
import Appsmain from "./views/admin/default/maincomponents/apps/Appsmain";
import Menumain from "./views/admin/default/maincomponents/menu/Menumain";

const App: React.FC = () => {
  return (
    <Routes>
      {/* QR code generator routes */}
      <Route path="/qr-code-generator" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="web1" element={<Webcontent />} />
        <Route path="design" element={<Qrcode />} />
        <Route path="pdf1" element={<Pdf />} />
        <Route path="pdf2" element={<Qrcodest />} />
        <Route path="links1" element={<Linkss />} />
        <Route path="links2" element={<Webdesign />} />
        <Route path="imgurl1" element={<Imagesmain />} />
        <Route path="imgurl2" element={<Webdesign />} />
        <Route path="videourl1" element={<Videomain />} />
        <Route path="videourl2" element={<Webdesign />} />
        <Route path="mp3url1" element={<Mp3main />} />
        <Route path="mp3url2" element={<Webdesign />} />
        <Route path="business1" element={<Bussinessmain />} />
        <Route path="business2" element={<Webdesign />} />
        <Route path="vcard1" element={<Vcard />} />
        <Route path="vcard2" element={<Webdesign />} />
        <Route path="menu1" element={<Menumain />} />
        <Route path="menu2" element={<Webdesign />} />
        <Route path="apps1" element={<Appsmain />} />
        <Route path="apps2" element={<Webdesign />} />
        <Route path="coupon1" element={<Couponmain />} />
        <Route path="coupon2" element={<Webdesign />} />
        <Route path="feedback1" element={<Feedbackmain />} />
        <Route path="feedback2" element={<Webdesign />} />
        <Route path="playlist1" element={<Playlistmain />} />
        <Route path="playlist2" element={<Webdesign />} />
        <Route path="barcode1" element={<Barcodemain />} />
        <Route path="barcode2" element={<Webdesign />} />
        <Route path="langpage1" element={<Landingmain />} />
        <Route path="langpage2" element={<Webdesign />} />
        <Route path="event1" element={<Eventmain />} />
        <Route path="event2" element={<Webdesign />} />
        <Route path="web-static1" element={<Staticwweb />} />
        <Route path="webs-static2" element={<Webdesign />} />
        <Route path="text1" element={<StaticText />} />
        <Route path="text2" element={<Webdesign />} />
        <Route path="email1" element={<StEmail />} />
        <Route path="email2" element={<Webdesign />} />
        <Route path="sms1" element={<Sms />} />
        <Route path="sms2" element={<Webdesign />} />
        <Route path="whatsapp1" element={<StWhatsapp />} />
        <Route path="whatsapp2" element={<Webdesign />} />
        <Route path="wifi1" element={<Wifimain />} />
        <Route path="wifi2" element={<Webdesign />} />
        <Route path="vcard-static1" element={<Vcardmain />} />
        <Route path="vcard-static2" element={<Webdesign />} />
      </Route>

      <Route path="/bulkqr" element={<AdminLayout />}>
        <Route index element={<Blunkqrcode />} />
      </Route>

      <Route path="/my-qrcodes" element={<AdminLayout />}>
        <Route index element={<Myqrcode />} />
      </Route>

      <Route path="/statistics" element={<AdminLayout />}>
        <Route index element={<Staticsmain />} />
      </Route>

      <Route path="/templates" element={<AdminLayout />}>
        <Route index element={<Blunkqrcode />} />
      </Route>

      <Route path="/" element={<Signin />} />
    </Routes>
  );
};

export default App;
