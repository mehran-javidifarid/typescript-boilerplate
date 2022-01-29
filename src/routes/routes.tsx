import Home from "../pages/home";
import Intro from "../pages/intro";
import Login from "../pages/login/login";
import Spinner from "../components/splash";
import PrivateLayout from "../pages/layout/privateLayout";
import PublicLayout from "../pages/layout/publicLayout";
import NotFound from "../pages/404";
import QrTestWrapper from "../components/qr-scanner/test-wrapper";
import BarcodeTestWrapper from "../components/barcode-scanner/barcode-test-wrapper";

export interface Iroutes {
    path: string
    header: boolean,
    footer: boolean,
    Component: any,
    exact: boolean,
    reverse: boolean,
    Layout: any,
    wrapperClassName: string,
    backButton?: any,
    title?: string,
    render?: any,
    backLink?: string,
    filterButton?: string,
}

const routes: Iroutes[] = [
    {
        path: "/barcode",
        header: true,
        title: 'test barcode',
        backLink: "/",
        footer: true,
        Component: BarcodeTestWrapper,
        exact: false,
        reverse: false,
        Layout: PrivateLayout,
        wrapperClassName: "customContainer customBg"
    },
    {
        path: "/qrcode",
        header: true,
        title: 'test qrcode',
        backLink: "/",
        footer: true,
        Component: QrTestWrapper,
        exact: false,
        reverse: false,
        Layout: PrivateLayout,
        wrapperClassName: "customContainer customBg"
    },
    {
        path: "/spinner",
        header: false,
        footer: false,
        Component: Spinner,
        exact: false,
        reverse: true,
        Layout: PublicLayout,
        wrapperClassName: "customContainer customheight"
    },
    {
        path: "/login",
        header: false,
        footer: false,
        Component: Login,
        exact: false,
        reverse: true,
        Layout: PublicLayout,
        wrapperClassName: "customContainer customBg"
    },
    {
        path: "/intro",
        header: false,
        footer: false,
        Component: Intro,
        exact: false,
        reverse: true,
        Layout: PublicLayout,
        wrapperClassName: "customContainer customBg"
    },
    {
        path: "/",
        header: true,
        footer: true,
        Component: Home,
        title: 'Home',
        exact: true,
        reverse: false,
        Layout: PrivateLayout,
        wrapperClassName: "customContainer customBg"
    },
    {
        path: "*",
        header: true,
        footer: true,
        Component: NotFound,
        exact: false,
        reverse: false,
        Layout: PrivateLayout,
        wrapperClassName: "customContainer customBg",
        backButton: "/"
    }
];

export default routes
