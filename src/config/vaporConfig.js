import Vapor from 'laravel-vapor';

export const configureVapor = () => {
    Vapor.config({
        assetDomain: process.env.REACT_APP_VAPOR_ASSET_DOMAIN,
        baseURL: process.env.REACT_APP_BACKEND_URL,
    });
};

export default Vapor;